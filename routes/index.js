const express = require('express');
const router = express.Router();
const galleryData = require('./galleryData');

const projectsData = [
    {
        name: "AI Finance Solutions",
        role: "Desarrollador Fullstack",
        company: "Software de control, gestión e inversión de finanzas - solo",
        description: "Plataforma que conecta a usuarios clientes con usuarios asesores para el control, gestión e inversión de sus finanzas.",
        technologies: ["Node.js", "Javascript", "HTML", "SQLite", "Firebase", "WebSockets"],
        hasGallery: true,
        galleryKey: "AI-Finance-Solutions"
    },
    {
        name: "Sistema de Registro y Control de Bienes",
        role: "Desarrollador Backend",
        company: "SIBCI GUÁRICO - 3 desarrolladores",
        description: "Desarrollo de un sistema para el registro y control de bienes utilizando códigos QR.",
        technologies: ["Node.js", "Express", "Firebase"],
        hasGallery: true,
        galleryKey: "Sistema-de-Registro-y-Control-de-Bienes"
    },
    {
        name: "Plataforma de Bienestar Estudiantil PsicoU",
        role: "Desarrollador Fullstack",
        company: "Plataforma de bienestar estudiantil - solo",
        description: "Plataforma diseñada para el bienestar estudiantil con funcionalidades de seguimiento psicológico, recursos educativos y apoyo emocional.",
        technologies: ["Node.js", "HTML", "CSS", "Javascript", "SQLite", "Express"],
        hasGallery: true,
        galleryKey: "PsicoU-Bienestar-Estudiantil"
    },
    {
        name: "Plataforma Inteligente de Gestión y Optimización del Flujo de Trabajo Personal Basado en la Técnica Pomodoro SmartFocus",
        role: "Desarrollador Fullstack",
        company: "Sistema de gestión de tiempo - solo",
        description: "Plataforma inteligente basada en la técnica Pomodoro para optimizar el flujo de trabajo personal con funcionalidades de seguimiento, estadísticas y personalización.",
        technologies: ["Node.js", "HTML", "CSS", "Javascript", "SQLite", "WebSockets"],
        hasGallery: true,
        galleryKey: "SmartFocus-Pomodoro"
    },
    {
        name: "Software Educativo 'Misión Cuatro' Gamificación de Operaciones y Desarrollo de Habilidades Lógico-Matemáticas",
        role: "Desarrollador Fullstack",
        company: "Software educativo - solo",
        description: "Software educativo gamificado para el desarrollo de habilidades lógico-matemáticas a través de operaciones y desafíos interactivos.",
        technologies: ["Node.js", "HTML", "CSS", "Javascript", "SQLite", "Express"],
        hasGallery: true,
        galleryKey: "Mision-Cuatro-Educativo"
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { projects: projectsData });
});


router.get('/gallery', function(req, res, next) {
    res.render('gallery', { galleryData: galleryData, query: req.query });
});

module.exports = router;