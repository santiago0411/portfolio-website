const homeIntroObjEng = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Santiago Carnuccio',
  headline: 'SOFTWARE DEVELOPER',
  description: 'Brief introduction here...',
  buttonLabel: 'Learn More',
  buttonRedirect: '/about',
  imgStart: '',
  img: 'images/rohnKermit.png',
  alt: ''
};

const homeIntroObjEs = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Santiago Carnuccio',
  headline: 'DESARROLLADOR DE SOFTWARE',
  description: 'Pequeña introducción aca...',
  buttonLabel: 'Ver Más',
  buttonRedirect: '/about',
  imgStart: '',
  img: 'images/rohnKermit.png',
  alt: ''
}

const highlightProjectOneEng = {
  Title: 'AO Project',
  Image: '',
  Description: 'Remastered version of an old Argentinean 2D online multiplayer game. Remade from the ground up using Unity and C#.'
}

const highlightProjectOneEs = {
  Title: 'Proyecto AO',
  Image: '',
  Description: 'Versión remasterizada de un viejo juego 2D multijugador de Argentina. Rehecho por completo utilizando Unity y C#.'
}

export const appData = {
  'en-US': {
    Title: 'My Portfolio',
    HomeButton: 'Home',
    ProjectsButton: 'Projects',
    AboutButton: 'About',
    HomeIntroObj: homeIntroObjEng,
    ProjectsHighlightsTitle: 'Projects Highlights',
    ProjectHighlightButtonText: 'More Info',
    ProjectHighlightOne: highlightProjectOneEng
  },
  'es-ES': {
    Title: 'Mi Portafolio',
    HomeButton: 'Inicio',
    ProjectsButton: 'Proyectos',
    AboutButton: 'Sobre Mi',
    HomeIntroObj: homeIntroObjEs,
    ProjectsHighlightsTitle: 'Proyectos Destacados',
    ProjectHighlightButtonText: 'Más Info',
    ProjectHighlightOne: highlightProjectOneEs
  }
};