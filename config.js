// Configuration des comptes en ligne (Firebase). Ce bloc n'est pas secret :
// la sécurité vient des règles Firestore (firebase/firestore.rules).
window.CLOUD_CONFIG = {
  firebase: {
    apiKey: "AIzaSyB87d1Nt-0ZpUPc3ahprm-7Er7P7Wfs--M",
    authDomain: "cours-caie.firebaseapp.com",
    projectId: "cours-caie",
    storageBucket: "cours-caie.firebasestorage.app",
    messagingSenderId: "42179703665",
    appId: "1:42179703665:web:7deccbbcdb874234ac7cd0"
  },
  admins: ["kylianbonnet5986@gmail.com"],
  // Clé publique des notifications push (Cloud Messaging › Certificats Web Push)
  vapidKey: "BMMYHA3Vg-Av8aQcSxqghLL6XO-8Hv5ggf-_tD7u3PXXrESKK8f5ZNB8zxDbwICRTGA_iQuBf2UJIS-kAvgVdJc"
};
