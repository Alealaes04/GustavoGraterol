document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.main-menu-toggle');
    const navLinks = document.querySelector('.primary-nav-links');

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

                if (body.classList.contains('sidebar-active')) {
                    body.classList.remove('sidebar-active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});