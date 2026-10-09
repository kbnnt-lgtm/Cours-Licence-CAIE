// Envoi des notifications push (lancé par GitHub Actions : à chaque mise à jour du site
// et toutes les 10 minutes). Lit cours.js et Firestore, compare avec l'état déjà notifié
// (document meta/notifs) et envoie :
//   - à tout le monde : nouveaux cours, nouvelles annonces ;
//   - à l'admin : nouvelles demandes à valider ;
//   - à l'auteur : la décision sur sa demande ;
//   - à tout le monde, la veille à 18h : les cours du lendemain (planning.js).
// Publie aussi les règles Firestore (notifs/firestore.rules) si elles ont changé.
// Identifiants : secret GitHub FIREBASE_SA (clé de compte de service Firebase, JSON).
import admin from "firebase-admin";
import fs from "node:fs";
import vm from "node:vm";

const SITE = "https://kbnnt-lgtm.github.io/Cours-Licence-CAIE/";
const sa = process.env.FIREBASE_SA ? JSON.parse(process.env.FIREBASE_SA) : null;
if (!sa) { console.log("Secret FIREBASE_SA absent : rien à envoyer."); process.exit(0); }
admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();
const ms = t => (t && t.toMillis ? t.toMillis() : 0);

// 1. Règles de sécurité
try {
  const src = fs.readFileSync(new URL("./firestore.rules", import.meta.url), "utf8");
  const rr = admin.securityRules();
  let actuel = "";
  try { actuel = (await rr.getFirestoreRuleset()).source.map(f => f.content).join(""); } catch (e) {}
  if (actuel.trim() !== src.trim()) { await rr.releaseFirestoreRulesetFromSource(src); console.log("Règles Firestore publiées."); }
  else console.log("Règles Firestore déjà à jour.");
} catch (e) { console.log("Règles NON publiées :", e.message); }

// 2. Contenu du site
const ctx = { window: {} }; ctx.self = ctx.window;
vm.runInNewContext(fs.readFileSync("cours.js", "utf8"), ctx);
vm.runInNewContext(fs.readFileSync("config.js", "utf8"), ctx);
const COURS = ctx.window.COURS, ADMINS = (ctx.window.CLOUD_CONFIG.admins || []).map(s => s.toLowerCase());
const chaps = COURS.matieres.filter(m => !m.exemple).flatMap(m => m.chapitres.map(c => ({ key: m.id + "." + c.id, titre: c.titre, mat: m.nom })));

// 3. État déjà notifié
const ref = db.doc("meta/notifs");
const st = (await ref.get()).data() || null;
const now = admin.firestore.Timestamp.now();
if (!st) {
  await ref.set({ chapitres: chaps.map(c => c.key), annT: now, dmT: now, decT: now });
  console.log("Première exécution : état initialisé, aucun envoi.");
  process.exit(0);
}

// 3 bis. Inscriptions validées par l'admin (inscrits/{uid}). À la mise en place, tous les comptes
// existants (la classe) sont validés d'office.
if (!st.inscritsInit) {
  let n = 0, page;
  do {
    page = await admin.auth().listUsers(1000, page && page.pageToken);
    for (const u of page.users) {
      const r = db.doc("inscrits/" + u.uid);
      if (!(await r.get()).exists) { await r.set({ statut: "valide", nom: u.displayName || "", email: u.email || "", quand: now, auto: true }); n++; }
      await db.doc("attente/" + u.uid).delete().catch(() => {});
    }
  } while (page.pageToken);
  st.inscritsInit = true;
  await ref.set({ inscritsInit: true }, { merge: true });
  console.log(`Inscriptions : ${n} compte(s) existant(s) validé(s) d'office.`);
}
const valides = new Set((await db.collection("inscrits").where("statut", "==", "valide").get()).docs.map(d => d.id));

// 4. Abonnés
const bannis = new Set((await db.collection("bannis").get()).docs.map(d => d.id));
const subs = (await db.collection("push").get()).docs.map(d => d.data()).filter(p => p.token && !(p.uid && bannis.has(p.uid)));
const adminUids = new Set();
for (const uid of new Set(subs.map(p => p.uid).filter(Boolean))) {
  try { const u = await admin.auth().getUser(uid); if (u.email && u.emailVerified && ADMINS.includes(u.email.toLowerCase())) adminUids.add(uid); } catch (e) {}
}
console.log(`${subs.length} appareil(s) abonné(s), dont ${subs.filter(p => adminUids.has(p.uid)).length} admin.`);

