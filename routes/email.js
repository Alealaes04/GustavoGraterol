const express = require('express');
const router = express.Router();

// 1. IMPORTAR RESEND
const { Resend } = require('resend'); 

// 2. INICIALIZAR RESEND con la clave API
// Esto usa la variable de entorno RESEND_API_KEY que configuraste en Render
const resend = new Resend(process.env.RESEND_API_KEY); 

// --- Configuración Nodemailer ANTIGUA (ELIMINAR) ---
// const transporter = nodemailer.createTransport({...}); 
// ----------------------------------------------------

// Ruta POST para enviar el correo
router.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validación básica
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    try {
        const emailContent = `
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        `;

        // 3. ENVIAR CORREO USANDO RESEND
        const { error } = await resend.emails.send({
            // IMPORTANTE: El FROM debe ser un email o dominio verificado en Resend.
            // Usamos 'onboarding@resend.dev' como estándar si no has verificado tu email.
            from: 'Portafolio Contacto <onboarding@resend.dev>', 
            
            // Hacia: Tu correo donde recibirás el mensaje
            to: [process.env.RECIPIENT_EMAIL], 
            
            // Para poder responder al cliente
            reply_to: email, 
            
            subject: `Mensaje de contacto desde tu Portafolio: ${subject}`,
            html: emailContent,
        });

        if (error) {
            console.error('Error al enviar el correo con Resend:', error);
            // El error 500 ocurrirá si la clave API falla o el email 'from' no está verificado
            return res.status(500).json({ success: false, message: 'Hubo un error en el servicio de envío de correo.' });
        }

        console.log('Correo enviado con éxito usando Resend.');
        res.status(200).json({ success: true, message: '¡Tu mensaje ha sido enviado con éxito!' });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ success: false, message: 'Hubo un error interno al enviar tu mensaje. Por favor, intenta de nuevo más tarde.' });
    }
});

module.exports = router;