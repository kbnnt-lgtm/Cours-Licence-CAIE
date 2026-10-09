// Assistant IA des cours (bulle « Une question ? »). Chargé à la première ouverture de la bulle.
// Deux voies vers Gemini (offre gratuite) :
//  - CLOUD_CONFIG.ia.relais : relais Cloudflare (relais-ia/worker.js) qui garde la clé Gemini secrète ;
//  - CLOUD_CONFIG.ia.cleGemini présente : appel direct à l'API Gemini avec une clé dédiée, restreinte
//    au site (référents HTTP) et à la seule API Gemini dans Google Cloud ;
//  - sinon Firebase AI Logic, avec la clé publique de config.js.
// Expose window.IA.chat(contexte) → { send(texte, onMorceau) }.
const cfg = window.CLOUD_CONFIG;
// Clé Gemini posée par l'admin dans le fichier ia-cle.js du dépôt (window.CLE_GEMINI = "…"), facultatif
try { await import(new URL("ia-cle.js", location.href).href); } catch (e) {}
const CLE = (cfg.ia && cfg.ia.cleGemini) || window.CLE_GEMINI, RELAIS = cfg.ia && cfg.ia.relais; // relais : la clé reste cachée côté serveur
const DIRECT = !!(CLE || RELAIS);
const MODELES = (cfg.ia && cfg.ia.modeles) || ["gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.5-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
let AI = null, ai = null;
if (!DIRECT) {
  const V = "12.4.0";
  const B = (window.FIREBASE_SDK_BASE_IA || `https://www.gstatic.com/firebasejs/${V}/`);
  const [{ initializeApp, getApps }, M] = await Promise.all([import(B + "firebase-app.js"), import(B + "firebase-ai.js")]);
  AI = M;
  const app = getApps().find(a => a.name === "ia") || initializeApp(cfg.firebase, "ia");
  ai = AI.getAI(app, { backend: new AI.GoogleAIBackend() });
}
// Appel direct (flux SSE) : renvoie le texte complet, appelle onMorceau au fil de l'eau
async function direct(modele, systeme, hist, texte, onMorceau) {
  // Relais : on joint le jeton du compte connecté, le relais vérifie que le compte est validé par l'admin
  const jeton = RELAIS && window.CLOUD && window.CLOUD.jeton ? await window.CLOUD.jeton().catch(() => null) : null;
  const url = RELAIS ? `${RELAIS}?modele=${encodeURIComponent(modele)}${jeton ? "&jeton=" + encodeURIComponent(jeton) : ""}` : `https://generativelanguage.googleapis.com/v1beta/models/${modele}:streamGenerateContent?alt=sse&key=${encodeURIComponent(CLE)}`;
  const r = await fetch(url, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ systemInstruction: { parts: [{ text: systeme }] }, contents: [...hist, { role: "user", parts: [{ text: texte }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 4000 } })
  });
  if (!r.ok) {
    let m = r.status + "", brut = ""; try { brut = await r.text(); const j = JSON.parse(brut); m += " " + (j.error && (j.error.status + " " + j.error.message)); } catch (e) {}
    // Message en clair du relais (compte non connecté ou pas validé, limite atteinte) : affiché tel quel
    if (RELAIS && [401, 403, 429].includes(r.status) && brut && !brut.trim().startsWith("{")) { const e = new Error(brut.trim()); e.relais = true; throw e; }
    throw new Error(m);
  }
  const lec = r.body.getReader(), dec = new TextDecoder(); let tampon = "", tout = "";
  for (;;) {
    const { done, value } = await lec.read(); if (done) break;
    tampon += dec.decode(value, { stream: true });
    let i; while ((i = tampon.indexOf("\n")) >= 0) {
      const l = tampon.slice(0, i).trim(); tampon = tampon.slice(i + 1);
      if (!l.startsWith("data:")) continue;
      try { const j = JSON.parse(l.slice(5)); const t = (((j.candidates || [])[0] || {}).content || {}).parts; if (t) { tout += t.map(p => p.text || "").join(""); onMorceau && onMorceau(tout); } } catch (e) {}
    }
  }
  return tout;
}

