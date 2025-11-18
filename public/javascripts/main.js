document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.main-menu-toggle');
    const navLinks = document.querySelector('.primary-nav-links');

    // Lógica para el scroll del header 
    const handleScroll = () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
            if (header) { 
                header.classList.add('scrolled');
            }
        } else {
            body.classList.remove('scrolled');
            if (header) {
                header.classList.remove('scrolled');
            }
        }
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);

    // Lógica para el menú lateral (toggle)
    if (menuToggle && navLinks) {
        // Abrir/cerrar menú al hacer clic en el botón de toggle
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('sidebar-active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace del menú
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (body.classList.contains('sidebar-active')) {
                    body.classList.remove('sidebar-active');
                    navLinks.classList.remove('active');
                }
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', (event) => {
            if (body.classList.contains('sidebar-active') &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)) {

                body.classList.remove('sidebar-active');
                navLinks.classList.remove('active');
            }
        });

    } else {
        console.error("Error: Elementos 'main-menu-toggle' o 'primary-nav-links' no encontrados en el DOM.");
    }

    // Lógica para el smooth scrolling a secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Cierra el menú lateral si está abierto después de navegar
                if (body.classList.contains('sidebar-active')) {
                    body.classList.remove('sidebar-active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // --- LÓGICA REVISADA PARA EL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            formMessage.textContent = 'Enviando mensaje...';
            formMessage.className = ''; // Limpiar clases previas

            try {
                // CAMBIO CLAVE: Usar ruta relativa '/api/send-email'
                const response = await fetch('/api/send-email', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    formMessage.textContent = result.message;
                    formMessage.classList.add('success-message');
                    form.reset();
                } else {
                    formMessage.textContent = result.message || 'Error desconocido al enviar el mensaje.';
                    formMessage.classList.add('error-message');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                formMessage.textContent = 'Hubo un problema de conexión. Por favor, intenta de nuevo.';
                formMessage.classList.add('error-message');
            }
        });
    }

    // --- LÓGICA REVISADA PARA EL SEGUIMIENTO DE VISITAS ---
    async function trackVisit() {
        try {
            // CAMBIO CLAVE: Usar ruta relativa '/api/track-visit'
            const response = await fetch('/api/track-visit', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });

            if (response.ok) {
                console.log('Visita registrada en el backend.');
            } else {
                const errorData = await response.json();
                console.error('Error al registrar visita:', errorData.message);
            }
        } catch (error) {
            console.error('Error de red al intentar registrar la visita:', error);
        }
    }

    trackVisit();
});