import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { texts, language, handleLanguage } = useAppContext();

  return (
    <section>
      <div className="w-full flex justify-center bg-gradient-to-l from-black/20 backdrop-blur-2xl">
        <nav className="w-full h-16 px-2 lg:px-5 flex justify-between items-center">
          <div className="relative ml-4">
            <img
              className="shadow-lg border shadow-gray-200/50"
              src={cargarImagen(`./${language}.png`)}
              //style={{ width: `${item.width}` }}
              alt="English"
            />
            <select
              className="absolute -top-1 left-2 pl-6 appearance-none bg-transparent text-transparent focus:text-gray-200 focus:outline-none"
              onChange={handleLanguage}
            >
              <option value="en">English</option>
              <option value="es">Espanish</option>
              <option value="fr">Frances</option>
              <option value="it">Italiano</option>
            </select>
          </div>
          <a
            href="#section1"
            className="hidden px-4 text-lg text-gray-100 font-semibold"
          >
            C R L S
          </a>
          <button
            onClick={() => setNavbar(!navbar)}
            className="px-2 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
          >
            {navbar ? (
              <svg
                fill="currentColor"
                className="py-2 mr-2"
                width="25px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z" />
              </svg>
            ) : (
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M5 15H19M5 9H19"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      <ul
        className={`fixed z-50 flex flex-col justify-center text-center text-gray-500 lg:font-semibold bg-gray-100/95 bBg-[#0C87A7ee] border-l-2 border-gray-500/50 top-16 w-[calc(100%-100px)] sm:w-[500px] h-[calc(100%-48px)] lg:h-[calc(100%-56px)] transform transition-all duration-1000 px-8 sm:px-12 lg:px-24 lg:text-xl
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0"
            : "opacity-0 pointer-events-none -right-80"
        }`}
      >
        <li className="mb-5">
          <span className="uppercase text-xs lg:text-base tracking-[0.2em] ">
            {texts.navbarTitle}
          </span>
        </li>
        <br />
        <li className="w-full py-4 lg:py-6 hover:font-bold ">
          <a href="#section2" onClick={() => setNavbar(!navbar)}>
            {texts.navbarAbout}
          </a>
        </li>
        <li className="w-full border-t border-gray-300 py-4 lg:py-6 hover:font-bold ">
          <a href="#section3" onClick={() => setNavbar(!navbar)}>
            {texts.navbarSkills}
          </a>
        </li>
        <li className="w-full border-t border-gray-300 py-4 lg:py-6 hover:font-bold ">
          <a href="#section4" onClick={() => setNavbar(!navbar)}>
            {texts.navbarWork}
          </a>
        </li>
        <li className="w-full border-t border-gray-300 py-4 lg:py-6 hover:font-bold ">
          <a href="#section5" onClick={() => setNavbar(!navbar)}>
            {texts.navbarContact}
          </a>
        </li>

        <br />
        <li className="">
          <a href="http://www.google.com" className="">
            carlonchosanz@gmail.com
          </a>
        </li>
        <li className="">
          <a href="http://www.google.com" className="">
            + Downloader my resumen
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
