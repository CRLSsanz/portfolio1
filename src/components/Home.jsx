import React from "react";
import { useAppContext } from "../context/AppProvider";

const Home = () => {
  const { texts, handleLanguage } = useAppContext();

  return (
    <div className="p-8 text-gray-100 md:px-48 lg:px-80">
      <h1 className="mb-2">{texts.homeHello} </h1>
      <h1 className="text-3xl mb-2 text-cyan-500">
        Carlos Sanchez <br /> {texts.homeTitle}
      </h1>
      <p className="mb-8">{texts.homeText}</p>
      <a href="#section4" className="px-6 py-3 border-2 border-cyan-500">
        {texts.homeButton}
      </a>
      <br />
      <select className="bg-transparent mt-6" onChange={handleLanguage}>
        <option value="en">English</option>
        <option value="es">Espanish</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  );
};

export default Home;
