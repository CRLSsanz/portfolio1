import { createContext, useContext, useState } from "react";
//6
import { initialLanguage, translations } from "../translations/languages";

// 4
const AppContext = createContext();

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
    } else if (e.target.value === "fr") {
      setLanguage("fr");
      setTexts(translations.fr);
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
    <AppContext.Provider value={{ language, texts, handleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
// 3
export { AppProvider, useAppContext };
