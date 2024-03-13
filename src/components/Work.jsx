import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Work = () => {
  const { texts } = useAppContext();
  const card = [
    {
      id: "01",
      image: "work1.jpg",
      title: texts.workItem1,
      skills: "Javascript - jQuery - Bootstrap - Php - mySql",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",
      link: "Leer màs",
      view: texts.workView,
    },
    {
      id: "02",
      image: "work2.jpg",
      title: texts.workItem2,
      skills: "Html - Css - Theme",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",
      link: "Leer màs",
      view: texts.workView,
    },
    {
      id: "03",
      image: "work4.jpg",
      title: texts.workItem3,
      skills: "Html - Bootstrap",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",
      link: "Leer màs",
      view: texts.workView,
    },
    {
      id: "04",
      image: "work6.jpg",
      title: texts.workItem4,
      skills:
        "React - React Router - Tailwind - Chart Js - Fetch - Axios - Node.js",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas quod exercitationem, consequatur totam labore distinctio hic vel fugiat id!",
      link: "Leer màs",
      view: texts.workView,
    },
  ];

  return (
    <div className="px-5 md:px-10 overflow-hidden">
      <div className="flex justify-center items-end mb-5">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-3xl xl:text-4xl text-white dark:text-gray-900"
        >
          {texts.workTitle}
        </h1>
        <div className="w-full h-3 border-t border-gray-300/50 ml-5"> </div>
      </div>
      <p className=" text-gray-300 dark:text-gray-500 mb-5">{texts.workText}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
        {/** CARD WORD */}
        {card.map((item, index) => (
          <div key={index} className="Xbg-red-400">
            <div className="pt-10 px-6 md:px-8 bg-gray-500/10 shadow-md shadow-black/30 rounded-lg overflow-hidden">
              <img
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="lg:hidden w-full md:h-40 lg:h-60 -mb-2 rounded "
                src={cargarImagen(`./${item.image}`)}
                //style={{ width: "200px" }}
                alt={item.title}
              />
              <img
                className="hidden lg:block w-full md:h-40 lg:h-60 -mb-2 hover:rotate-3 rounded hover:scale-105 transform transition-all duration-5000"
                src={cargarImagen(`./${item.image}`)}
                //style={{ width: "200px" }}
                alt={item.title}
              />
            </div>
            <div className="relative mt-5 px-1 mb-5">
              <div className="flex justify-between items-end mb-2">
                <h2 className="dark:text-gray-700 text-xl font-semibold whitespace-nowrap">
                  {item.title}
                </h2>
                <div className="w-full h-3 border-t border-gray-500/30 mx-3">
                  {" "}
                </div>
                <h4 className="text-gray-400">{item.view}</h4>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-cyan-500 mb-2"
              >
                {item.skills}
              </div>
              <p className="pb-7 text-gray-400 dark:text-gray-500">
                {item.text}
              </p>
              <span
                data-aos="fade-left"
                data-aos-duration="3000"
                className="absolute bottom-0 left-1 text-cyan-500 text-sm cursor-pointer border-b border-cyan-500/40"
              >
                {item.link}
              </span>
            </div>
          </div>
        ))}

        <div className="hidden md:inline-block shadow-md shadow-black/90">
          <img
            className="w-full"
            src={cargarImagen(`./work3.jpg`)}
            //style={{ width: "200px" }}
            alt="work3"
          />
        </div>

        <div className="hidden shadow-md shadow-black/90">
          <img
            className="w-full"
            src={cargarImagen(`./work5.jpg`)}
            //style={{ width: "200px" }}
            alt="work5"
          />
        </div>

        <div className="hidden bg-gray-100 text-gray-700 shadow-md shadow-black/90 rounded-br-3xl rounded-tl-3xl">
          <img
            className="w-full rounded-tl-3xl"
            src={cargarImagen(`./work6.jpg`)}
            //style={{ width: "200px" }}
            alt="work6"
          />
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <h4>{texts.workItem4}</h4>
              <h4>{texts.workView}</h4>
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
