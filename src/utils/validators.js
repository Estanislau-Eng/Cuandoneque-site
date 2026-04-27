/**
 * Utilidades: Validadores
 * Funções de validação reutilizáveis
 */

const Validators = {
    isEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isPhone(phone) {
        const phoneLimpo = phone.replace(/\D/g, '');
        return phoneLimpo.length >= 9;
    },

    isRequired(value) {
        return value.trim().length > 0;
    },

    isUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
};

export default Validators;