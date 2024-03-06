// 6
const initialLanguage = "en";
const translations = {
  en: {
    //NAVBAR
    navbarTitle: "Navigation",
    navbarAbout: "About",
    navbarSkills: "Skills",
    navbarWork: "Work",
    navbarContact: "Contact",
    //HOME
    homeHello: "Hi my name is",
    homeTitle: "I'm a full Stack Developer",
    homeText:
      "An enthusiast of new challenges. I am passionate about creating excellent software seeking to leverage my experience and knowledge to make the web and your apps a little better..",
    homeButton: "View Work",
    //ABOUT
    aboutTitle: "What I do",
    aboutFrontend:
      "As a JavaScript developer, I have experience in HTML5 and CSS3 techniques working with MVC frameworks and React components.",
    aboutBankend:
      "Using php frameworks or creating custom code with NodeJS, I've written services that support thousands of users, including REST APIs, eLearning applications, and more.",
    aboutConsultantTitle: "Consultant",
    aboutConsultant:
      "In addition to providing development services, I can also help you decide on strategic roadmaps through consulting services.",
    //SKILL
    skillTitle: "Skills",
    //WORK
    workTitle: "Work",
    workText: "Check out some of my recent work",
    workItem1: "Expenses & Income",
    workItem2: "MCH Structures",
    workItem3: "Marketing Online",
    workItem4: "Fast Food J&M",
    workView: "View",
    //CONTACT
    contactTitle: "Contact me",
    contactText:
      "I am currently available for freelance work. If you have a project that you want to start or think you need my help, contact me and I will help you.",
    contactForm:
      "Fill in your info in the form below and I look forward to hearing from you!",
    contactSend: "Send Message!",
  },
  es: {
    //NAVBAR
    navbarTitle: "Navegación",
    navbarAbout: "Sobre mi",
    navbarSkills: "Habilidades",
    navbarWork: "Trabajo",
    navbarContact: "Contacto",
    //HOME
    homeHello: "Hola mi nombre es",
    homeTitle: "Desarrollador Web",
    homeText:
      "Soy un entusiasta de los nuevos retos; me apasiona crear software excelente buscando aprovechar mi experiencia y conocimientos.",
    homeButton: "Ver Portafolio",
    //ABOUT
    aboutTitle: "Hello World!",
    aboutSubTitle: "Lo que hago",
    aboutFrontend:
      "Como desarrollador de JavaScript, tengo experiencia en técnicas HTML5 y CSS3 trabajando con marcos MVC y componentes React.",
    aboutBankend:
      "Usando marcos de php o creando código personalizado con NodeJS, he escrito servicios que admiten miles de usuarios, incluidas API REST, aplicaciones de aprendizaje electrónico y más.",
    aboutConsultantTitle: "Consultor",
    aboutConsultant:
      "Además de brindar servicios de desarrollo, también puedo ayudarlo a decidir sobre hojas de ruta estratégicas a través de servicios de consultoría.",
    //SKILL
    skillTitle: "Stack Tecnologico",
    //WORK
    workTitle: "Proyectos",
    workText: "Estos son algunos de mis proyectos web del último tiempo.",
    workItem1: "Control de Gastos",
    workItem2: "Extructuras MCH",
    workItem3: "Marketing Online",
    workItem4: "Comida Rapida J&M",
    workView: "Ver",
    //CONTACT
    contactTitle: "Contáctame",
    contactText:
      "Actualmente estoy disponible para trabajo independiente. Si tiene un proyecto que desea comenzar o cree que necesita mi ayuda, contactame y te ayudare.",
    contactForm:
      "Complete su información en el formulario a continuación y espero tener noticias suyas.",
    contactSend: "Enviar Mensaje!",
  },
  fr: {
    //NAVBAR
    navbarTitle: "Navigation",
    navbarAbout: "A propos",
    navbarSkills: "Compétences",
    navbarWork: "Travail",
    navbarContact: "Contact",
    //HOME
    homeHello: "Salut, je m'appelle",
    homeTitle: "Je suis Développeur",
    homeText:
      "Adepte des nouveaux défis. Je suis passionné par la création d'excellents logiciels cherchant à profiter de mon expérience et de mes connaissances pour améliorer un peu le web et ses applications",
    homeButton: "Voir le travail",
    //ABOUT
    aboutTitle: "Ce que je fais",
    aboutFrontend:
      "En tant que développeur JavaScript, j'ai de l'expérience dans les techniques HTML5 et CSS3 en travaillant avec les frameworks MVC et les composants React.",
    aboutBankend:
      "En utilisant des frameworks php ou en créant du code personnalisé avec NodeJS, j'ai écrit des services qui prennent en charge des milliers d'utilisateurs, notamment des API REST, des applications d'apprentissage en ligne, etc.",
    aboutConsultantTitle: "Consultant",
    aboutConsultant:
      "En plus de fournir des services de développement, je peux également vous aider à décider des feuilles de route stratégiques grâce à des services de conseil.",
    //SKILL
    skillTitle: "Compétences",
    //WORK
    workTitle: "Travail",
    workText: "Découvrez quelques-uns de mes travaux récents.",
    workItem1: "Dépenses et Revenus",
    workItem2: "Structures MCH",
    workItem3: "Marketing en Ligne",
    workItem4: "Restauration Rapide J&M",
    workView: "Voir",
    //CONTACT
    contactTitle: "Contactez-moi",
    contactText:
      "Je suis actuellement disponible pour un travail indépendant. Si vous avez un projet que vous souhaitez démarrer ou pensez avoir besoin de mon aide, contactez-moi et je vous aiderai.",
    contactSend: "Envoyer Message!",
  },
  it: {
    //NAVBAR
    navbarTitle: "Navigazione",
    navbarAbout: "Informazioni",
    navbarSkills: "Competenze",
    navbarWork: "Lavoro",
    navbarContact: "Contatto",
    //HOME
    homeHello: "Ciao, mi chiamo",
    homeTitle: "Sono uno Sviluppatore",
    homeText:
      "Un appassionato di nuove sfide. Sono appassionato di creare software eccellente cercando di sfruttare la mia esperienza e conoscenza per migliorare un po' il web e le sue applicazioni.",
    homeButton: "Vedere il lavoro",
    //ABOUT
    aboutTitle: "Cosa faccio",
    aboutFrontend:
      "Come sviluppatore JavaScript, ho esperienza nelle tecniche HTML5 e CSS3 lavorando con framework MVC e componenti React.",
    aboutBankend:
      "Utilizzando framework php o creando codice personalizzato con NodeJS, ho scritto servizi che supportano migliaia di utenti, tra cui API REST, applicazioni di eLearning e altro ancora.",
    aboutConsultantTitle: "Consulente",
    aboutConsultant:
      "Oltre a fornire servizi di sviluppo, posso anche aiutarti a decidere su roadmap strategiche attraverso servizi di consulenza.",
    //SKILL
    skillTitle: "Abilità",
    //WORK
    workTitle: "Lavoro",
    workText: "Guarda alcuni dei miei ultimi lavori.",
    workItem1: "Spese e Entrate",
    workItem2: "Strutture MCH",
    workItem3: "Marketing Online",
    workItem4: "Fast Food J&M",
    workView: "Vedere",
    //CONTACT
    contactTitle: "Contattami",
    contactText:
      "Attualmente sono disponibile per lavoro freelance. Se hai un progetto che vuoi avviare o pensi di aver bisogno del mio aiuto, contattami e ti aiuterò.",
    contactSend: "Invia Messaggio!",
  },
};

export { initialLanguage, translations };
