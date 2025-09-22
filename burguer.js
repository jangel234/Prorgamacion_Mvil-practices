 // Lógica para la barra de scroll
        const stickyNav = document.getElementById('sticky-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 90) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        });

        // Lógica para el menú hamburguesa
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Lógica para el menú "Más"
