import React from "react";
//import { useAppContext } from "../context/AppProvider";
//import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  //const { texts } = useAppContext();

  return (
    <div
      className="px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56
     text-gray-400"
    >
      <div className="h-full flex flex-row mb-20">
        <div className="w-1/2 md:w-1/4 text-lg md:text-2xl font-semibold tracking-[0.2em] leading-5">
          CRLS <br /> SANZ
        </div>

        <div className="w-1/2 md:w-3/4 text-sm md:text-base flex flex-col md:flex-row justify-between">
          <h1 className="mb-5">
            FRONTEND DEVELOPER
            <br /> FOLIO / 2021 — 2023
          </h1>

          <h1 className="mb-5">
            AVAILABLE FOR FREELANCE
            <br /> WORK FROM MARCH 2023
          </h1>
          <div>
            <button className="py-2 px-10 md:text-xl border rounded-full ">
              CONTACT
            </button>
          </div>
        </div>
      </div>

      <div className="font-bold text-5xl pb-5 pl-6">DEVELOPER</div>
      <div
        className="font-poppin font-bold md:-mx-3 text-7xl leading-[80px] md:text-8xl md:leading-[80px] lg:text-[180px] lg:leading-[150px] rotate-90 md:rotate-0 Wwhitespace-nowrap"
        style={{ fontFamily: "sans-serif" }}
      >
        <span className="hidden">
          DEVE<span className="text-cyan-600">L</span>OPER
          <br />
        </span>
        FRONT--END <br /> B<span className="text-cyan-600">A</span>CK---END
      </div>

      {/**
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

{/**  *  /}
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
{/**  */}
    </div>
  );
};

export default Home;
