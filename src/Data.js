const simpleNetworkingGitLink = "https://github.com/santiago0411/SimpleNetworking";
const githubProfileLink = "https://github.com/santiago0411?tab=repositories";
const linkedInLink = "https://www.linkedin.com/in/santiago-carnuccio-8a31401a6/";
const engWikiAoLink = "https://en.wikipedia.org/wiki/Argentum_Online";
const esWikiAoLink = "https://es.wikipedia.org/wiki/Argentum_Online";
const engAStarLink = "https://en.wikipedia.org/wiki/A*_search_algorithm";
const esAStarLink = "https://es.wikipedia.org/wiki/Algoritmo_de_b%C3%BAsqueda_A*";
const sqlKataLink = "https://sqlkata.com/";
const dapperLink = "https://github.com/DapperLib/Dapper";

const auxPath = "portfolio-website/";

const navBarEng = {
  Title: "My Portfolio",
  HomeButton: "Home",
  ProjectsButton: "AO Project",
  AboutButton: "About",
}

const navBarEs = {
  Title: "Mi Portafolio",
  HomeButton: "Inicio",
  ProjectsButton: "Proyecto AO",
  AboutButton: "Sobre Mi",
}

const homeIntroEng = {
  TopLine: "Santiago Carnuccio",
  Headline: "SOFTWARE DEVELOPER",
  Description: "I'm a self-taught software developer from Buenos Aires, Argentina, currently living in Seoul, South Korea. I started programming when I was in High School as a hobby and as a result of my interest in computers. After realizing how much I enjoyed it I decided to make it into my profession. I speak fluent Spanish, English and advanced Korean.",
  ButtonLabel: "Learn More",
  ButtonRedirect: "/about",
}

const homeIntroEs = {
  TopLine: "Santiago Carnuccio",
  Headline: "DESARROLLADOR DE SOFTWARE",
  Description: "Soy un desarrollador de Buenos Aires, Argentina, viviendo actualmente en Seúl, Corea del Sur. La mayoría de mis conocimientos los aprendí por mi cuenta o trabajando con colegas. Comencé a programar cuando estaba en el secundario como un pasatiempo por mi gran interés en computación. Luego de darme cuenta lo mucho que me gusta decidí convertirlo en mi profesión. Hablo Español e Inglés fluido y Coreano avanzado.",
  ButtonLabel: "Ver Más",
  ButtonRedirect: "/about",
}

const projectHighlightsEng = {
  ProjectsHighlightsTitle: "Projects Highlights",
  ProjectHighlightButtonText: "More Info",
  ProjectOne: {
    Title: "AO Project",
    Description: "Remastered version of an old Argentinean 2D online multiplayer game. Remade from the ground up using Unity and C#."
  },
  ProjectTwo: {
    Title: "Simple Networking",
    Description: "A simple server-client(s) TCP and UDP implementations to send and receive any type of messages. Based on my network implementation for my RPG Game Project.",
    ButtonTo: simpleNetworkingGitLink
  }
}

const projectHighlightsEs = {
  ProjectsHighlightsTitle: "Proyectos Destacados",
  ProjectHighlightButtonText: "Más Info",
  ProjectOne: {
    Title: "Proyecto AO",
    Description: "Versión remasterizada de un viejo juego 2D multijugador de Argentina. Rehecho por completo utilizando Unity y C#.",
    LinkTo: "ao-project"
  },
  ProjectTwo: {
    Title: "Simple Networking",
    Description: "Una simple implementación de server y cliente(s) TCP y UDP para intercambiar cualquier tipo de mensajes. Basado en mi implementación de network de mi juego RPG.",
    ButtonTo: simpleNetworkingGitLink
  }
}

const contactInfoEng = {
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
  LinkedInTo: linkedInLink,
  GithubTo: githubProfileLink
}

const footerEs = {
  Copyright: "Santiago Carnuccio 2022",
  LinkedInTo: linkedInLink,
  GithubTo: githubProfileLink
}

const educationEng = {
  Heading: "Education",
  BulletPoints: [
      "San Martín de Tours Institute, Middle School, 2011-2013",
      "San Martín de Tours Institute, Economics and Administration High School, 2014-2016",
      "Sungkyunkwan University, Korean Language Program, March-September 2022"
  ]
}

