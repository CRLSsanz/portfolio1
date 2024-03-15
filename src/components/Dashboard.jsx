import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";

const Dashboard = () => {
  const [navbar, setNavbar] = useState(false);
  const { language, handleLanguage } = useAppContext();

  return (
    <div className="Xw-16 lg:w-[285px] h-full">
      <div className="h-[350px] md:h-[400px] flex flex-col justify-between">
        <div>
          <div className="hidden text-center text-2xl font-semibold Xpy-2 h-16 pt-4">
            CS.
          </div>
          <div className="Xbg-blue-300 w-12 h-12 md:w-16 md:h-16 rotate-90 lg:rotate-0 flex items-center">
            <div className="flex flex-row h-full text-gray-200 text-sm md:text-base">
              <a
                href="#sectionAbout"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center px-4 md:px-6 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                About
              </a>

              <a
                href="#sectionSkills"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                Skill
              </a>

              <a
                href="#sectionWork"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                Proyect
              </a>

              <a
                href="#sectionContact"
                onClick={() => setNavbar(!navbar)}
                className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="Xbg-blue-300 relative flex flex-col items-center justify-center">
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
          <span className="uppercase text-sm">{language}</span>
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
    </div>
  );
};

export default Dashboard;
