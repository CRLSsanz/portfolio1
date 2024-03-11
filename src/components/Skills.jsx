import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const skills = [
  { name: "html", width: "30px" },
  { name: "css", width: "50px" },
  { name: "javascript", width: "35px" },
  { name: "react", width: "45px" },
  { name: "vue", width: "40px" },
  { name: "nodejs", width: "40px" },
  { name: "mongodb", width: "40px" },
  { name: "mysql", width: "40px" },
  { name: "git", width: "40px" },
  { name: "github", width: "40px" },
  { name: "tailwind", width: "40px" },
  { name: "bootstrap", width: "40px" },
  { name: "vscode", width: "35px" },
  { name: "photoS", width: "50px" },
  { name: "cDraw", width: "35px" },
  { name: "responsive", width: "40px" },
];

const Skills = () => {
  const { texts } = useAppContext();
  return (
    <div className="px-5 md:px-10 xl:pr-0 lg:pt-1">
      <h1 className="text-3xl mb-5 text-white dark:text-gray-900">
        {texts.skillTitle}
      </h1>
      <p className="text-gray-300 dark:text-gray-500 mb-5">{texts.skillText}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="rounded bg-gray-500/10 text-gray-300 dark:text-gray-600 flex flex-row items-center hover:bg-gray-600 dark:hover:text-gray-100 hover:cursor-pointer active:bg-cyan-600 active:dark:text-gray-100 shadow shadow-gray-950/50"
          >
            <div className="h-16 2xl:h-14 w-14 flex items-center justify-center lg:hidden 2xl:flex">
              <img
                className=""
                src={cargarImagen(`./${item.name}.png`)}
                style={{ width: `${item.width}` }}
                alt={item.name}
              />
            </div>
            <h1 className="capitalize lg:py-2 lg:px-5 2xl:p-0">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
