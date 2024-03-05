import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Work = () => {
  const { texts } = useAppContext();

  return (
    <div className="px-5 md:px-10">
      <h1 className="text-3xl xl:text-4xl mb-5 text-white">
        {texts.workTitle}
      </h1>
      <p className="text-sm text-gray-200 mb-5">{texts.workText} </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#1A2035] shadow-md shadow-gray-500 rounded-br-3xl rounded-tl-3xl">
          <img
            className="w-full rounded-tl-3xl"
            src={cargarImagen(`./work1.jpg`)}
            //style={{ width: "200px" }}
            alt="work1"
          />
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem1}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-500 flex flex-wrap">
              <h1 className="p-1 px-2 bg-white rounded mr-1 mb-1">
                Javascript
              </h1>
              <h1 className="p-1 px-2 bg-white rounded mr-1 mb-1">jQuery</h1>
              <h1 className="p-1 px-2 bg-white rounded mr-1 mb-1">Bootstrap</h1>
              <h1 className="p-1 px-2 bg-white rounded mr-1 mb-1">Php</h1>
              <h1 className="p-1 px-2 bg-white rounded mr-1 mb-1">mySql</h1>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-gray-700 shadow-md shadow-gray-500 rounded-br-3xl rounded-tl-3xl">
          <img
            className="w-full rounded-tl-3xl"
            src={cargarImagen(`./work2.jpg`)}
            //style={{ width: "200px" }}
            alt="work2"
          />
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem2}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-100 flex flex-wrap">
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1">Html</h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1">Css</h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1">Theme</h1>
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

        <div className="bg-[#1A2035] shadow-md shadow-gray-500 rounded-br-3xl rounded-tl-3xl">
          <img
            className="w-full rounded-tl-3xl"
            src={cargarImagen(`./work4.jpg`)}
            //style={{ width: "200px" }}
            alt="work4"
          />
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem3}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-500 flex flex-wrap">
              <h1 className="p-1 px-2 bg-white rounded mr-1">Html</h1>
              <h1 className="p-1 px-2 bg-white rounded mr-1">Bootstrap</h1>
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

        <div className="bg-gray-100 text-gray-700 shadow-md shadow-gray-500 rounded-br-3xl rounded-tl-3xl">
          <img
            className="w-full rounded-tl-3xl"
            src={cargarImagen(`./work6.jpg`)}
            //style={{ width: "200px" }}
            alt="work6"
          />
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <h1>{texts.workItem4}</h1>
              <h1>{texts.workView}</h1>
            </div>
            <div className="text-gray-100 flex flex-wrap">
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">React</h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">
                React Router
              </h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">
                Tailwind
              </h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">
                Chart Js
              </h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">Fetch</h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">Axios</h1>
              <h1 className="p-1 px-2 bg-gray-800 rounded mr-1 mb-1">
                Node.js
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
