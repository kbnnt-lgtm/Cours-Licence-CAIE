// Service worker du site : notifications push (appli fermée) et appli gardée sur l'appareil.
// - Notifications : affiche celles envoyées par notifs/send.mjs et ouvre le bon chapitre au toucher.
// - Hors ligne : la page, les cours, le planning et les photos déjà vues sont gardés en cache.
//   Page et cours : réseau d'abord (toujours la dernière version), le cache si le réseau ne répond pas
//   en 4 s ou s'il n'y a pas de connexion. Photos, polices et code Firebase (versionné) : cache d'abord.
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
self.window = self;
importScripts("config.js");
firebase.initializeApp(self.CLOUD_CONFIG.firebase);
firebase.messaging();

const CACHE = "caie-appli-v1";
const COQUILLE = ["./", "cours.js", "planning.js", "galerie/galerie.js", "config.js", "cloud.js", "ia.js", "icone.png", "manifest.json"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => Promise.all(COQUILLE.map(u => c.add(u).catch(() => {}))))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("caie-appli-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));

const garde = (req, rep) => { if (rep && rep.ok && (rep.type === "basic" || rep.type === "cors")) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put(req, copie)).catch(() => {}); } return rep; };
async function reseauDabord(req, cle) {
  const reseau = fetch(req).then(r => garde(cle, r));
  const delai = new Promise(ok => setTimeout(ok, 4000));
  try {
    const r = await Promise.race([reseau, delai.then(() => null)]);
    if (r) return r;
  } catch (e) {}
  const c = await caches.match(cle, { ignoreSearch: true });
  return c || reseau;
}
async function cacheDabord(req) {
  const c = await caches.match(req);
  return c || fetch(req).then(r => garde(req, r));
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url), ici = u.origin === self.location.origin;
  if (ici) {
    if (/firebase-messaging-sw\.js$|ia-cle\.js$/.test(u.pathname)) return;
    if (req.mode === "navigate") return e.respondWith(reseauDabord(req, "./"));
    if (/\.(jpe?g|png|webp|gif|svg)$/i.test(u.pathname)) return e.respondWith(cacheDabord(req));
    return e.respondWith(reseauDabord(req, req));
  }
  if ((u.hostname === "www.gstatic.com" && u.pathname.startsWith("/firebasejs/")) || u.hostname === "fonts.gstatic.com") return e.respondWith(cacheDabord(req));
  if (u.hostname === "fonts.googleapis.com") return e.respondWith(reseauDabord(req, req));
});
