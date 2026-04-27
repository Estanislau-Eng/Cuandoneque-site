/**
 * Controller: Navegação
 * Controla hover e navegação
 */

const NavigationController = {
    init() {
        this.setupNavHover();
        this.setupMenuLinks();
    },

    // Hover nos links (desktop)
    setupNavHover() {
        const navLinks = document.querySelectorAll('.navegacao a');
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
    },

    // Fechar menu mobile não é mais necessário, mas mantemos links clicáveis
    setupMenuLinks() {
        const menuLinks = document.querySelectorAll('.navegacao a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Apenas scroll ou navegação normal
                console.log(`[INFO] Link clicado: ${link.textContent}`);
            });
        });
    }
};

export default NavigationController;