// Partie « en ligne » de l'appli : comptes, statistiques synchronisées, demandes
// de modification avec photos, validation par l'admin, annonces.
// Chargée seulement si window.CLOUD_CONFIG existe (config.js). Expose window.CLOUD.
const V = "10.14.1";
const B = (window.FIREBASE_SDK_BASE || `https://www.gstatic.com/firebasejs/${V}/`);
const [{ initializeApp }, A, F] = await Promise.all([
  import(B + "firebase-app.js"), import(B + "firebase-auth.js"), import(B + "firebase-firestore.js")
]);
const cfg = window.CLOUD_CONFIG;
const app = initializeApp(cfg.firebase);
const auth = A.getAuth(app);
const db = F.getFirestore(app);
if (cfg.emulator) { A.connectAuthEmulator(auth, "http://" + cfg.emulator.auth, { disableWarnings: true }); F.connectFirestoreEmulator(db, ...cfg.emulator.firestore.split(":").map((x, i) => i ? +x : x)); }
const ADMINS = (cfg.admins || []).map(s => s.toLowerCase());
const { doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc, collection, query, where, orderBy, limit, getDocs, serverTimestamp, writeBatch } = F;

let user = null; const subs = new Set();
let MSG = null;
async function messaging() {
  if (MSG !== null) return MSG;
  try { const Mm = await import(B + "firebase-messaging.js"); MSG = (await Mm.isSupported()) ? { Mm, m: Mm.getMessaging(app) } : false; } catch (e) { MSG = false; }
  return MSG;
}
const profile = u => u && ({ uid: u.uid, email: u.email, nom: u.displayName || (u.email || "").split("@")[0], admin: !!u.email && u.emailVerified && ADMINS.includes(u.email.toLowerCase()) });
A.onAuthStateChanged(auth, u => {
  user = profile(u); subs.forEach(f => f(user));
  const t = localStorage.getItem("caie:pushToken");
  if (t) setDoc(doc(db, "push", t), { token: t, uid: user ? user.uid : null, cree: serverTimestamp(), ua: navigator.userAgent.slice(0, 200) }).catch(() => {});
});
const need = () => { if (!user) throw new Error("Connecte-toi d'abord."); };
const needAdmin = () => { need(); if (!user.admin) throw new Error("Réservé à l'administrateur."); };
const list = async q => (await getDocs(q)).docs.map(d => ({ id: d.id, ...d.data() }));
const ms = t => t && t.toMillis ? t.toMillis() : (t || 0);

function frErr(e) {
  const c = (e && e.code) || "";
  const m = {
    "auth/invalid-email": "Adresse e-mail invalide.", "auth/missing-password": "Mot de passe manquant.",
    "auth/weak-password": "Mot de passe trop court (6 caractères minimum).",
    "auth/email-already-in-use": "Un compte existe déjà avec cette adresse : connecte-toi.",
    "auth/invalid-credential": "E-mail ou mot de passe incorrect.", "auth/wrong-password": "Mot de passe incorrect.",
    "auth/user-not-found": "Aucun compte avec cette adresse.", "auth/popup-closed-by-user": "Fenêtre de connexion fermée.",
    "auth/popup-blocked": "Le navigateur a bloqué la fenêtre de connexion. Autorise les pop-ups ou utilise l'e-mail.",
    "auth/unauthorized-domain": "Ce site n'est pas autorisé dans Firebase (Authentication › Settings › Authorized domains).",
    "auth/too-many-requests": "Trop d'essais. Réessaie dans quelques minutes.",
    "auth/network-request-failed": "Pas de connexion internet.",
    "permission-denied": "Accès refusé par les règles de sécurité Firebase."
  };
  return new Error(m[c] || (e && e.message) || "Erreur inconnue.");
}
const wrap = f => async (...a) => { try { return await f(...a); } catch (e) { throw frErr(e); } };

