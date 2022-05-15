const navBarEng = {
  Title: 'My Portfolio',
  HomeButton: 'Home',
  ProjectsButton: 'Projects',
  AboutButton: 'About',
}

const navBarEs = {
  Title: 'Mi Portafolio',
  HomeButton: 'Inicio',
  ProjectsButton: 'Proyectos',
  AboutButton: 'Sobre Mi',
}

const homeIntroEng = {
  LightBg: false,
  LightText: true,
  LightTextDesc: true,
  TopLine: 'Santiago Carnuccio',
  Headline: 'SOFTWARE DEVELOPER',
  Description: 'Brief introduction here...',
  ButtonLabel: 'Learn More',
  ButtonRedirect: '/about',
  ImgStart: '',
  Img: 'images/rohnKermit.png',
  Alt: ''
}

const homeIntroEs = {
  LightBg: false,
  LightText: true,
  LightTextDesc: true,
  TopLine: 'Santiago Carnuccio',
  Headline: 'DESARROLLADOR DE SOFTWARE',
  Description: 'Pequeña introducción aca...',
  ButtonLabel: 'Ver Más',
  ButtonRedirect: '/about',
  ImgStart: '',
  Img: 'images/rohnKermit.png',
  Alt: ''
}

const projectHighlightsEng = {
  ProjectsHighlightsTitle: 'Projects Highlights',
  ProjectHighlightButtonText: 'More Info',
  ProjectOne: {
    Title: 'AO Project',
    Image: '',
    Description: 'Remastered version of an old Argentinean 2D online multiplayer game. Remade from the ground up using Unity and C#.'
  }
}

const projectHighlightsEs = {
  ProjectsHighlightsTitle: 'Proyectos Destacados',
  ProjectHighlightButtonText: 'Más Info',
  ProjectOne: {
    Title: 'Proyecto AO',
    Image: '',
    Description: 'Versión remasterizada de un viejo juego 2D multijugador de Argentina. Rehecho por completo utilizando Unity y C#.'
  }
}

const contactInfoEng = {
  LightBg: false,
  TopLine: "Contact Me",
  LblName: "Name",
  LblEmail: "Email",
  LblMessage: "Message",
  LblButton: "Contact Me",
  NameInputPh: "Your Name",
  EmailInputPh: "Your Email",
  SentOK: "Your message has been sent successfully.",
  SentError: "There was an error sending your message. Please retry after a few minutes."
}

const contactInfoEs = {
  LightBg: false,
  TopLine: "Contáctame",
  LblName: "Nombre",
  LblEmail: "Email",
  LblMessage: "Mensaje",
  LblButton: "Contáctame",
  NameInputPh: "Tú Nombre",
  EmailInputPh: "Tú Email",
  SentOK: "Tú mensaje ha sido enviado exitosamente.",
  SentError: "Hubo un error enviando tú mensaje. Por favor reintenta luego de unos minutos."
}

const footerEng = {
  Copyright: "Copyright Text",
  LinkedInTo: "https://www.linkedin.com/in/santiago-carnuccio-8a31401a6/"
}

const footerEs = {
  Copyright: "Texto de Copyright",
  LinkedInTo: "https://www.linkedin.com/in/santiago-carnuccio-8a31401a6/"
}

export const appData = {
  'en': {
    NavBar: navBarEng,
    HomeIntro: homeIntroEng,
    ProjectHighlights: projectHighlightsEng,
    ContactInfo: contactInfoEng,
    Footer: footerEng
  },
  'es': {
    NavBar: navBarEs,
    HomeIntro: homeIntroEs,
    ProjectHighlights: projectHighlightsEs,
    ContactInfo: contactInfoEs,
    Footer: footerEs
  }
}