const morts = new Set();
async function envoyer(tokens, title, body, hash) {
  tokens = [...new Set(tokens)].filter(t => !morts.has(t));
  if (!tokens.length) return;
  for (let i = 0; i < tokens.length; i += 500) {
    const lot = tokens.slice(i, i + 500);
    let r;
    try { r = await admin.messaging().sendEachForMulticast({
      tokens: lot,
      webpush: { notification: { title, body, icon: SITE + "icone.png", badge: SITE + "icone.png", tag: hash || "caie" }, fcmOptions: { link: SITE + (hash ? "#" + hash : "") } }
    }); } catch (e) { console.log(`« ${title} » : envoi impossible (${e.message}).`); return; }
    r.responses.forEach((x, k) => { const c = x.error && x.error.code; if (c && /registration-token-not-registered|invalid-registration-token|invalid-argument/.test(c)) morts.add(lot[k]); });
    console.log(`« ${title} » : ${r.successCount} envoyée(s), ${r.failureCount} échec(s).`);
  }
}
// « Tout le monde » = les comptes validés (et l'admin) ; pas les abonnements anonymes ni en attente
const tous = subs.filter(p => p.uid && (valides.has(p.uid) || adminUids.has(p.uid))).map(p => p.token);

// 5. Nouveaux cours
const deja = new Set(st.chapitres || []);
const neufs = chaps.filter(c => !deja.has(c.key));
if (neufs.length === 1) await envoyer(tous, "Nouveau cours", `${neufs[0].titre} (${neufs[0].mat})`, neufs[0].key);
else if (neufs.length > 1) await envoyer(tous, `${neufs.length} nouveaux cours`, neufs.slice(0, 3).map(c => c.titre).join(", ") + (neufs.length > 3 ? "…" : ""), neufs[0].key);

// 6. Annonces
const ann = (await db.collection("annonces").where("cree", ">", st.annT).get()).docs.map(d => d.data()).sort((a, b) => ms(a.cree) - ms(b.cree));
for (const a of ann.slice(-3)) await envoyer(tous, "Cours Licence CAIE", a.texte || "Nouvelle annonce", a.lien || "");

// 7. Demandes : nouvelles (pour l'admin) et décisions (pour l'auteur)
const adm = subs.filter(p => adminUids.has(p.uid)).map(p => p.token);
const dms = (await db.collection("demandes").where("cree", ">", st.dmT).get()).docs.map(d => d.data());
if (dms.length === 1) await envoyer(adm, "Nouvelle demande à valider", `${dms[0].auteur || "Quelqu'un"} : ${dms[0].titre || "demande"}`, "admin");
else if (dms.length > 1) await envoyer(adm, `${dms.length} nouvelles demandes à valider`, dms.map(d => d.auteur).filter(Boolean).slice(0, 3).join(", "), "admin");
const STATUT = { validee: "acceptée et publiée", a_integrer: "acceptée : Claude l'intègre au cours", integree: "intégrée au cours", refusee: "refusée" };
const decs = (await db.collection("demandes").where("decide", ">", st.decT).get()).docs.map(d => d.data());
for (const d of decs) {
  if (!STATUT[d.statut]) continue;
  await envoyer(subs.filter(p => p.uid === d.uid).map(p => p.token), "Ta demande", `« ${d.titre || "Ta demande"} » a été ${STATUT[d.statut]}.`, "moi");
}

