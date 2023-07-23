import { createContext, useContext, useState } from "react";
// 4
const AppContext = createContext();
// 6
const initialLanguage = "en";
const translations = {
  en: {
    homeHello: "Hi my name is",
    homeTitle: "I'm a developer",
    homeText:
      "Seeking to leverage my experience and knowledge to make the web and your apps a little better.",
    homeButton: "View Work",
  },
  es: {
    homeHello: "Hola mi nombre es",
    homeTitle: "Soy un desarrollador",
    homeText:
      "Buscando aprovechar mi experiencia y conocimiento para mejorar un poco la web y sus aplicaciones.",
    homeButton: "Ver trabajo",
  },
  it: {
    homeHello: "Ciao, mi chiamo",
    homeTitle: "Sono uno sviluppatore",
    homeText:
      "Cercando di sfruttare la mia esperienza e conoscenza per migliorare un po' il web e le tue app.",
    homeButton: "Vedere il lavoro",
  },
};
// 5
const useAppContext = () => {
  return useContext(AppContext);
};
// 1
const AppProvider = ({ children }) => {
  //7
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else if (e.target.value === "it") {
      setLanguage("it");
      setTexts(translations.it);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  //2
  return (
    <AppContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
// 3
export { AppProvider, useAppContext };