window.CLOUD = {
  get user() { return user; },
  onUser(f) { subs.add(f); f(user); return () => subs.delete(f); },
  signInGoogle: wrap(async () => { const p = new A.GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" }); await A.signInWithPopup(auth, p); }),
  signInEmail: wrap((e, p) => A.signInWithEmailAndPassword(auth, e, p)),
  signUp: wrap(async (e, p, nom) => { const r = await A.createUserWithEmailAndPassword(auth, e, p); if (nom) { await A.updateProfile(r.user, { displayName: nom }); user = profile(r.user); subs.forEach(f => f(user)); } }),
  resetPassword: wrap(e => A.sendPasswordResetEmail(auth, e)),
  signOut: wrap(() => A.signOut(auth)),

  // Statistiques et progression de la personne connectée
  loadMine: wrap(async () => { need(); const s = await getDoc(doc(db, "users", user.uid)); return s.exists() ? s.data() : null; }),
  saveMine: wrap(async data => { need(); await setDoc(doc(db, "users", user.uid), { ...data, nom: user.nom, email: user.email, maj: serverTimestamp() }, { merge: true }); }),

  // Demandes de modification / ajout
  submitDemande: wrap(async (d, photos) => {
    need();
    const ref = await addDoc(collection(db, "demandes"), {
      uid: user.uid, auteur: user.nom, email: user.email, statut: "en_attente",
      type: d.type, matiere: d.matiere || "", chapitre: d.chapitre || "", chapitreTitre: d.chapitreTitre || "",
      titre: d.titre || "", texte: d.texte || "", nbPhotos: photos.length,
      minis: photos.map(p => p.mini), cree: serverTimestamp()
    });
    for (let i = 0; i < photos.length; i++) await setDoc(doc(db, "demandes", ref.id, "photos", String(i)), { data: photos[i].data, w: photos[i].w, h: photos[i].h });
    return ref.id;
  }),
  myDemandes: wrap(async () => { need(); return (await list(query(collection(db, "demandes"), where("uid", "==", user.uid)))).sort((a, b) => ms(b.cree) - ms(a.cree)); }),
  allDemandes: wrap(async () => { needAdmin(); return (await list(collection(db, "demandes"))).sort((a, b) => ms(b.cree) - ms(a.cree)); }),
  demandePhoto: wrap(async (id, i) => { const s = await getDoc(doc(db, "demandes", id, "photos", String(i))); return s.exists() ? s.data().data : null; }),
  // mode : "publier" (affiché tel quel sous le chapitre), "claude" (Claude l'intègre au cours), "refuser"
  decide: wrap(async (dm, mode, commentaire) => {
    needAdmin();
    const ok = mode === "publier" || mode === "claude", claude = mode === "claude";
    const b = writeBatch(db);
    b.update(doc(db, "demandes", dm.id), { statut: claude ? "a_integrer" : ok ? "validee" : "refusee", commentaire: commentaire || "", decide: serverTimestamp() });
    if (ok) {
      const cref = doc(db, "contributions", dm.id);
      b.set(cref, { type: dm.type, matiere: dm.matiere, chapitre: dm.chapitre, chapitreTitre: dm.chapitreTitre || "", titre: dm.titre, texte: dm.texte, auteur: dm.auteur, nbPhotos: dm.nbPhotos || 0, minis: dm.minis || [], claude, commentaire: commentaire || "", cree: serverTimestamp() });
      if (!claude) b.set(doc(collection(db, "annonces")), { texte: annonceTexte(dm), lien: dm.matiere && dm.chapitre ? dm.matiere + "." + dm.chapitre : "", cree: serverTimestamp() });
    }
    await b.commit();
    if (ok) for (let i = 0; i < (dm.nbPhotos || 0); i++) {
      const p = await getDoc(doc(db, "demandes", dm.id, "photos", String(i)));
      if (p.exists()) await setDoc(doc(db, "contributions", dm.id, "photos", String(i)), p.data());
    }
  }),
  deleteDemande: wrap(async dm => { needAdmin(); for (let i = 0; i < (dm.nbPhotos || 0); i++) await deleteDoc(doc(db, "demandes", dm.id, "photos", String(i))); await deleteDoc(doc(db, "demandes", dm.id)); }),
  removeContribution: wrap(async c => { needAdmin(); for (let i = 0; i < (c.nbPhotos || 0); i++) await deleteDoc(doc(db, "contributions", c.id, "photos", String(i))); await deleteDoc(doc(db, "contributions", c.id)); }),

  // Contenu validé, visible de tous (même sans compte)
  contributions: wrap(async () => (await list(collection(db, "contributions"))).sort((a, b) => ms(a.cree) - ms(b.cree))),
  contributionPhoto: wrap(async (id, i) => { const s = await getDoc(doc(db, "contributions", id, "photos", String(i))); return s.exists() ? s.data().data : null; }),
  annonces: wrap(async () => (await list(query(collection(db, "annonces"), orderBy("cree", "desc"), limit(20)))).map(a => ({ ...a, t: ms(a.cree) }))),
  addAnnonce: wrap(async (texte, lien) => { needAdmin(); await addDoc(collection(db, "annonces"), { texte, lien: lien || "", cree: serverTimestamp() }); }),

  // Vue admin : la classe, et exclusion d'une personne
  users: wrap(async () => { needAdmin(); return list(collection(db, "users")); }),
  bannis: wrap(async () => { needAdmin(); return list(collection(db, "bannis")); }),
  exclure: wrap(async u => { needAdmin(); await setDoc(doc(db, "bannis", u.id), { nom: u.nom || "", email: u.email || "", quand: serverTimestamp() }); }),
  reintegrer: wrap(async uid => { needAdmin(); await deleteDoc(doc(db, "bannis", uid)); }),
  suisExclu: async () => { if (!user || user.admin) return false; try { return (await getDoc(doc(db, "bannis", user.uid))).exists(); } catch (e) { return false; } },

  // Notifications push (même appli fermée) : jeton FCM enregistré dans push/{jeton},
  // l'envoi est fait par GitHub Actions (notifs/send.mjs).
  pushPossible: async () => !!(cfg.vapidKey && "serviceWorker" in navigator && "Notification" in window && "PushManager" in window && await messaging()),
  pushActif: () => !!localStorage.getItem("caie:pushToken") && "Notification" in window && Notification.permission === "granted",
  activerPush: wrap(async () => {
    const x = await messaging(); if (!x || !cfg.vapidKey) throw new Error("Ce navigateur ne gère pas les notifications.");
    let p = Notification.permission; if (p === "default") p = await Notification.requestPermission();
    if (p !== "granted") throw new Error("Les notifications sont bloquées pour ce site : autorise-les dans les réglages du navigateur.");
    const reg = await navigator.serviceWorker.register("firebase-messaging-sw.js");
    const token = await x.Mm.getToken(x.m, { vapidKey: cfg.vapidKey, serviceWorkerRegistration: reg });
    if (!token) throw new Error("Impossible d'obtenir l'abonnement aux notifications.");
    await setDoc(doc(db, "push", token), { token, uid: user ? user.uid : null, cree: serverTimestamp(), ua: navigator.userAgent.slice(0, 200) });
    localStorage.setItem("caie:pushToken", token);
  }),
  desactiverPush: wrap(async () => {
    const t = localStorage.getItem("caie:pushToken"); localStorage.removeItem("caie:pushToken");
    if (t) { try { await deleteDoc(doc(db, "push", t)); } catch (e) {} try { const x = await messaging(); if (x) await x.Mm.deleteToken(x.m); } catch (e) {} }
  }),
  onPush(f) { messaging().then(x => x && x.Mm.onMessage(x.m, p => f(p.notification || p.data || {}, (p.fcmOptions || {}).link))).catch(() => {}); },
  ms
};
function annonceTexte(dm) {
  const ou = dm.chapitreTitre ? ` dans « ${dm.chapitreTitre} »` : "";
  if (dm.type === "photo") return `Nouvelles photos ajoutées${ou}`;
  if (dm.type === "ajout" || dm.type === "cours") return `Nouveau contenu ajouté${ou} : ${dm.titre || "ajout de la classe"}`;
  return `Correction ajoutée${ou} : ${dm.titre || "modification"}`;
}
window.dispatchEvent(new Event("cloud-ready"));
