import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";
import LogosSVG from "./LogosSVG";
const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { texts, language, handleLanguage, darkMode, toggleDarkMode } =
    useAppContext();

  return (
    <section>
      <div className="w-full flex justify-center bg-black/0 backdrop-blur-2xl">
        {/** NAVBAR */}
        <div className="w-full lg:w-[1150px] h-16 px-2 lg:px-5 flex justify-between items-center">
          <div
            href="#section1"
            className="hidden shadow-lg shadow-transparent ml-4 text-transparent"
          >
            {" C R L S "}
          </div>

          <div className="flex justify-center">
            <LogosSVG />
          </div>

          <div className="text-gray-200 dark:text-gray-700 flex flex-row items-center">
            <div
              className="hidden p-2 active:bg-none active:bg-transparent active:animate-ping focus:outline-none cursor-pointer"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </div>
            <div
              className="Xbg-red-300 text-2xl fam-logo p-1 mx-3 -tracking-[0.4em]"
              style={{ fontFamily: "Orbitron" }}
            >
              CS
            </div>
            <button
              onClick={() => setNavbar(!navbar)}
              className="2xl:-- hidden p-2 mr-1 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <ul
        className={`fixed z-50 text-white lg:font-medium bg-gradient-to-r from-black via-black/90 dark:via-black/30 to-black/0 bBg-[#0C87A7ee] top-0 w-[calc(100%-120px)] sm:w-[400px] lg:w-[250px] h-full Xlg:h-[calc(100%-56px)] transform transition-all duration-500
        ${
          navbar
            ? " opacity-100 pointer-events-auto left-0"
            : "opacity-0 pointer-events-none -left-80  X2xl:opacity-100 X2xl:pointer-events-auto X2xl:left-0"
        }`}
      >
        <div className="p-6 w-[200px] h-full flex flex-col justify-between bg-gradient-to-r from-cyan-600 to-cyan-600">
          <div>
            <li className="mb-10">
              <h2 className="text-sm lg:text-base tracking-[0.2em] ">
                {texts.navbarTitle}
              </h2>
            </li>

            <li className="w-full hover:border-l-4 hover:pl-2 border-gray-100/20 mb-3 ">
              <a
                href="#sectionHome"
                className="flex py-2 lg:py-3"
                onClick={() => setNavbar(!navbar)}
              >
                Home
              </a>
            </li>
            <li className="w-full hover:border-l-4 hover:pl-2 border-gray-100/20 mb-3 ">
              <a
                href="#sectionAbout"
                className="flex py-2 lg:py-3"
                onClick={() => setNavbar(!navbar)}
              >
                {texts.navbarAbout}
              </a>
            </li>
            <li className="lg:hidden w-full hover:border-l-4 hover:pl-2 border-gray-100/20 mb-3 ">
              <a
                href="#sectionSkills"
                className="flex py-2 lg:py-3"
                onClick={() => setNavbar(!navbar)}
              >
                {texts.navbarSkills}
              </a>
            </li>
            <li className="w-full hover:border-l-4 hover:pl-2 border-gray-100/20 mb-3 ">
              <a
                href="#sectionWork"
                className="flex py-2 lg:py-3"
                onClick={() => setNavbar(!navbar)}
              >
                {texts.navbarWork}
              </a>
            </li>
            <li className="w-full hover:border-l-4 hover:pl-2 border-gray-100/20 mb-10">
              <a
                href="#sectionContact"
                className="flex py-2 lg:py-3"
                onClick={() => setNavbar(!navbar)}
              >
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
              <span className="uppercase ml-1 -tracking-wider">{language}</span>
              <img
                className="hidden shadow-lg border shadow-gray-200/50"
                src={cargarImagen(`./${language}.png`)}
                //style={{ width: `${item.width}` }}
                alt="English"
              />
              <select
                className="Bbg-red-300 absolute top-0 left-2 px-4 appearance-none bg-transparent text-transparent focus:text-transparent focus:outline-none hover:cursor-pointer"
                onChange={handleLanguage}
              >
                <option value="en">English</option>
                <option value="fr">Frances</option>
                <option value="it">Italiano</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>

          <div className="Xbg-red-800 w-48 h-48 -mx-4 -rotate-90 flex flex-col justify-between">
            <h4 className=" fam-logo">
              <a href="#footer" className="">
                crls code
              </a>
            </h4>
            <div className="2xl:hidden w-14 Xbg-red-400 p-4 cursor-pointer -ml-4">
              <span
                className="flex text-white active:bg-none active:bg-transparent focus:outline-non"
                onClick={() => setNavbar(!navbar)}
              >
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
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
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
