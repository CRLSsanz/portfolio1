import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";

const Dashboard = () => {
  const [navbar, setNavbar] = useState(false);
  const { texts, language, handleLanguage, darkMode, toggleDarkMode } =
    useAppContext();
  return (
    <div className="Xbg-blue-300 lg:w-[300px] Xh-full">
      <div className="h-[500px] lg:h-full flex flex-col justify-between lg:justify-normal text-gray-200 dark:text-gray-700">
        <div className="lg:mb-5 lg:border-b lg:border-gray-500/30">
          <div className="hidden text-center text-2xl font-semibold Xpy-2 h-16 pt-4">
            CRLS CODE.
          </div>
          <div className="Xbg-blue-300 w-14 h-14 md:w-16 md:h-16 lg:h-full rotate-90 lg:rotate-0 flex items-center">
            <div className="flex flex-row lg:flex-col h-full text-sm md:text-base">
              <a
                href="#sectionAbout"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center justify-center lg:justify-start lg:pl-5 w-[90px] lg:w-[300px] lg:py-3 hover:bg-gray-400/20 hover:border-b-2 dark:hover:border-cyan-500 cursor-pointer"
              >
                {texts.navbarAbout}
              </a>

              <a
                href="#sectionSkills"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center justify-center lg:justify-start lg:pl-5 w-[90px] lg:w-[300px] lg:py-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                {texts.navbarSkills}
              </a>

              <a
                href="#sectionWork"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center justify-center lg:justify-start lg:pl-5 w-[90px] lg:w-[300px] lg:py-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                {texts.navbarWork}
              </a>

              <a
                href="#sectionContact"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center justify-center lg:justify-start lg:pl-5 w-[90px] lg:w-[300px] lg:py-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                {texts.navbarContact}
              </a>
            </div>
          </div>
        </div>

        {/** MODO DARK y LANGUAGE  */}
        <div className="lg:flex lg:flex-row lg:justify-between lg:border-b lg:border-gray-500/30 lg:px-5 lg:pb-5 lg:mb-5">
          <div className="Xbg-blue-300 relative flex flex-col lg:flex-row-reverse items-center justify-center mb-6 lg:mb-0">
            <span className="lg:hidden uppercase text-sm">MD</span>
            <span className="hidden lg:block uppercase text-sm lg:ml-2">
              MODE
            </span>
            <div
              className="p-2 lg:p-0 pb-5 lg:pb-0 active:bg-none active:bg-transparent active:animate-ping focus:outline-none cursor-pointer -mt-[52px] lg:-mt-0"
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
          </div>

          <div className="Xbg-blue-300 relative flex flex-col lg:flex-row-reverse items-center justify-center">
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
            <span className="uppercase text-sm lg:mr-2">{language}</span>
            <select
              className="Bbg-red-300 absolute top-0 w-14 py-2 right-1 appearance-none bg-transparent text-transparent focus:text-transparent focus:outline-none hover:cursor-pointer"
              onChange={handleLanguage}
            >
              <option value="en">English</option>
              <option value="fr">Frances</option>
              <option value="it">Italiano</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>

        {/** SKILL EN DASHBOARD */}
        <div className="hidden lg:block lg:pl-5">
          <h2
            data-aos="zoom-in-left"
            data-aos-duration="500"
            className="relative text-lg text-white font-medium dark:text-gray-700 mb-3"
          >
            <span className="absolute rounded p-1 text-white bg-cyan-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <span className="pl-9">Use a work</span>
          </h2>
          <div className="text-sm flex flex-wrap gap-2 mb-5">
            <h4 className="abSkill">JavaScript</h4>
            <h4 className="abSkill">TypeScript</h4>
            <h4 className="abSkill">Html</h4>
            <h4 className="abSkill">Css</h4>
            <h4 className="abSkill">React</h4>
            <h4 className="abSkill">Vue</h4>
            <h4 className="abSkill">Next.Js</h4>
            <h4 className="abSkill">Bootstrap</h4>
            <h4 className="abSkill">Tailwind</h4>
            <h4 className="abSkill">Node.Js</h4>
            <h4 className="abSkill">Express</h4>
            <h4 className="abSkill">MongoDB</h4>
            <h4 className="abSkill">MySQL</h4>
            <h4 className="abSkill">Git</h4>
            <h4 className="abSkill">GitHub</h4>
          </div>

          <h2
            data-aos="zoom-in-left"
            data-aos-duration="500"
            className="relative text-lg text-white font-medium dark:text-gray-700 mb-3"
          >
            <span className="absolute rounded p-1 text-white bg-cyan-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </span>
            <span className="pl-9">Use for fun</span>
          </h2>
          <div className="text-sm flex flex-wrap gap-2">
            <h4 className="abSkill">Figma</h4>
            <h4 className="abSkill">Python</h4>
            <h4 className="abSkill">Postgres</h4>
            <h4 className="abSkill">AWS</h4>
            <h4 className="abSkill">PhotoShop</h4>
            <h4 className="abSkill">CorelDraw</h4>
            <h4 className="abSkill">Responsive</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
