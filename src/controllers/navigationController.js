/**
 * Controller: Navegação
 * Controla o comportamento do menu e navegação
 */

const NavigationController = {
    init() {
        this.setupMenuToggle();
        this.setupMenuLinks();
        this.setupNavHover();
    },

    setupMenuToggle() {
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                menu.classList.toggle('active');
            });
        }
    },

    setupMenuLinks() {
        const menu = document.getElementById('menu');
        if (!menu) return;

        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                const menuToggle = document.getElementById('menuToggle');
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    },

    setupNavHover() {
        const navLinks = document.querySelectorAll('.navegacao a:not(.menu-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) {
                    link.style.color = '#ffff00';
                    link.style.transform = 'scale(1.05)';
                }
            });

            link.addEventListener('mouseleave', () => {
                if (window.innerWidth > 768) {
                    link.style.color = '#fff';
                    link.style.transform = 'scale(1)';
                }
            });
        });
    }
};

export default NavigationController;