// 7 bis. Rappel de la veille à 18h (heure de Paris) : cours, horaires et salles du lendemain
const paris = d => new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23" }).formatToParts(d).reduce((o, x) => (o[x.type] = x.value, o), {});
const pn = paris(new Date()), heure = +pn.hour;
const demainD = new Date(Date.UTC(+pn.year, +pn.month - 1, +pn.day + 1)), demain = demainD.toISOString().slice(0, 10);
let rappel = st.rappel || "";
if (heure >= 18 && heure < 23 && rappel !== demain && fs.existsSync("planning.js")) {
  vm.runInNewContext(fs.readFileSync("planning.js", "utf8"), ctx);
  const P = ctx.window.PLANNING || { evenements: [] };
  const evs = P.evenements.filter(e => e.d === demain && e.t !== "entreprise").sort((a, b) => a.h1.localeCompare(b.h1));
  if (evs.length) {
    const h = t => t.replace(/^0/, "").replace(":00", "h").replace(":", "h");
    const blocs = [];
    for (const e of evs) { const b = blocs[blocs.length - 1]; if (b && b.titre === e.titre && b.salle === e.salle) b.h.push(h(e.h1) + "–" + h(e.h2)); else blocs.push({ ...e, h: [h(e.h1) + "–" + h(e.h2)] }); }
    // Chapitre probable : la matière de l'appli qui correspond au cours, et son dernier chapitre de cours
    const MAT = [[/automatis|programmation|automate/i, "automatisme"], [/harmonisation|électrotech|distribution/i, "electrotechnique"], [/anglais/i, "anglais"]];
    const mats = COURS.matieres.filter(m => !m.exemple);
    const lignes = blocs.map(b => {
      let l = `${b.h.join(" et ")} : ${b.titre}${b.prof ? " (" + b.prof + ")" : ""}${b.salle ? ", " + b.salle : ""}`;
      const id = (MAT.find(([r]) => r.test(b.titre + " " + b.ue)) || [])[1];
      const m = mats.find(x => x.id === id || x.nom.toLowerCase() === b.titre.toLowerCase());
      const ch = m && m.chapitres.filter(c => !/^(exercices|devoirs|dm|tp)-/.test(c.id)).pop();
      if (ch) l += `. Chapitre probable : suite de « ${ch.titre} »`;
      return l + ".";
    });
    // Devoirs à rendre demain (titre du chapitre « pour le lundi 12 octobre »)
    const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const cle = new RegExp(`\\b${demainD.getUTCDate()}(er)? ${MOIS[demainD.getUTCMonth()]}`, "i");
    for (const m of mats) for (const c of m.chapitres) if (/^(dm|devoirs)-/.test(c.id) && cle.test(c.titre)) lignes.push(`À rendre : ${c.titre.replace(/\s*\(pour le[^)]*\)/i, "")}.`);
    const jour = new Intl.DateTimeFormat("fr-FR", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" }).format(demainD);
    await envoyer(tous, `Demain, ${jour}`, lignes.join("\n"), "planning");
    console.log("Rappel du lendemain :\n" + lignes.join("\n"));
  } else console.log("Pas de cours demain : pas de rappel.");
  rappel = demain;
}

// 7 ter. Nouvelles inscriptions à valider (pour l'admin)
const insT = st.insT || now;
const att = st.insT ? (await db.collection("attente").where("cree", ">", st.insT).get()).docs.map(d => d.data()) : [];
if (att.length === 1) await envoyer(adm, "Inscription à valider", `${att[0].nom || "Quelqu'un"} (${att[0].email || "sans e-mail"}) a créé un compte.`, "admin");
else if (att.length > 1) await envoyer(adm, `${att.length} inscriptions à valider`, att.map(a => a.nom || a.email).slice(0, 3).join(", "), "admin");
const insT2 = att.length ? att.reduce((m, a) => (ms(a.cree) > ms(m) ? a.cree : m), insT) : insT;

// 8. Nettoyage et nouvel état
for (const t of morts) await db.collection("push").doc(t).delete().catch(() => {});
for (const p of (await db.collection("push").get()).docs) if (p.data().uid && bannis.has(p.data().uid)) await p.ref.delete();
await ref.set({ chapitres: chaps.map(c => c.key), annT: ann.length ? ann.reduce((m, a) => (ms(a.cree) > ms(m) ? a.cree : m), st.annT) : st.annT,
  dmT: dms.length ? dms.reduce((m, d) => (ms(d.cree) > ms(m) ? d.cree : m), st.dmT) : st.dmT,
  decT: decs.length ? decs.reduce((m, d) => (ms(d.decide) > ms(m) ? d.decide : m), st.decT) : st.decT, rappel, insT: insT2, inscritsInit: true });
console.log("Terminé.");
process.exit(0);
