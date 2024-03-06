import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const skills = [
  { name: "html", width: "40px" },
  { name: "vue", width: "50px" },
  { name: "css", width: "50px" },
  { name: "react", width: "50px" },
  { name: "javascript", width: "50px" },
  { name: "nodejs", width: "50px" },
  { name: "github", width: "50px" },
  { name: "git", width: "50px" },
  { name: "mongodb", width: "50px" },
  { name: "mysql", width: "50px" },
  { name: "tailwind", width: "50px" },
  { name: "bootstrap", width: "50px" },
];

const Skills = () => {
  const { texts } = useAppContext();
  return (
    <div className="px-5 md:px-10 lg:pt-1">
      <h1 className="text-3xl mb-5 text-white">{texts.skillTitle}</h1>
      <p className="text-gray-200 mb-5">
        Estas son algunas de las tecnologias y habilidades aprendidas a lo largo
        de mi carrera
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="pb-2 pt-3 rounded bg-gray-100 text-gray-600 flex flex-col justify-between items-center active:bg-cyan-600 shadow-lg shadow-black/80"
          >
            <img
              className=""
              src={cargarImagen(`./${item.name}.png`)}
              style={{ width: `${item.width}` }}
              alt={item.name}
            />
            <h1 className="uppercase text-sm mt-3">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
