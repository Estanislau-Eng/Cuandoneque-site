/**
 * Utilidades: Helpers
 * Funções auxiliares gerais
 */

const Helpers = {
    /**
     * Renderiza um template com dados
     * @param {string} template - Template HTML com {{variavel}}
     * @param {object} data - Dados para substituir no template
     */
    render(template, data) {
        return template.replace(/{{(\w+)}}/g, (match, key) => data[key] || '');
    },

    /**
     * Cria um elemento HTML com atributos
     * @param {string} tag - Tag HTML
     * @param {object} attributes - Atributos do elemento
     * @param {string} content - Conteúdo do elemento
     */
    createElement(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
        if (content) element.innerHTML = content;
        return element;
    },

    /**
     * Adiciona classe a um elemento
     */
    addClass(element, className) {
        element ? .classList.add(className);
    },

    /**
     * Remove classe de um elemento
     */
    removeClass(element, className) {
        element ? .classList.remove(className);
    },

    /**
     * Toggle classe de um elemento
     */
    toggleClass(element, className) {
        element ? .classList.toggle(className);
    },

    /**
     * Formata data para PT-BR
     */
    formatDate(date) {
        return new Date(date).toLocaleDateString('pt-BR');
    },

    /**
     * Log com prefixo
     */
    log(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
    }
};

export default Helpers;