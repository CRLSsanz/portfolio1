import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const skills = [
  { name: "html", width: "30px" },
  { name: "css", width: "50px" },
  { name: "javascript", width: "35px" },
  { name: "react", width: "45px" },
  { name: "nextjs", width: "50px" },
  { name: "vue", width: "40px" },
  { name: "nodejs", width: "40px" },
  { name: "mongodb", width: "40px" },
  { name: "mysql", width: "40px" },
  { name: "php", width: "40px" },
  { name: "git", width: "40px" },
  { name: "github", width: "40px" },
  { name: "tailwind", width: "40px" },
  { name: "bootstrap", width: "40px" },
  { name: "vscode", width: "35px" },
  { name: "photoS", width: "50px" },
  { name: "cDraw", width: "35px" },
];

const Skills = () => {
  const { texts } = useAppContext();
  return (
    <div className="px-2 sm:px-5 lg:pt-1 overflow-hidden">
      <div className="flex items-end mb-5">
        <h1
          data-aos="fade-left"
          className="text-3xl whitespace-nowrap text-white dark:text-gray-700"
        >
          {texts.skillTitle}
        </h1>
        <div className="w-full h-3 border-t border-gray-500/80 ml-3"> </div>
      </div>
      <p className="text-gray-300 dark:text-gray-500 mb-5">{texts.skillText}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pb-10">
        {skills.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="rounded border border-gray-800 dark:border-gray-300 flex flex-row items-center hover:bg-gray-500/10 hover:font-semibold hover:cursor-pointer active:bg-cyan-600"
          >
            <div className="h-16 w-14 flex items-center justify-center ">
              <img
                className=""
                src={cargarImagen(`./${item.name}.png`)}
                style={{ width: `${item.width}` }}
                alt={item.name}
              />
            </div>
            <h2 className="capitalize text-white hover:text-[#76DAFF] dark:text-gray-600 ">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
