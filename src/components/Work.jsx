import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Work = () => {
  const { texts } = useAppContext();

  return (
    <div className="px-4 mb-16 md:px-24 xl:px-48">
      <h1 className="text-2xl py-2 font-semibold text-white">
        {texts.workTitle}
      </h1>
      <p className="text-sm text-gray-200 mb-3">{texts.workText} </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work1.jpg`)}
            //style={{ width: "200px" }}
            alt="work1"
          />
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem1}</h1>
              <h1>{texts.workView}</h1>{" "}
            </div>
            <div className="text-gray-400 flex flex-wrap gap-1 ">
              <h1 className="p-1 bg-white rounded mr-1">Javascript</h1>
              <h1 className="p-1 bg-white rounded mr-1">jQuery</h1>
              <h1 className="p-1 bg-white rounded mr-1">Bootstrap</h1>
              <h1 className="p-1 bg-white rounded mr-1">Php</h1>
              <h1 className="p-1 bg-white rounded mr-1">mySql</h1>
            </div>
          </div>
        </div>

        <div className="shadow-md shadow-gray-500">
          <img
            className="w-full"
            src={cargarImagen(`./work2.jpg`)}
            //style={{ width: "200px" }}
            alt="work2"
          />
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem2}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-400 flex flex-wrap gap-1 ">
              <h1 className="p-1 bg-white rounded mr-1">HTML</h1>
              <h1 className="p-1 bg-white rounded mr-1">CSS</h1>
              <h1 className="p-1 bg-white rounded mr-1">Theme</h1>
            </div>
          </div>
        </div>

        <div className="hidden shadow-md shadow-gray-500">
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
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem3}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-400 flex flex-wrap gap-1 ">
              <h1 className="p-1 bg-white rounded mr-1">HTML</h1>
              <h1 className="p-1 bg-white rounded mr-1">Bootstrap</h1>
            </div>
          </div>
        </div>

        <div className="hidden shadow-md shadow-gray-500">
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
          <div className="p-2">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem4}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-400 flex flex-wrap gap-1 ">
              <h1 className="p-1 bg-white rounded mr-1">React</h1>
              <h1 className="p-1 bg-white rounded mr-1">React Router</h1>
              <h1 className="p-1 bg-white rounded mr-1">Tailwind</h1>
              <h1 className="p-1 bg-white rounded mr-1">Chart Js</h1>
              <h1 className="p-1 bg-white rounded mr-1">Fetch</h1>
              <h1 className="p-1 bg-white rounded mr-1">Axios</h1>
              <h1 className="p-1 bg-white rounded mr-1">Node.js</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
