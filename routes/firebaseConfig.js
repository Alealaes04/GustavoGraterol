const admin = require('firebase-admin');

require('dotenv').config();


let serviceAccount;
try {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
} catch (e) {
    console.error('Error al parsear FIREBASE_SERVICE_ACCOUNT_KEY:', e.message);
    console.error('Asegúrate de que la variable de entorno contenga el JSON válido en una sola línea.');
    process.exit(1); // Sale de la aplicación si no se puede leer la clave
}

// Inicializa Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Obtiene una referencia a Firestore
const db = admin.firestore();

console.log('Firebase Admin SDK inicializado y conectado a Firestore.');

module.exports = db;