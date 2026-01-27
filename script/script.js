// Validação de formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const email = document.getElementById('email').value.trim();
            const servico = document.querySelector('select[name="servio"]').value;
            
            // Verificar se todos os campos estão preenchidos
            if (!nome || !telefone || !email || !servico) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido!');
                return;
            }
            
            // Validar telefone (deve ter pelo menos 9 dígitos)
            const telefoneLimpo = telefone.replace(/\D/g, '');
            if (telefoneLimpo.length < 9) {
                alert('Por favor, insira um telefone válido!');
                return;
            }
            
            // Se passou em todas as validações
            alert('Formulário enviado com sucesso! Entraremos em contacto em breve.');
            // Aqui você pode adicionar código para enviar os dados para um servidor
            // form.submit();
            form.reset();
        });
    }
});

// Efeito hover nos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navegacao a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ffff00';
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#fff';
            this.style.transform = 'scale(1)';
        });
    });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="./"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Apenas aplicar scroll suave para links locais
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