const educationEs = {
  Heading: "Educación",
  BulletPoints: [
      "Instituto San Martín de Tours, Bachiller en Economía y Administración 2011-2016",
      "Universidad de Sungkyunkwan, Programa de Idioma Coreano, Marzo-Septiembre 2022"
  ]
}

const workEng = {
  Heading: "Working Experience",
  BulletPoints: [
    "ATM software maintenance and development at Novitech SRL. (2018~2020)",
    "Transactional e-commerce applications development and support at ASAP Technology SRL. (2020~Present)",
    "Independent development, 2D online multiplayer RPG game on Unity. (2020~Present)"
  ]
}

const workEs = {
  Heading: "Experiencia Laboral",
  BulletPoints: [
    "Mantenimiento y desarrollo de aplicaciones para cajeros automáticos en Novitech SRL. (2018~2020)",
    "Desarrollo y support de aplicaciones de transacciones de e-commerce en ASAP Technology SRL. (2020~Presente)",
    "Desarrollo independiente, videojuego 2D RPG online multijugador en Unity. (2020~Presente)"
  ]
}

const skillsEng = {
  Heading: "Skills",
  BulletPoints: [
    "C# - Java - C++ - Javascript/Typescript - Python",
    "Unity 2D Game Development",
    "SQL Relational Databases",
    "Server-Clients Networking"
  ]
}

const skillsEs = {
  Heading: "Habilidades",
  BulletPoints: [
    "C# - Java - C++ - Javascript/Typescript - Python",
    "Unity Desarrollo de Videojuegos 2D",
    "Bases de datos relacionales SQL",
    "Servidor-Clientes Networking"
  ]
}

const languagesEng = {
  Heading: "Languages",
  BulletPoints: [
    "Spanish: Native",
    "English: Proficient",
    "Korean: Advanced"
  ]
}

const languagesEs = {
  Heading: "Idiomas",
  BulletPoints: [
    "Español: Nativo",
    "Inglés: Fluido",
    "Coreano: Avanzado"
  ]
}

const projectAoEng = {
  Intro: {
    Headline: "AO PROJECT",
    Description: `Remake of an old popular Argentinean game called <a href=${engWikiAoLink} target='_blank' rel='noopener noreferrer'><nobr>Argentum Online</nobr></a>.<br/> The original game is open source and was coded using Visual Basic 6.0. Thanks to this game I discovered the world of programming over 10 years ago, which led me many years later by interest and sheer curiosity to recreate this game from scratch using Unity and only keeping the original graphics. The game is an open-world RPG in which you can fight against creatures to level up your character as well as against other players.<br/>The source code of this project is not open to the public for the time being, although I am willing to disclose parts of it as per request.`,
    Img: `${auxPath}images/AO.gif`,
  },
  Network: {
    Headline: "NETWORKING",
    Description: `The networking module is very similar to my <a href=${simpleNetworkingGitLink} target='_blank' rel='noopener noreferrer'><nobr>SimpleNetworking</nobr></a> library. A message is sent by either server or client, and it is put on a thread safe queue after arriving. Periodically the main thread collects all the actions in the queue and executes them.`,
    Img: `${auxPath}images/network-flowchart.png`
  },
  Pathfinding : {
    Headline: "A* PATH FINDING",
    Description: `Hostile NPCs use an implementation of the <a href=${engAStarLink} target='_blank' rel='noopener noreferrer'><nobr>A* algorithm</nobr></a> to find the shortest available path to their target. As the NPC chases its target if it moves away from its original position new paths are requested. If the target happens to run out of the NPC's vision range or the NPC gets too far away from its original position, it will request a path towards that original position and enter a 'leashing' state in which it cannot be attacked until it reaches its destination.<br/>This gif shows the algorithm being updated in real time, drawing circles in each node of the path and updating the path as the player runs away. When the NPC reaches more than 15 tiles of distance from its original spawn point it enters the 'leashing' state and runs back to where it was spawned.`,
    Img: `${auxPath}images/PathFinding.gif`,
    CodeBlockHeading: "A* Algorithm Implementation"
  },
  Database: {
    Headline: "DATABASE",
    Description: `The database module uses the library <a href=${sqlKataLink} target='_blank' rel='noopener noreferrer'><nobr>SqlKata</nobr></a> to abstract the database being used as well as provide query building functionality to avoid having to write the queries manually and avoid dependency to a specific SQL database. It also provides object mapping functionality wrapping the usage of another library <a href=${dapperLink} target='_blank' rel='noopener noreferrer'><nobr>Dapper</nobr></a>. Right after executing the query, the data fetched is automatically set inside an instance of the provided class or struct type through reflection.<br/>In this code example a list of type AOCharacterInfo, the size of which is the amount of rows fetched, is automatically allocated and each field of each element is mapped to the corresponding column from the database. After that the list is mapped to a Dictionary utilizing the CharacterId field as a key.`
  }
}

