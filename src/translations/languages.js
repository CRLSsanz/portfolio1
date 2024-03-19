// 6
const initialLanguage = "es";
const translations = {
  en: {
    //NAVBAR
    navbarTitle: "Navigation",
    navbarAbout: "About",
    navbarSkills: "Skills",
    navbarWork: "Work",
    navbarContact: "Contact",
    navbarMode: "Mode",
    //HOME
    homeHello: "Hi my name is",
    homeTitle: "I'm a full Stack Developer",
    homeText:
      "An enthusiast of new challenges. I am passionate about creating excellent software seeking to leverage my experience and knowledge to make the web and your apps a little better..",
    homeButton: "View Work",
    //ABOUT
    abTitle: "Welcome",
    abTitleText:
      "My name is Carlos Sanchez and I am a Full Stack Developer, specialized in Front-End. Programmer. Creative. Specialist. Capricious. Enthusiast of new challenges. I am passionate about creating great software.",
    abInfo1: "Available",
    abInfo2: "Links",
    abInfo3: "February",
    abInfo3N: "29th",
    abInfo4: "Joined Jan",
    abInfo4N: "2023",
    abBotton: "Brings ideas to life with code!",
    abSubTitle: "What i do",
    abSubTitleText:
      "The digital world is constantly evolving, your online presence is essential for the success of your business, which is why I accompany you from the process of defining and building your brand.",

    abDo1title: "Web Development and Design",
    abDo1text:
      "I create quality websites with a design that reflects the essence of your business, providing an online presence that stands out.",
    abDo2title: "On-line shop",
    abDo2text:
      "Develop your online store with an attractive and effective design, integrated with multiple payment methods, so you can multiply your sales.",
    abDo3title: "Responsive Design",
    abDo3text:
      "I create websites that look great on any device, improving user experience and search engine visibility.",
    abDo4title: "Hosting",
    abDo4text:
      "I take care of hosting your website at the best price on the market, with SSD storage and SSL certificate.",
    //SKILL
    skillTitle: "Skills",
    skillText:
      "These are some of the technologies and skills learned throughout my career",
    //WORK
    workTitle: "Work",
    workText: "These are some of my recent web projects.",
    workStructureMCH:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",

    workMarketingOnline:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",

    workFastFood:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",

    workCrypto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",

    workCorsi:
      "Learn to create applications and websites with MasterD's Full Stack Web Developer course and become an expert web programmer. The professional figure of the Full Stack developer is a point of reference for the entire team working on a project.",
    workApeteat:
      "Food and wellness service. Join our community and enjoy the best daily food service in this new hybrid work reality. Eat healthy and sustainable wherever you are. 100% natural.",
    //CONTACT
    contactTitle: "Contact me",
    contactText:
      "Contact us for free and together let's grow your business in the digital world! Our team of experts is ready to make it happen.",
    contactCall: "Call me now",
    contactSend: "Send an email",
    contactLive: "Whatsapp live",
    contactForm:
      "Fill in your info in the form below and I look forward to hearing from you!",
    contactSendForm: "Send Message!",
  },
  es: {
    //NAVBAR
    navbarTitle: "Navegación",
    navbarAbout: "Sobre mi",
    navbarDoit: "Lo que hago",
    navbarSkills: "Tecnología",
    navbarWork: "Proyectos",
    navbarContact: "Contacto",
    navbarMode: "Modo",
    //HOME
    homeHello: "Hola mi nombre es",
    homeTitle: "Desarrollador Web",
    homeText:
      "Soy un entusiasta de los nuevos retos; me apasiona crear software excelente buscando aprovechar mi experiencia y conocimientos.",
    homeButton: "Ver Portafolio",
    //ABOUT
    abTitle: "Welcome",
    abTitleText:
      "Me llamo Carlos Sanchez y soy Desarrollador Full Stack, especializado en Front-End. Programador. Creativo. Especialista. Apasionado de crear software excelente. Entusiasta de nuevos retos.",
    abInfo1: "Disponible",
    abInfo2: "Enlaces",
    abInfo3: "de Febrero",
    abInfo3N: "29",
    abInfo4: "Se unió en enero de",
    abInfo4N: "2023",
    abBotton: "¡Da vida a las ideas con código!",
    abSubTitle: "Lo que hago",
    abSubTitleText:
      "El mundo digital está en constante evolución, tu presencia en línea es esencial para el éxito de tu negocio, es por ello que te acompaño desde el proceso de definición y construcción de tu marca.",

    abDo1title: "Desarrollo y Diseño Web",
    abDo1text:
      "Creo sitios web de calidad con un diseño que refleje la esencia de tu negocio, proporcionando una presencia en línea que destaque.",
    //abDoLink: "Ver mas",
    abDo2title: "Tienda Virtual",
    abDo2text:
      "Desarrollo tu tienda online con un diseño atractivo y efectivo, integrada con múltiples formas de pago, para que puedas multiplicar tus ventas.",
    abDo3title: "Diseño Responsive",
    abDo3text:
      "Creo sitios web que se ven geniales en cualquier dispositivo, mejorando la experiencia de usuario y la visibilidad en los buscadores.",
    abDo4title: "Hosting",
    abDo4text:
      "Me encargo de alojar tu sitio web al mejor precio del mercado, con almacenamiento en SSD y certificado SSL.",
    //SKILL
    skillTitle: "Stack Tecnologico",
    skillText:
      "Estas son algunas de las tecnologías y habilidades aprendidas a lo largo de mi carrera",
    //WORK
    workTitle: "Proyectos",
    workText: "Estos son algunos de mis proyectos web recientes.",
    workStructureMCH:
      "Fabricación de Estructuras Metálicas de Acero a Medida. En estructuras MCH damos las mejores soluciones en soldaduras, corte, taladramiento, granallado o pintura, entre otros en la fabricación de estructuras metálicas de todo tipo.",
    workMarketingOnline:
      "Impulsa tu Negocio, descubre el poder de la consultoría estratégica de marketing y ventas para impulsar tu negocio hacia el éxito.",
    workFastFood:
      "Tu propia solución de pedidos en línea, con sitios y aplicaciones permite que los clientes en la tienda hagan pedidos directamente desde su teléfono con los pedidos desde la mesa de Fast Food J&M",
    workCrypto:
      "Precio de BTC hoy. El precio en tiempo real de Bitcoin por (BTC/USD) y su capitalización de mercado actual. Volumen de trading en 24 horas. El precio de BTC respecto a USD se actualiza en tiempo real.",
    workCorsi:
      "Aprenda a crear aplicaciones y sitios web con el curso Full Stack Web Developer de MasterD y conviértase en un programador web experto. La figura profesional del desarrollador Full Stack es un punto de referencia para todo el equipo que trabaja en un proyecto.",
    workApeteat:
      "Servicio de alimentación y bienestar. Únete a nuestra comunidad y disfruta del mejor servicio de comida diaria en esta nueva realidad laboral híbrida. Come sano y sostenible estés dónde estés. 100% Natural.",

    //CONTACT
    contactTitle: "Contacto",
    contactText: `Contáctame de forma gratuita y juntos hagamos crecer tu negocio en este mundo digital. ¡Estamos listo para hacerlo realidad!.`,
    contactCall: "Llamar ahora",
    contactSend: "Enviar email",
    contactLive: "Msn Whatsapp",
    contactForm:
      "Complete su información en el formulario a continuación; espero tener noticias suyas.",
    contactSendForm: "Enviar Mensaje!",
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
    abTitle: "Hello World!",
    abTitleText:
      "My name is Carlos Sanchez and I am a full stack Developer, specialized in Front-End. Programmer. Creative. Whimsical specialist. International Speaker. Ex-Google.",
    abInfo1: "Available",
    abInfo2: "links",
    abInfo3: "February",
    abInfo3N: "29th",
    abInfo4: "Joined Jan",
    abInfo4N: "2023",
    abBotton: "Brings ideas to life with code!",
    abSubTitle: "What i do",
    abSubTitleText:
      "The digital world is constantly evolving, your online presence is essential for the success of your business, which is why we accompany you from the process of defining and building your brand.",

    abDo1title: "Web Development and Design",
    abDo1text:
      "I create quality websites with a design that reflects the essence of your business, providing an online presence that stands out.",
    abDo2title: "On-line shop",
    abDo2text:
      "Develop your online store with an attractive and effective design, integrated with multiple payment methods, so you can multiply your sales.",
    abDo3title: "Responsive Design",
    abDo3text:
      "I create websites that look great on any device, improving user experience and search engine visibility.",
    abDo4title: "Hosting",
    abDo4text:
      "I take care of hosting your website at the best price on the market, with SSD storage and SSL certificate.",
    //SKILL
    skillTitle: "Compétences",
    skillText:
      "These are some of the technologies and skills learned throughout my career",
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
      "Contact us for free and together let's grow your business in the digital world! Our team of experts is ready to make it happen.",
    contactForm:
      "Fill in your info in the form below and I look forward to hearing from you!",
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
    abTitle: "Hello World!",
    abTitleText:
      "My name is Carlos Sanchez and I am a full stack Developer, specialized in Front-End. Programmer. Creative. Whimsical specialist. International Speaker. Ex-Google.",
    abInfo1: "Available",
    abInfo2: "links",
    abInfo3: "February",
    abInfo3N: "29th",
    abInfo4: "Joined Jan",
    abInfo4N: "2023",
    abBotton: "Brings ideas to life with code!",
    abSubTitle: "What i do",
    abSubTitleText:
      "The digital world is constantly evolving, your online presence is essential for the success of your business, which is why we accompany you from the process of defining and building your brand.",

    abDo1title: "Web Development and Design",
    abDo1text:
      "I create quality websites with a design that reflects the essence of your business, providing an online presence that stands out.",
    abDo2title: "On-line shop",
    abDo2text:
      "Develop your online store with an attractive and effective design, integrated with multiple payment methods, so you can multiply your sales.",
    abDo3title: "Responsive Design",
    abDo3text:
      "I create websites that look great on any device, improving user experience and search engine visibility.",
    abDo4title: "Hosting",
    abDo4text:
      "I take care of hosting your website at the best price on the market, with SSD storage and SSL certificate.",
    //SKILL
    skillTitle: "Abilità",
    skillText:
      "These are some of the technologies and skills learned throughout my career",

    //WORK
    workTitle: "Lavoro",
    workText: "Guarda alcuni dei miei ultimi lavori.",
    workItem1: "Spese e Entrate",
    workItem2: "Strutture MCH",
    workItem3: "Marketing Online",
    workItem4: "Fast Food J&M",
    workView: "Vedere",
    workCorsi:
      "Impara a creare applicazioni e siti web con il corso di Full Stack Web Developer di MasterD e diventa un programmatore web esperto. La figura professionale dello sviluppatore Full Stack è un punto di riferimento per tutto il team che lavora su un progetto.",
    //CONTACT
    contactTitle: "Contattami",
    contactText:
      "Contact us for free and together let's grow your business in the digital world! Our team of experts is ready to make it happen.",
    contactForm:
      "Fill in your info in the form below and I look forward to hearing from you!",
    contactSend: "Invia Messaggio!",
  },
};

export { initialLanguage, translations };
