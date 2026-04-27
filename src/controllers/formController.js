/**
 * Controller: Formulário
 * Controla validação e envio de formulários
 */

const FormController = {
    init() {
        this.setupFormValidation();
    },

    setupFormValidation() {
        const form = document.querySelector('.formulario form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm(form)) {
                this.submitForm(form);
            }
        });
    },

    validateForm(form) {
        const nome = document.getElementById('nome') ? .value.trim();
        const telefone = document.getElementById('telefone') ? .value.trim();
        const email = document.getElementById('email') ? .value.trim();
        const servico = form.querySelector('select[name="servio"]') ? .value;

        if (!nome || !telefone || !email || !servico) {
            alert('Por favor, preencha todos os campos!');
            return false;
        }

        if (!this.isValidEmail(email)) {
            alert('Por favor, insira um email válido!');
            return false;
        }

        if (!this.isValidPhone(telefone)) {
            alert('Por favor, insira um telefone válido!');
            return false;
        }

        return true;
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPhone(phone) {
        const phoneLimpo = phone.replace(/\D/g, '');
        return phoneLimpo.length >= 9;
    },

    submitForm(form) {
        alert('Formulário enviado com sucesso! Entraremos em contacto em breve.');
        form.reset();
        // Aqui você pode adicionar código para enviar dados para um servidor
        // fetch('/api/contact', { method: 'POST', body: new FormData(form) })
    }
};

export default FormController;