const consignes = ctx => `Tu es l'assistant de révision d'une classe de Licence CAIE (alternance, électrotechnique, automatismes, informatique industrielle, anglais…).
Un étudiant lit le chapitre « ${ctx.titre} » (matière : ${ctx.matiere}) et te pose des questions.
Règles :
- Réponds en français (sauf si l'étudiant écrit en anglais ou demande de l'anglais), tutoie l'étudiant.
- FIE-TOI AU COURS ci-dessous avant tout : reprends exactement ses définitions, ses notations, ses formules, ses unités et sa méthode, dans le même ordre. Cite la partie du cours concernée (« Dans la partie "…" du cours : … »).
- N'invente rien : si la réponse n'est pas dans le cours, dis clairement « ce n'est pas dans le cours » avant de compléter, et signale chaque ajout par « en plus du cours : … ».
- EXPLIQUE EN DÉTAIL : pars de ce que dit le cours, explique le sens de chaque terme et de chaque grandeur, détaille le raisonnement étape par étape (pourquoi on fait chaque étape), puis donne un exemple chiffré complet avec les unités et vérifie le résultat. Termine par un court « À retenir » de 1 à 3 points.
- Pour un calcul : écris la formule du cours, remplace par les valeurs, calcule étape par étape, donne le résultat avec son unité.
- Écris les formules en texte simple avec des symboles Unicode (ex. : P = U × I × cos φ, Z = √(R² + X²)), jamais en LaTeX.
- Pour un exercice noté ou un devoir, guide d'abord avec la méthode du cours et des indices détaillés ; donne la réponse complète si l'étudiant la demande.
- Si tu n'es pas sûr, dis-le plutôt que d'inventer. Si la question n'a rien à voir avec les cours, réponds brièvement et ramène vers le chapitre.
Mise en forme autorisée : **gras**, listes avec « - », listes numérotées « 1. ».

=== COURS : ${ctx.titre} ===
${ctx.texte}
=== FIN DU COURS ===`;

// Mode conversation vocale : réponses lues à voix haute, courtes et vivantes
const ORAL = `

=== MODE CONVERSATION ORALE ===
L'étudiant te parle au micro et ta réponse est lue à voix haute. Parle comme dans une vraie discussion, dynamique et chaleureuse :
- 2 à 4 phrases courtes, une idée à la fois, pas de liste, pas de gras, pas de titres, pas de symboles à lire : dis les formules en mots (« U égale R fois I »).
- Reste fidèle au cours (mêmes notions, mêmes formules), mais sans le citer mot à mot.
- Relance souvent la discussion : une question pour vérifier qu'il a compris, un petit défi, ou « tu veux qu'on voie un exemple ? ».
- Si sa phrase est mal reconnue ou incomplète, devine le sens probable ou demande-lui de répéter.`;
let ok = 0; // indice du premier modèle qui a répondu
function erreur(e) {
  if (e && e.relais) return e.message;
  const m = String((e && (e.message || e.code)) || e);
  if (/api-not-enabled|genai config not found|API_KEY|API key not valid|SERVICE_BLOCKED|referer|not been used|SERVICE_DISABLED|firebasevertexai|PERMISSION_DENIED|403/i.test(m)) return "L'assistant n'est pas encore activé côté Firebase. L'administrateur doit l'activer (Firebase › AI Logic).";
  if (/429|quota|RESOURCE_EXHAUSTED/i.test(m)) return "Beaucoup de questions en ce moment, la limite gratuite est atteinte. Réessaie dans une minute.";
  if (/network|fetch|Failed to fetch/i.test(m)) return "Pas de connexion. Vérifie ton réseau et réessaie.";
  return "L'assistant ne répond pas pour l'instant. Réessaie dans un moment.";
}
function chat(ctx) {
  const hist = [];
  return {
    async send(texte, onMorceau, opts = {}) {
      let lastErr;
      for (let i = ok; i < MODELES.length; i++) {
        try {
          let tout = "";
          const sys = consignes(ctx) + (opts.oral ? ORAL : "");
          if (DIRECT) tout = await direct(MODELES[i], sys, hist, texte, onMorceau);
          else {
            const model = AI.getGenerativeModel(ai, { model: MODELES[i], systemInstruction: sys, generationConfig: { temperature: 0.2, maxOutputTokens: 4000 } });
            const s = model.startChat({ history: hist.slice() });
            const r = await s.sendMessageStream(texte);
            for await (const c of r.stream) { const t = c.text(); if (t) { tout += t; onMorceau && onMorceau(tout); } }
          }
          hist.push({ role: "user", parts: [{ text: texte }] }, { role: "model", parts: [{ text: tout }] });
          ok = i; return tout;
        } catch (e) {
          lastErr = e;
          if (!/404|not found|is not supported|no longer available|503|UNAVAILABLE|high demand|overloaded/i.test(String(e && e.message))) break; // modèle indisponible → on tente le suivant
        }
      }
      throw new Error(erreur(lastErr));
    }
  };
}
window.IA = { chat };
