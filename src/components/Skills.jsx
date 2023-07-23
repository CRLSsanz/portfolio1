import React from "react";
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
  return (
    <div className="px-4 mb-16 md:px-48 lg:px-80">
      <h1 className="text-2xl py-2 mb-3 text-cyan-500">Skills</h1>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="p-2 pt-3 rounded bg-white text-gray-700 flex flex-col justify-between items-center active:bg-cyan-600 "
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
