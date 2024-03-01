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
        <div className="-mt-10 lg:mt-0">
          <h1 className="hidden mb-5">{texts.homeHello} </h1>
          <div className="font-semibold mb-5 ">
            <h1 className="text-5xl tracking-wider mb-5">Carlos Sanchez</h1>
            <h1 className="text-3xl md:text-7xl md:font-extrabold text-cyan-500 tracking-wider">
              {texts.homeTitle}
            </h1>
          </div>
          <p className="mb-10 lg:w-96 md:text-justify">{texts.homeText}</p>
        </div>

        <div className="flex justify-end opacity-30 md:opacity-80 bg-red-500XX">
          <img src={foto} alt="" srcset="" className="w-60 md:w-[450px]" />
        </div>
      </div>

      <div className="flex justify-center py-5 xl:py-10">
        <a
          href="#section4"
          className="flex justify-center w-full md:w-1/4 whitespace-nowrap py-2 tracking-wider rounded-tl-lg rounded-br-lg border border-r-4 border-l-4 text-cyan-400 border-cyan-500 mr-5"
        >
          {texts.homeButton}
        </a>
        <a
          href="#section5"
          className="hidden md:flex justify-center w-1/2 md:w-1/4 whitespace-nowrap py-2 tracking-wider rounded-tl-lg rounded-br-lg border border-r-4 border-l-4 text-cyan-400 border-cyan-500 "
        >
          Contactame
        </a>
      </div>
    </div>
  );
};

export default Home;
