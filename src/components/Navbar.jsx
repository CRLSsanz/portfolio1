import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { texts, language, handleLanguage } = useAppContext();

  return (
    <section>
      <div className="w-full flex justify-center bg-gradient-to-l from-cyan-600 backdrop-blur-2xl">
        <nav className="w-full h-16 px-2 lg:w-[960px] flex justify-between items-center">
          <div className="relative ml-4">
            <img
              className="shadow-lg border shadow-gray-200 w-6 h-5"
              src={cargarImagen(`./${language}.png`)}
              //style={{ width: `${item.width}` }}
              alt="English"
            />
            <select
              className="absolute top-0 left-2 pl-6 appearance-none bg-transparent text-transparent focus:text-gray-200 focus:outline-none"
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
            className="px-4 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
          >
            {navbar ? (
              <svg
                width="35px"
                viewBox="0 0 24 24"
                //fill="#aaa"
                fill="#ddd"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
              </svg>
            ) : (
              <svg
                width="35px"
                viewBox="0 0 24 24"
                fill="#ddd"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" />
                <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" />
                <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      <ul
        className={`fixed z-50 flex flex-col justify-center text-center text-white bg-[#0C87A7ee] top-16 w-[calc(100%-100px)] sm:w-[500px] h-[calc(100%-48px)] lg:h-[calc(100%-56px)] transform transition-all duration-1000 px-8 sm:px-12 lg:px-24 lg:text-xl
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0"
            : "opacity-0 pointer-events-none -right-80"
        }`}
      >
        <li className="mb-5">
          <span className="uppercase text-xs lg:text-base tracking-widest ">
            {texts.navbarTitle}
          </span>
        </li>
        <br />
        <li className="w-full py-4 lg:py-6 hover:font-bold ">
          <a href="#section2" onClick={() => setNavbar(!navbar)}>
            {texts.navbarAbout}
          </a>
        </li>
        <li className="w-full border-t border-gray-400 py-4 lg:py-6 hover:font-bold ">
          <a href="#section3" onClick={() => setNavbar(!navbar)}>
            {texts.navbarSkills}
          </a>
        </li>
        <li className="w-full border-t border-gray-400 py-4 lg:py-6 hover:font-bold ">
          <a href="#section4" onClick={() => setNavbar(!navbar)}>
            {texts.navbarWork}
          </a>
        </li>
        <li className="w-full border-t border-gray-400 py-4 lg:py-6 hover:font-bold ">
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
