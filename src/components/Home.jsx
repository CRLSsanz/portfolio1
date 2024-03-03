import React from "react";
import { useAppContext } from "../context/AppProvider";
import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  const { texts } = useAppContext();

  return (
    <div
      className="h-full px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56
     text-gray-100"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between">
        <div className="-mt-20 lg:mt-0">
          <h1 className="hidden mb-5">{texts.homeHello} </h1>
          <div className="font-semibold mb-5">
            <h1 className="text-5xl tracking-wider mb-10 md:mb-5">
              Carlos Sanchez
            </h1>
            <h1 className="text-3xl md:text-7xl md:font-extrabold text-cyan-500 tracking-wider">
              {texts.homeTitle}
            </h1>
          </div>
          <p className="mb-10 md:w-96 md:text-justify">{texts.homeText}</p>
        </div>

        <div className="flex justify-end opacity-30 md:opacity-80 bg-red-500XX">
          <img
            src={foto}
            alt=""
            srcset=""
            className="w-60 md:w-[350px] lg:w-[450px]"
          />
        </div>
      </div>

      <div className="flex md:justify-center py-5 xl:py-10">
        <a
          href="#section4"
          className="flex md:hidden whitespace-nowrap items-center justify-center p-0.5 overflow-hidden font-medium rounded-tr-lg rounded-bl-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <span class="px-10 py-3 transition-all ease-in duration-75 bg-[#151515] rounded-md group-hover:bg-opacity-0">
            {texts.homeButton}
          </span>
        </a>

        <a
          href="#section4"
          class="hidden md:inline-flex whitespace-nowrap relative items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 mr-5"
        >
          <span class="relative px-20 py-3 transition-all ease-in duration-75 bg-[#151515] rounded-md group-hover:bg-opacity-0">
            {texts.homeButton}
          </span>
        </a>
        <a
          href="#section5"
          class="hidden md:inline-flex whitespace-nowrap relative items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <span class="relative px-20 py-3 transition-all ease-in duration-75 bg-[#151515] rounded-md group-hover:bg-opacity-0">
            Contactame
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
