const express = require('express');
const router = express.Router();
const galleryData = require('./galleryData');

const projectsData = [
    {
        name: "Sistema de Gestión de Inventario Empresarial",
        role: "Desarrollador Fullstack & Mantenimiento",
        company: "Proyecto Freelance - Contrato de mantenimiento semanal",
        description: "Sistema completo para gestión de inventario implementado para múltiples negocios. Actualmente bajo contrato de mantenimiento con cuota semanal, demostrando capacidad de generar ingresos recurrentes.",
        technologies: ["Node.js", "Express", "Firebase", "EJS", "CSS", "JavaScript"],
        hasGallery: true,
        galleryKey: "Sistema-Gestion-Inventario"
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