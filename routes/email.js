const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Ruta POST para enviar el correo
router.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validación básica
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL, // Recibir correos
            replyTo: email, // Para responder al remitente del formulario
            subject: `Mensaje de contacto desde tu Portafolio: ${subject}`,
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Correo enviado con éxito desde la API');
        res.status(200).json({ success: true, message: '¡Tu mensaje ha sido enviado con éxito!' });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ success: false, message: 'Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo más tarde.' });
    }
});

module.exports = router;