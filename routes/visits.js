const express = require('express');
const router = express.Router();
const db = require('./firebaseConfig'); // Importa la instancia de Firestore
require('dotenv').config();

// Middleware para obtener la IP real del cliente
const getClientIp = (req) => {
    const forwardedIpsStr = req.header('x-forwarded-for');
    if (forwardedIpsStr) {
        return forwardedIpsStr.split(',')[0].trim();
    }
    return req.socket.remoteAddress;
};

// Endpoint para registrar una visita (POST)
router.post('/track-visit', async (req, res) => {
    const ip_address = getClientIp(req);
    const user_agent = req.headers['user-agent'] || 'Unknown';
    const referrer = req.headers['referer'] || 'Direct';
    const timestamp = new Date();

    try {
        await db.collection('visits').add({
            ip_address: ip_address,
            user_agent: user_agent,
            referrer: referrer,
            timestamp: timestamp
        });
        console.log(`Visita registrada en Firestore: IP ${ip_address}`);
        res.status(200).json({ success: true, message: 'Visita registrada.' });
    } catch (err) {
        console.error('Error al insertar visita en Firestore:', err.message);
        res.status(500).json({ success: false, message: 'Error al registrar la visita.' });
    }
});

// Middleware de autenticación para el endpoint de consulta
const authenticateAdmin = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.VISITS_API_KEY_SECRET) {
        return res.status(401).json({ success: false, message: 'Acceso no autorizado.' });
    }
    next();
};

// Endpoint para obtener todas las visitas (GET, protegido)
router.get('/visits', authenticateAdmin, async (req, res) => {
    try {
        // Consulta la colección 'visits', ordenada por timestamp descendente
        const snapshot = await db.collection('visits').orderBy('timestamp', 'desc').get();
        const visits = [];
        snapshot.forEach(doc => {
            visits.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json({ success: true, data: visits });
    } catch (err) {
        console.error('Error al obtener visitas de Firestore:', err.message);
        res.status(500).json({ success: false, message: 'Error al obtener las visitas.' });
    }
});

module.exports = router;