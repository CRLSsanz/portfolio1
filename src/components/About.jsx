import React from "react";

const About = () => {
  return (
    <div className="px-4 mb-4 text-sm text-gray-300 md:px-24 xl:px-48">
      <h1 className="text-2xl py-2 font-semibold text-cyan-500">About</h1>
      <div className="p-4 py-8 rounded-md bg-[#2d808f85] mb-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:text-center ">
        <div>
          <h1 className="uppercase text-white">Front-end</h1>
          <p className="mb-6">
            Como desarrollador de JavaScript, tengo experiencia en técnicas
            HTML5 y CSS3 trabajando con marcos de JavaScript jQuery o MVC
          </p>
        </div>
        <div>
          <h1 className="uppercase text-white">Back-end</h1>
          <p className="mb-6">
            Usando marcos php como Laravel o creando código personalizado, he
            escrito servicios que admiten miles de usuarios, incluidas API REST,
            aplicaciones de aprendizaje electrónico y más{" "}
          </p>
        </div>
        <div>
          <h1 className="uppercase text-white">Consultor</h1>
          <p className="mb-6">
            Además de brindar servicios de desarrollo, también puedo ayudarlo a
            decidir sobre hojas de ruta estratégicas a través de servicios de
            consultoría
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
