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
    <div className="px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56 mb-20">
      <h1 className=" text-3xl lg:text-4xl mb-10 text-cyan-500 font-bold">
        {texts.skillTitle}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {skills.map((item, index) => (
          <div
            key={index}
            className="pb-2 pt-3 xl:py-5 rounded bg-white text-gray-700 flex flex-col justify-between items-center active:bg-cyan-600 shadow-lg shadow-gray-300/60"
          >
            <img
              className=""
              src={cargarImagen(`./${item.name}.png`)}
              style={{ width: `${item.width}` }}
              alt={item.name}
            />
            <h1 className="uppercase text-sm xl:text-base mt-3">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
