import React from "react";
const cargarImagen = require.context("../images", true);

const Work = () => {
  return (
    <div className="px-4 mb-16 md:px-24 xl:px-48">
      <h1 className="text-2xl py-2 font-semibold text-white">Work</h1>
      <p className="text-sm text-gray-200 mb-3">
        A small gallery of recent projects chosen by me. I've done them all
        together with amazing people. It's only a drop in the ocean compared to
        the entire list. Interested to see some more? Visit my work page.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work1.jpg`)}
            //style={{ width: "200px" }}
            alt="work1"
          />
        </div>
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work2.jpg`)}
            //style={{ width: "200px" }}
            alt="work2"
          />
        </div>
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work3.jpg`)}
            //style={{ width: "200px" }}
            alt="work3"
          />
        </div>
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work4.jpg`)}
            //style={{ width: "200px" }}
            alt="work4"
          />
        </div>
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work5.jpg`)}
            //style={{ width: "200px" }}
            alt="work5"
          />
        </div>
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work6.jpg`)}
            //style={{ width: "200px" }}
            alt="work6"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
