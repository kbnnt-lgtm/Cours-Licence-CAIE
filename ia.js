// Assistant IA des cours (bulle « Une question ? »). Chargé à la première ouverture
// de la bulle. Passe par Firebase AI Logic (API Gemini Developer, offre gratuite) :
// pas de clé secrète dans la page, la clé publique de config.js suffit.
// Expose window.IA.chat(contexte) → { send(texte, onMorceau) }.
const V = "12.4.0";
const B = (window.FIREBASE_SDK_BASE_IA || `https://www.gstatic.com/firebasejs/${V}/`);
const [{ initializeApp, getApps }, AI] = await Promise.all([import(B + "firebase-app.js"), import(B + "firebase-ai.js")]);
const cfg = window.CLOUD_CONFIG;
const app = getApps().find(a => a.name === "ia") || initializeApp(cfg.firebase, "ia");
const ai = AI.getAI(app, { backend: new AI.GoogleAIBackend() });
const MODELES = (cfg.ia && cfg.ia.modeles) || ["gemini-2.5-flash", "gemini-flash-latest", "gemini-2.0-flash"];

const consignes = ctx => `Tu es l'assistant de révision d'une classe de Licence CAIE (alternance, électrotechnique, automatismes, informatique industrielle, anglais…).
Un étudiant lit le chapitre « ${ctx.titre} » (matière : ${ctx.matiere}) et te pose des questions.
Règles :
- Réponds en français (sauf si l'étudiant écrit en anglais ou demande de l'anglais), tutoie l'étudiant.
- Appuie-toi d'abord sur le cours ci-dessous : reprends ses notations, ses formules et sa méthode. Si tu ajoutes quelque chose qui n'est pas dans le cours, dis-le (« en plus du cours : … »).
- Explique simplement, pas à pas, avec un exemple chiffré quand c'est utile. Réponses courtes : 3 à 10 lignes sauf si on te demande plus.
- Écris les formules en texte simple avec des symboles Unicode (ex. : P = U × I × cos φ, Z = √(R² + X²)), jamais en LaTeX.
- Pour un exercice noté ou un devoir, guide avec la méthode et des indices avant de donner la réponse complète.
- Si tu n'es pas sûr, dis-le plutôt que d'inventer. Si la question n'a rien à voir avec les cours, réponds brièvement et ramène vers le chapitre.
Mise en forme autorisée : **gras**, listes avec « - », listes numérotées « 1. ».

=== COURS : ${ctx.titre} ===
${ctx.texte}
=== FIN DU COURS ===`;

let ok = 0; // indice du premier modèle qui a répondu
function erreur(e) {
  const m = String((e && (e.message || e.code)) || e);
  if (/api-not-enabled|genai config not found|not been used|SERVICE_DISABLED|firebasevertexai|PERMISSION_DENIED|403/i.test(m)) return "L'assistant n'est pas encore activé côté Firebase. L'administrateur doit l'activer (Firebase › AI Logic).";
  if (/429|quota|RESOURCE_EXHAUSTED/i.test(m)) return "Beaucoup de questions en ce moment, la limite gratuite est atteinte. Réessaie dans une minute.";
  if (/network|fetch|Failed to fetch/i.test(m)) return "Pas de connexion. Vérifie ton réseau et réessaie.";
  return "L'assistant ne répond pas pour l'instant. Réessaie dans un moment.";
}
function chat(ctx) {
  const hist = [];
  return {
    async send(texte, onMorceau) {
      let lastErr;
      for (let i = ok; i < MODELES.length; i++) {
        try {
          const model = AI.getGenerativeModel(ai, { model: MODELES[i], systemInstruction: consignes(ctx), generationConfig: { temperature: 0.4, maxOutputTokens: 1500 } });
          const s = model.startChat({ history: hist.slice() });
          const r = await s.sendMessageStream(texte);
          let tout = "";
          for await (const c of r.stream) { const t = c.text(); if (t) { tout += t; onMorceau && onMorceau(tout); } }
          hist.push({ role: "user", parts: [{ text: texte }] }, { role: "model", parts: [{ text: tout }] });
          ok = i; return tout;
        } catch (e) {
          lastErr = e;
          if (!/404|not found|is not supported|no longer available/i.test(String(e && e.message))) break; // modèle inconnu → on tente le suivant
        }
      }
      throw new Error(erreur(lastErr));
    }
  };
}
window.IA = { chat };
