/**
 * App Principal
 * Integra todos os controllers, models e views
 */

// Import Controllers
import NavigationController from '../controllers/navigationController.js';
import FormController from '../controllers/formController.js';
import UIController from '../controllers/uiController.js';

class App {
    constructor() {
        this.controllers = [
            NavigationController,
            FormController,
            UIController
        ];
    }

    init() {
        console.log('[INFO] Inicializando EEC Technology...');

        // Inicializa todos os controllers
        this.controllers.forEach(controller => {
            try {
                controller.init();
                console.log(`[SUCCESS] ${controller.constructor.name} inicializado`);
            } catch (error) {
                console.error(`[ERROR] Erro ao inicializar controller:`, error);
            }
        });

        console.log('[SUCCESS] Aplicação iniciada com sucesso!');
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});