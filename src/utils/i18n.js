const translations = {
  es: {
    'header.home': 'Inicio',
    'header.experience': 'Experiencia',
    'header.projects': 'Proyectos',
    'seo.title': 'Portfolio de Danilo Maccari - Desarrollador y Programador Web',
    'seo.description': 'Contrata a Danilo',
    'home.greeting': 'Hola, soy Danilo Maccari',
    'home.available': 'Disponible para trabajar',
    'home.role': 'Desarrollador Fullstack',
    'home.experience': 'con experiencia en JavaScript, TypeScript, React, NestJS, PostgreSQL y TypeORM.',
    'home.description': 'Apasionado por el backend, especialmente por la seguridad de las cuentas (JWT, RBAC, bcrypt, passport, OAuth2) y en constante aprendizaje. Busco oportunidades para contribuir con mis habilidades en proyectos innovadores y seguir creciendo profesionalmente. De Bahía Blanca, Buenos Aires, Argentina',
  },
  en: {
    'header.home': 'Home',
    'header.experience': 'Experience',
    'header.projects': 'Projects',
    'seo.title': 'Danilo Maccari\'s Portfolio - Web Developer and Programmer',
    'seo.description': 'Hire Danilo',
    'home.greeting': 'Hello, I\'m Danilo Maccari',
    'home.available': 'Available for hire',
    'home.role': 'Fullstack Developer',
    'home.experience': 'with experience in JavaScript, TypeScript, React, NestJS, PostgreSQL, and TypeORM.',
    'home.description': 'Passionate about backend development, especially account security (JWT, RBAC, bcrypt, passport, OAuth2) and continuous learning. I\'m seeking opportunities to contribute my skills to innovative projects and continue growing professionally. From Bahía Blanca, Buenos Aires, Argentina',
  }
};

let savedLanguage = 'es'; 

if (typeof window !== 'undefined') {
  savedLanguage = localStorage.getItem('language') || 'es';
}

export function t(key, lang = savedLanguage) {
  return translations[lang]?.[key] || key;
}