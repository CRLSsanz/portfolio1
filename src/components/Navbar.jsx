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
        className={`fixed z-50 text-gray-400 lg:font-semibold bg-gradient-to-r from-black via-black to-black/0 bBg-[#0C87A7ee] top-0 w-[calc(100%-60px)] sm:w-[400px] h-full lg:h-[calc(100%-56px)] transform transition-all duration-500
        ${
          navbar
            ? " opacity-100 pointer-events-auto left-0"
            : "opacity-0 pointer-events-none -left-80"
        }`}
      >
        <div className="p-8 w-[200px] h-full flex flex-col justify-between bg-black">
          <div>
            <li className="mb-5">
              <span className="uppercase text-xs lg:text-base tracking-[0.2em] ">
                {texts.navbarTitle}
              </span>
            </li>
            <br />
            <li className="w-full py-3 lg:py-5 hover:font-bold ">
              <a href="#section1" onClick={() => setNavbar(!navbar)}>
                Home
              </a>
            </li>
            <li className="w-full border-t border-gray-950 py-3 lg:py-5 hover:font-bold ">
              <a href="#section2" onClick={() => setNavbar(!navbar)}>
                {texts.navbarAbout}
              </a>
            </li>
            <li className="w-full border-t border-gray-950 py-3 lg:py-5 hover:font-bold ">
              <a href="#section3" onClick={() => setNavbar(!navbar)}>
                {texts.navbarSkills}
              </a>
            </li>
            <li className="w-full border-t border-gray-950 py-3 lg:py-5 hover:font-bold ">
              <a href="#section4" onClick={() => setNavbar(!navbar)}>
                {texts.navbarWork}
              </a>
            </li>
            <li className="w-full border-t border-gray-950 py-3 lg:py-5 hover:font-bold ">
              <a href="#section5" onClick={() => setNavbar(!navbar)}>
                {texts.navbarContact}
              </a>
            </li>
          </div>

          <div>
            <div className="relative mb-5">
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

            <li className="hidden">
              <a href="http://www.google.com" className="">
                contact@crlscode.com
              </a>
            </li>
            <li className="hidden">
              <a href="http://www.google.com" className="">
                + Downloader my resumen
              </a>
            </li>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default Navbar;
