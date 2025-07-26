document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.main-menu-toggle');
    const navLinks = document.querySelector('.primary-nav-links');

    //INICIO: Lógica para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

            const form = event.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            formMessage.textContent = 'Enviando mensaje...';
            formMessage.className = ''; // Limpiar clases previas

            try {
           
                const response = await fetch('http://localhost:3000/api/send-email', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) { // Verifica si la respuesta HTTP es 2xx
                    formMessage.textContent = result.message;
                    formMessage.classList.add('success-message');
                    form.reset(); // Limpiar el formulario solo si el envío fue exitoso
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
    //FIN: Lógica para el formulario de contacto


    const handleScroll = () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
            header.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('sidebar-active');
            navLinks.classList.toggle('active'); 
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (body.classList.contains('sidebar-active')) {
                    body.classList.remove('sidebar-active');
                    navLinks.classList.remove('active'); 
                }
            });
        });

        // Click fuera del menú para cerrarlo
        document.addEventListener('click', (event) => {
            if (body.classList.contains('sidebar-active') &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)) {

                body.classList.remove('sidebar-active');
                navLinks.classList.remove('active'); 
            }
        });

    } else {
        console.error("Error: main-menu-toggle o primary-nav-links no fueron encontrados en el DOM.");
    }

    // Smooth scrolling para los anclajes
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

                // Cierra el menú lateral al hacer clic en un enlace de anclaje
                if (body.classList.contains('sidebar-active')) {
                    body.classList.remove('sidebar-active');
                    navLinks.classList.remove('active'); 
                }
            }
        });
    });
});