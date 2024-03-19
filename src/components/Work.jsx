import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const Work = () => {
  const { texts } = useAppContext();
  const card = [
    {
      id: "01",
      image: "w-estructuras.jpg",
      title: "Estructuras MCH",
      skills: "Html - Css - Theme - jQuery",
      text: texts.workStructureMCH,
      link: "Leer màs",
      view: texts.workView,
    },
    {
      id: "02",
      image: "w-marketing.jpg",
      title: "Marketing Online",
      skills: "Html - Css - Bootstrap - Php - MySql",
      text: texts.workMarketingOnline,
      web: "https://www.google.com.",
    },
    {
      id: "03",
      image: "w-fastfood.jpg",
      title: "Fast Food J&M",
      skills: "React - Tailwind - ChartJS - Fetch - mySql",
      text: texts.workFastFood,
      web: "https://www.google.com.",
    },
    {
      id: "04",
      image: "w-crypto.jpg",
      title: "Crypto.app",
      skills: "Bootstrap - React - Axios - Json - Api.crypto",
      text: texts.workCrypto,
      web: "https://www.google.com.",
    },
    {
      id: "05",
      image: "w-corsi.jpg",
      title: "Corsi al Minuto",
      skills: "React - Nextjs - Tailwind",
      text: texts.workCorsi,
      web: "https://corsialminuto.it/fullstack-web-developer",
    },
    {
      id: "06",
      image: "w-apeteat.jpg",
      title: "Apeteat",
      skills:
        "MongoBD - Express - Node JS - React - Reducer - Axios - Tailwind - CSS",
      text: texts.workApeteat,
      web: "https://www.apeteat.com/",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="px-2 sm:px-5 flex justify-center items-end mb-5">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-3xl xl:text-4xl text-white dark:text-gray-900"
        >
          {texts.workTitle}
        </h1>
        <div className="w-full h-3 border-t border-gray-500/80 ml-3"></div>
      </div>
      <p className="px-2 sm:px-5 flex text-gray-300 dark:text-gray-500 mb-5">
        {texts.workText}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-8 sm:px-5">
        {/** CARD WORK */}
        {card.map((item, index) => (
          <div key={index} className="pr-2 sm:pr-0 Xbg-red-400">
            <div className="pt-10 px-6 -ml-4 sm:ml-0 bg-gray-500/10 shadow-md shadow-black/30 rounded-lg overflow-hidden">
              <img
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="lg:hidden w-full md:h-52 -mb-2 rounded "
                src={cargarImagen(`./${item.image}`)}
                //style={{ width: "200px" }}
                alt={item.title}
              />
              <img
                className="hidden lg:block w-full lg:h-40 xl:h-52 -mb-2 hover:rotate-3 rounded hover:scale-105 transform transition-all duration-5000"
                src={cargarImagen(`./${item.image}`)}
                //style={{ width: "200px" }}
                alt={item.title}
              />
            </div>
            <div className="pl-2 sm:pl-0 relative mt-5 mb-14 md:mb-5">
              <div className="flex justify-between items-end mb-2">
                <h2 className="dark:text-gray-700 text-xl font-semibold whitespace-nowrap">
                  {item.title}
                </h2>
                <div className="w-full h-3 border-t border-gray-500/80 mx-2">
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
                className="absolute bottom-0 left-2 sm:left-0 text-cyan-300 dark:text-cyan-500 text-sm cursor-pointer hover:border-b hover:border-cyan-500"
              >
                Leer màs {" > "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
