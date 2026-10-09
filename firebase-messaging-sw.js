// Service worker des notifications : affiche les notifications envoyées par
// notifs/send.mjs quand l'appli est fermée, et ouvre le bon chapitre au toucher.
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
self.window = self;
importScripts("config.js");
firebase.initializeApp(self.CLOUD_CONFIG.firebase);
firebase.messaging();
