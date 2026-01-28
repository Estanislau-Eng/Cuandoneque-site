# 🏢 EEC Technology - Estrutura MVC

Projeto website da **EEC Technology** organizado com arquitetura **Model-View-Controller (MVC)**.

## 📁 Estrutura do Projeto

```
site1/
├── index.html                          # Página inicial
├── paginas/                            # Páginas antigas (manter por compatibilidade)
│   ├── contactos.html
│   ├── serviços.html
│   ├── sobre.html
│   └── portifólio.html
├── imagens/                            # Imagens do projeto
├── estilos/                            # CSS antigos (deprecados)
├── script/                             # JS antigos (deprecados)
│
└── src/                                # ⭐ NOVO - Estrutura MVC
    │
    ├── models/                         # 📊 DADOS E LÓGICA
    │   ├── company.js                  # Dados da empresa
    │   ├── services.js                 # Lista de serviços
    │   └── projects.js                 # Projetos do portfólio
    │
    ├── controllers/                    # 🎮 LÓGICA DE NEGÓCIO
    │   ├── navigationController.js     # Controla navegação e menu
    │   ├── formController.js           # Validação de formulários
    │   └── uiController.js             # Elementos da interface
    │
    ├── views/                          # 👀 APRESENTAÇÃO
    │   ├── pages/                      # Páginas principais
    │   │   ├── home.html
    │   │   ├── services.html
    │   │   ├── portfolio.html
    │   │   ├── about.html
    │   │   └── contact.html
    │   └── components/                 # Componentes reutilizáveis
    │       ├── navbar.html
    │       ├── footer.html
    │       └── header.html
    │
    ├── assets/                         # 🎨 RECURSOS ESTÁTICOS
    │   ├── css/
    │   │   ├── main.css                # Estilos principais
    │   │   ├── mobile.css              # Responsividade
    │   │   └── components.css          # Estilos de componentes
    │   └── js/
    │       └── app.js                  # Aplicação principal
    │
    └── utils/                          # 🛠️ FUNÇÕES AUXILIARES
        ├── helpers.js                  # Funções genéricas
        └── validators.js               # Validadores

```

## 🎯 Padrão MVC Explicado

### **M - Models** (`src/models/`)
Contêm os dados e a lógica de negócio da aplicação.
- `company.js` - Informações sobre a EEC Technology
- `services.js` - Lista de serviços oferecidos
- `projects.js` - Projetos do portfólio

**Exemplo:**
```javascript
const CompanyModel = {
    name: 'EEC Technology',
    mission: 'Oferecer soluções tecnológicas...',
    values: [...]
};
```

### **V - Views** (`src/views/`)
Contêm a apresentação e estrutura HTML das páginas.

**Pages** - Páginas completas do site
- `home.html` - Página inicial
- `services.html` - Página de serviços
- `portfolio.html` - Portfólio de projetos
- `about.html` - Sobre nós
- `contact.html` - Formulário de contacto

**Components** - Componentes reutilizáveis
- `navbar.html` - Menu de navegação
- `footer.html` - Rodapé
- `header.html` - Cabeçalho

### **C - Controllers** (`src/controllers/`)
Controlam a lógica de interação entre Models e Views.

- `navigationController.js` - Gerencia navegação e menu hamburger
- `formController.js` - Valida e processa formulários
- `uiController.js` - Controla elementos visuais

**Exemplo:**
```javascript
const NavigationController = {
    init() {
        this.setupMenuToggle();
        this.setupMenuLinks();
    }
    // ...
};
```

### **Assets** (`src/assets/`)
Recursos estáticos: CSS, JavaScript, imagens.

- `css/main.css` - Estilos principais (com variáveis CSS)
- `css/mobile.css` - Media queries para responsividade
- `js/app.js` - Aplicação principal que integra controllers

### **Utils** (`src/utils/`)
Funções auxiliares reutilizáveis em toda a aplicação.

- `helpers.js` - Funções genéricas (createElement, render, etc)
- `validators.js` - Validadores (email, telefone, etc)

## 🚀 Como Usar

### Importar um Model
```javascript
import CompanyModel from '../models/company.js';

console.log(CompanyModel.name); // 'EEC Technology'
```

### Usar um Validator
```javascript
import Validators from '../utils/validators.js';

if (Validators.isEmail('user@example.com')) {
    console.log('Email válido!');
}
```

### Usar um Helper
```javascript
import Helpers from '../utils/helpers.js';

const el = Helpers.createElement('div', { class: 'container' }, 'Conteúdo');
```

## 📦 Variáveis CSS Globais

Definidas em `src/assets/css/main.css`:

```css
:root {
    --color-dark: rgba(7, 1, 22, 0.998);      /* Azul escuro */
    --color-light: #fff;                       /* Branco */
    --color-accent: #ffff00;                   /* Amarelo (destaque) */
    --color-grey: rgba(183, 181, 181, 0.377); /* Cinza */
    --color-text: rgb(7, 1, 22);              /* Texto principal */
    --transition: all 0.3s ease;              /* Transição padrão */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Sombra padrão */
    --border-radius: 8px;                     /* Border radius */
}
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px - Menu normal
- **Tablet**: ≤ 768px - Menu hamburger
- **Mobile**: ≤ 480px - Layout comprimido

### Menu Hamburger
- Aparece automaticamente em telas menores
- Animação X ao abrir
- Fecha ao clicar em um link

## ✅ Features Implementadas

- ✅ Estrutura MVC organizada
- ✅ Menu hamburger responsivo
- ✅ Validação de formulários
- ✅ Variáveis CSS reutilizáveis
- ✅ Funções auxiliares (helpers, validators)
- ✅ Comentários descritivos no código
- ✅ Responsive design (mobile-first)
- ✅ Acessibilidade (aria-labels)

## 🔧 Próximas Melhorias

- [ ] Implementar sistema de templates (Handlebars, Nunjucks)
- [ ] Adicionar build tool (Webpack, Vite)
- [ ] Implementar backend (Node.js/Express)
- [ ] Adicionar testes unitários
- [ ] Implementar lazy loading de imagens
- [ ] Adicionar animações Intersection Observer
- [ ] Criar API REST para dados dinâmicos

## 📝 Convenções de Código

### JavaScript
- Use `camelCase` para variáveis e funções
- Use `PascalCase` para classes
- Adicione JSDoc acima de funções importantes
- Organize código em objetos/classes por responsabilidade

### CSS
- Use variáveis CSS para cores e valores reutilizáveis
- Organize por seções com comentários
- Use classe adequada (BEM quando necessário)
- Mobile-first approach

### HTML
- Semântica correta (header, nav, main, footer)
- Atributos aria-* para acessibilidade
- Alt-text descritivo em imagens
- IDs e classes significativas

## 📧 Contacto

Para dúvidas sobre o projeto, contacte:
- **Telefone**: +244 955-007-004
- **Email**: info@eectechnology.ao
- **WhatsApp**: https://wa.me/244955007004

---

**Última atualização**: 28 de Janeiro de 2026
**Versão**: 2.0 (MVC)