const projectAoEs = {
  Intro: {
    Headline: "PROYECTO AO",
    Description: `Recreación de un viejo videojuego popular Argentino llamado <a href=${esWikiAoLink} target='_blank' rel='noopener noreferrer'><nobr>Argentum Online</nobr></a>.<br/> El juego original es open source y fue programado en Visual Basic 6.0. Gracias a este juego descubrí el mundo de la programación hace ya más de 10 años, lo cual luego de muchos años por interés y curiosidad me llevo a recrear el juego por completo utilizando Unity y solo manteniendo los gráficos originales. El juego es un RPG mundo abierto en el que puedes luchar tanto contra criaturas para mejorar tu nivel así también como contra otros jugadores. El código de este proyecto no está disponible al público por el momento, aunque puedo compartir partes si es pedido.`,
    Img: `${auxPath}images/AO.gif`,
  },
  Network: {
    Headline: "NETWORKING",
    Description: `El módulo de red es muy similar a mi librería <a href=${simpleNetworkingGitLink} target='_blank' rel='noopener noreferrer'><nobr>SimpleNetworking</nobr></a>. Un mensaje es envidado por el servidor o un cliente, y es puesto en cola para procesar luego de ser recibido. Periodicamente el thread principal recollecta todas las acciones en cola y las ejecuta.`,
    Img: `${auxPath}images/network-flowchart.png`,
  },
  Pathfinding : {
    Headline: "A* PATH FINDING",
    Description: `Los NPCs hostiles utilizan una implementación del <a href=${esAStarLink} target='_blank' rel='noopener noreferrer'><nobr>algoritmo A*</nobr></a> para encontrar el camino más corto disponible hacia su objetivo. Mientras el NPC persigue a su objetivo si este se mueve, nuevos caminos son buscados para seguir persiguiendolo. Si el objetivo se aleja del área de visión del NPC o el NPC se aleja demasiado de su posición original, el NPC entrará en un estado de 'leashing' en el que pedirá un camino a su posición original y no podrá ser atacado hasta que llegue a ella.<br/>Este gif muestra el algoritmo siendo actualizado en tiempo real, dibujando circulos en cada nodo del camino mientras el jugador se aleja. Cuando el NPC se aleja más de 15 posiciones de su lugar original entra en el estado de 'leashing' y vuelve al lugar en donde se encontraba.`,
    Img: `${auxPath}images/PathFinding.gif`,
    CodeBlockHeading: "Implementación del Algoritmo A*"
  },
  Database: {
    Headline: "BASE DE DATOS",
    Description: `El módulo de base de datos utiliza la librería <a href=${sqlKataLink} target='_blank' rel='noopener noreferrer'><nobr>SqlKata</nobr></a> para abstraer el tipo de base de datos que se utiliza, así como también proveer funcionalidad para crear las queries automáticamente. También utilizando la librería <a href=${dapperLink} target='_blank' rel='noopener noreferrer'><nobr>Dapper</nobr></a> provee funcionalidad para mapear los datos extraídos de la base a objectos de C#, utilizando reflection, luego de ejecutar las queries.<br/> En este ejemplo una lista de tipo AOCharacterInfo, cuyo tamaño es la cantidad de filas traidas de la base, es automáticamente creada y cada campo de cada elemento es mapeado a la data de la columna correspondiente. Luego de eso la lista es convertida en un Dictionary utilizando el campo CharacterId como la clave.`
  }
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
    ProjectAO: projectAoEng,
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
    ProjectAO: projectAoEs,
    Footer: footerEs
  }
}