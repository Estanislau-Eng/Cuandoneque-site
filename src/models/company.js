/**
 * Model: Dados da Empresa
 * Contém informações sobre a EEC Technology
 */

const CompanyModel = {
    name: 'EEC Technology',
    description: 'É uma empresa dedicada a inovação, tecnologia e soluções digitais personalizadas.',
    founded: 'há mais de 5 anos',
    location: 'Luanda, Avenida Fidel de Castro, Rua do Prenda',
    phone: ['+244 955-007-004', '938-352-203'],

    mission: 'Oferecer soluções tecnológicas criativas, acessíveis e de qualidade, que contribuam para o crescimento e sucesso dos nossos clientes.',

    vision: 'Ser referência no sector tecnológico, reconhecida pela excelência, inovação contínua e impacto positivo nas comunidades onde atuamos.',

    values: [{
            title: 'Inovação',
            description: 'Buscamos sempre novas ideias e tecnologias'
        },
        {
            title: 'Comprometimento',
            description: 'Entregamos o que prometemos com responsabilidade'
        },
        {
            title: 'Ética',
            description: 'Atuamos com transparência e respeito'
        },
        {
            title: 'Qualidade',
            description: 'Garantimos alto padrão em todos os nossos serviços'
        },
        {
            title: 'Colaboração',
            description: 'Valorizamos o trabalho em equipe e o crescimento em conjunto'
        }
    ],

    social: {
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        whatsapp: 'https://wa.me/244955007004'
    }
};

export default CompanyModel;