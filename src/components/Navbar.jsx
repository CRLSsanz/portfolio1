import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { texts, language, handleLanguage } = useAppContext();

  return (
    <section>
      <div className="w-full flex justify-center bg-black/0 backdrop-blur-2xl">
        <nav className="w-full h-16 px-2 lg:px-5 flex justify-between items-center">
          <div className="hidden relative ml-4">
            <img
              className="shadow-lg border shadow-gray-200/50"
              src={cargarImagen(`./${language}.png`)}
              //style={{ width: `${item.width}` }}
              alt="English"
            />
            <select
              className="absolute -top-1 left-2 pl-5 pr-5 appearance-none bg-transparent text-transparent focus:text-gray-200 focus:outline-none"
              onChange={handleLanguage}
            >
              <option value="en">English</option>
              <option value="fr">Frances</option>
              <option value="it">Italiano</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div
            href="#section1"
            className="shadow-lg shadow-transparent ml-4 text-transparent"
          >
            {" C R L S "}
          </div>
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
        className={`fixed z-50 text-gray-400 lg:font-semibold bg-gradient-to-r from-black via-black/90 to-black/0 bBg-[#0C87A7ee] top-0 w-[calc(100%-60px)] sm:w-[400px] h-full Xlg:h-[calc(100%-56px)] transform transition-all duration-500
        ${
          navbar
            ? " opacity-100 pointer-events-auto left-0"
            : "opacity-0 pointer-events-none -left-80"
        }`}
      >
        <div className="p-6 w-[200px] h-full flex flex-col justify-between Bbg-black bg-gradient-to-r from-black via-black to-black/50">
          <div>
            <li className="mb-5">
              <h2 className="text-sm lg:text-base tracking-[0.2em] ">
                {texts.navbarTitle}
              </h2>
            </li>
            <br />
            <li className="w-full py-3 lg:py-5 hover:font-bold ">
              <a href="#sectionHome" onClick={() => setNavbar(!navbar)}>
                Home
              </a>
            </li>
            <li className="w-full border-t border-gray-900 py-3 lg:py-5 hover:font-bold ">
              <a href="#sectionAbout" onClick={() => setNavbar(!navbar)}>
                {texts.navbarAbout}
              </a>
            </li>
            <li className="w-full border-t border-gray-900 py-3 lg:py-5 hover:font-bold ">
              <a href="#sectionSkills" onClick={() => setNavbar(!navbar)}>
                {texts.navbarSkills}
              </a>
            </li>
            <li className="w-full border-t border-gray-900 py-3 lg:py-5 hover:font-bold ">
              <a href="#sectionWork" onClick={() => setNavbar(!navbar)}>
                {texts.navbarWork}
              </a>
            </li>
            <li className="w-full border-t border-gray-900 py-3 lg:py-5 hover:font-bold mb-5">
              <a href="#sectionContact" onClick={() => setNavbar(!navbar)}>
                {texts.navbarContact}
              </a>
            </li>

            <div className="relative flex flex-wrap">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <span className="uppercase ml-2">{language}</span>
              <img
                className="hidden shadow-lg border shadow-gray-200/50"
                src={cargarImagen(`./${language}.png`)}
                //style={{ width: `${item.width}` }}
                alt="English"
              />
              <select
                className="absolute top-0 left-10 px-5 appearance-none bg-transparent text-black focus:text-gray-200 focus:outline-none"
                onChange={handleLanguage}
              >
                <option value="en">English</option>
                <option value="fr">Frances</option>
                <option value="it">Italiano</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <h4 className="fam-logo">
              <a href="#footer" className="">
                crls code
              </a>
            </h4>
            <div className="Bbg-red-400 rotate-90 p-2">
              <span className="hidden md:flex -mt-2 -ml-10  animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-6 h-6 cursor-pointer"
                  onClick={() => setNavbar(!navbar)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </span>
            </div>
          </div>

          <li className="hidden">
            <a href="http://www.google.com" className="">
              + Downloader my resumen
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Navbar;
