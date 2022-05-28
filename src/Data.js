const navBarEng = {
  Title: "My Portfolio",
  HomeButton: "Home",
  ProjectsButton: "Projects",
  AboutButton: "About",
}

const navBarEs = {
  Title: "Mi Portafolio",
  HomeButton: "Inicio",
  ProjectsButton: "Proyectos",
  AboutButton: "Sobre Mi",
}

const homeIntroEng = {
  LightBg: false,
  LightText: true,
  LightTextDesc: true,
  TopLine: "Santiago Carnuccio",
  Headline: "SOFTWARE DEVELOPER",
  Description: "I'm a self-taught software developer from Buenos Aires, Argentina, currently living in Seoul, South Korea. I started programming when I was in High School as a hobby and as a result of my interest in computers. After realizing how much I enjoyed it I decided to make it into my profession. I speak fluent Spanish, English and advanced Korean.",
  ButtonLabel: "Learn More",
  ButtonRedirect: "/about",
  ImgStart: "",
  //Img: "portfolio-website/images/rohnKermit.png",
  Img: "",
  Alt: ""
}

const homeIntroEs = {
  LightBg: false,
  LightText: true,
  LightTextDesc: true,
  TopLine: "Santiago Carnuccio",
  Headline: "DESARROLLADOR DE SOFTWARE",
  Description: "Soy un desarrollador de Buenos Aires, Argentina, viviendo actualmente en Seúl, Corea del Sur. La mayoría de mis conocimientos los aprendí por mi cuenta o trabajando con colegas. Comencé a programar cuando estaba en el secundario como un pasatiempo por mi gran interés en computación. Luego de darme cuenta lo mucho que me gusta decidí convertirlo en mi profesión. Hablo Español e Inglés fluido y Coreano avanzado.",
  ButtonLabel: "Ver Más",
  ButtonRedirect: "/about",
  ImgStart: "",
  Img: "",
  Alt: ""
}

const projectHighlightsEng = {
  LightBg: true,
  ProjectsHighlightsTitle: "Projects Highlights",
  ProjectHighlightButtonText: "More Info",
  ProjectOne: {
    Title: "AO Project",
    Image: "",
    Description: "Remastered version of an old Argentinean 2D online multiplayer game. Remade from the ground up using Unity and C#."
  },
  ProjectTwo: {
    Title: "Simple Networking",
    Image: "",
    Description: "A simple server-client(s) TCP and UDP implementations to send and receive any type of messages. Based on my network implementation for my RPG Game Project.",
    ButtonTo: "https://github.com/santiago0411/SimpleNetworking"
  }
}

const projectHighlightsEs = {
  LightBg: true,
  ProjectsHighlightsTitle: "Proyectos Destacados",
  ProjectHighlightButtonText: "Más Info",
  ProjectOne: {
    Title: "Proyecto AO",
    Image: "",
    Description: "Versión remasterizada de un viejo juego 2D multijugador de Argentina. Rehecho por completo utilizando Unity y C#.",
    LinkTo: "ao-project"
  },
  ProjectTwo: {
    Title: "Simple Networking",
    Image: "",
    Description: "Una simple implementación de server y cliente(s) TCP y UDP para intercambiar cualquier tipo de mensajes. Basado en mi implementación de network de mi juego RPG.",
    ButtonTo: "https://github.com/santiago0411/SimpleNetworking"
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
  Copyright: "Santiago Carnuccio 2022",
  LinkedInTo: "https://www.linkedin.com/in/santiago-carnuccio-8a31401a6/"
}

const footerEs = {
  Copyright: "Santiago Carnuccio 2022",
  LinkedInTo: "https://www.linkedin.com/in/santiago-carnuccio-8a31401a6/"
}

const educationEng = {
  LightBg: false,
  Heading: "Education",
  AlignRight: false,
  BulletPoints: [
      "San Martín de Tours Institute, Middle School, 2011-2013",
      "San Martín de Tours Institute, Economics and Administration High School, 2014-2016",
      "Sungkyunkwan University, Korean Language Program, March-September 2022"
  ]
}

const educationEs = {
  LightBg: false,
  Heading: "Educación",
  AlignRight: false,
  BulletPoints: [
      "Instituto San Martín de Tours, Bachiller en Economía y Administración 2011-2016",
      "Universidad de Sungkyunkwan, Programa de Idioma Coreano, Marzo-Septiembre 2022"
  ]
}

const workEng = {
  LightBg: true,
  Heading: "Working Experience",
  AlignRight: true,
  BulletPoints: [
    "ATM software maintenance and development at Novitech SRL. (2018~2020)",
    "Transactional e-commerce applications development and support at ASAP Technology SRL. (2020~Present)",
    "Independent development, 2D online multiplayer RPG game on Unity. (2020~Present)"
  ]
}

const workEs = {
  LightBg: true,
  Heading: "Experiencia Laboral",
  AlignRight: true,
  BulletPoints: [
    "Mantenimiento y desarrollo de aplicaciones para cajeros automáticos en Novitech SRL. (2018~2020)",
    "Desarrollo y support de aplicaciones de transacciones de e-commerce en ASAP Technology SRL. (2020~Presente)",
    "Desarrollo independiente, videojuego 2D RPG online multijugador en Unity. (2020~Presente)"
  ]
}

const skillsEng = {
  LightBg: false,
  Heading: "Skills",
  AlignRight: false,
  BulletPoints: [
    "C# - Java - C++ - Javascript/Typescript - Python",
    "Unity 2D Game Development",
    "SQL Relational Databases",
    "Server-Clients Networking"
  ]
}

const skillsEs = {
  LightBg: false,
  Heading: "Habilidades",
  AlignRight: false,
  BulletPoints: [
    "C# - Java - C++ - Javascript/Typescript - Python",
    "Unity Desarrollo de Videojuegos 2D",
    "Bases de datos relacionales SQL",
    "Servidor-Clientes Networking"
  ]
}

const languagesEng = {
  LightBg: true,
  Heading: "Languages",
  AlignRight: true,
  BulletPoints: [
    "Spanish: Native",
    "English: Proficient",
    "Korean: Advanced"
  ]
}

const languagesEs = {
  LightBg: true,
  Heading: "Idiomas",
  AlignRight: true,
  BulletPoints: [
    "Español: Nativo",
    "Inglés: Fluido",
    "Coreano: Avanzado"
  ]
}

export const appData = {
  "en": {
    NavBar: navBarEng,
    Home: {
      HomeIntro: homeIntroEng,
      ProjectHighlights: projectHighlightsEng,
      ContactInfo: contactInfoEng
    },
    About: {
      Education: educationEng,
      Work: workEng,
      Skills: skillsEng,
      Languages: languagesEng
    },
    Footer: footerEng
  },
  "es": {
    NavBar: navBarEs,
    Home: {
      HomeIntro: homeIntroEs,
      ProjectHighlights: projectHighlightsEs,
      ContactInfo: contactInfoEs
    },
    About: {
      Education: educationEs,
      Work: workEs,
      Skills: skillsEs,
      Languages: languagesEs
    },
    Footer: footerEs
  }
}