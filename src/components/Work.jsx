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
      skills: "React - Tailwind - Chart Js - Fetch - Axios - Node.js",
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
        <div className="w-full h-3 border-t border-gray-300 dark:border-gray-500 ml-3"></div>
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
                <div className="w-full h-3 border-t border-gray-500/80 mx-3">
                  {" "}
                </div>
                <div className="flex flex-row gap-2 text-gray-400 dark:text-gray-500">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1.5rem"
                      width="1.5rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <h4 className="hidden text-gray-400">{item.view}</h4>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-sm text-cyan-300 dark:text-cyan-500 mb-2"
              >
                {item.skills}
              </div>
              <p className="pb-5 text-gray-400 dark:text-gray-500">
                {item.text}
              </p>
              <span
                data-aos="fade-left"
                data-aos-duration="3000"
                className="absolute bottom-0 left-1 text-cyan-300 dark:text-cyan-500 text-sm cursor-pointer hover:border-b hover:border-cyan-500"
              >
                {item.link + " >"}
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
