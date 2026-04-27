/**
 * Controller: UI
 * Controla elementos visuais e interatividade da interface
 */

const UIController = {
    init() {
        this.setupScrollSmooth();
        this.setupResponsive();
    },

    setupScrollSmooth() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    setupResponsive() {
        window.addEventListener('resize', () => {
            const menuToggle = document.getElementById('menuToggle');
            const menu = document.getElementById('menu');

            if (window.innerWidth > 768) {
                menuToggle ? .classList.remove('active');
                menu ? .classList.remove('active');
            }
        });
    }
};

export default UIController;