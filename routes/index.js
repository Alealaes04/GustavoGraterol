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
        hasGallery: true 
    },
    {
        name: "Sistema de Registro y Control de Bienes",
        role: "Desarrollador Backend",
        company: "SIBCI GUÁRICO - 3 desarrolladores",
        description: "Desarrollo de un sistema para el registro y control de bienes utilizando códigos QR.",
        technologies: ["Node.js", "Express", "Firebase"],
        hasGallery: true
    },
    {
        name: "Sistema de Gestión de Cerdos",
        role: "Desarrollador Fullstack",
        company: "Granja Porcina - Marranitos - 3 desarrolladores",
        description: "Sistema FullStack (Node.js, HTML, CSS, Javascript, React, Firebase) para la gestión integral de cerdos.",
        technologies: ["Node.js", "HTML", "CSS", "Javascript", "React", "Firebase"],
        hasGallery: false 
    },
    {
        name: "Sistema de Casino - Valhalla",
        role: "Desarrollador Backend",
        company: "Casino - Valhalla (En progreso)",
        description: "Desarrollo backend con Node.js encargado de proporcionar la lógica y funcionalidad a los juegos dentro del sistema del casino. 3 desarrolladores",
        technologies: ["Node.js", "Express", "WebSockets", "SQL"],
        hasGallery: false 
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