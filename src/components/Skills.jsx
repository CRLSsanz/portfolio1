import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const skills = [
  { name: "html", width: "40px" },
  { name: "css", width: "60px" },
  { name: "javascript", width: "40px" },
  { name: "react", width: "50px" },
  { name: "vue", width: "45px" },
  { name: "nodejs", width: "50px" },
  { name: "mongodb", width: "50px" },
  { name: "mysql", width: "50px" },
  { name: "git", width: "50px" },
  { name: "github", width: "50px" },
  { name: "tailwind", width: "55px" },
  { name: "bootstrap", width: "50px" },
  { name: "vscode", width: "45px" },
  { name: "photoS", width: "60px" },
  { name: "cDraw", width: "45px" },
  { name: "responsive", width: "60px" },
];

const Skills = () => {
  const { texts } = useAppContext();
  return (
    <div className="px-5 md:px-10 xl:pr-0 lg:pt-1">
      <h1 className="text-3xl mb-5 text-white">{texts.skillTitle}</h1>
      <p className="text-gray-300 mb-5">{texts.skillText}</p>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="rounded bg-gray-500/10 text-gray-300 flex flex-col justify-between items-center hover:bg-gray-600 hover:cursor-pointer active:bg-cyan-600 shadow shadow-gray-950/50"
          >
            <div className="h-20 flex items-center xl:hidden">
              <img
                className=""
                src={cargarImagen(`./${item.name}.png`)}
                style={{ width: `${item.width}` }}
                alt={item.name}
              />
            </div>
            <h1 className="capitalize pb-3 xl:pt-3">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
