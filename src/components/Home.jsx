import React from "react";
//import { useAppContext } from "../context/AppProvider";
//import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  //const { texts } = useAppContext();

  return (
    <div className="h-full p-5 sm:px-10 XXmd:w-[1100px] text-gray-400 ">
      <div className="flex flex-row mb-5">
        <div className="w-1/2 lg:w-1/4 lg:text-lg tracking-widest ">
          <h1 className="w-32 fam-logo leading-4 md:leading-6">CRLS CODE</h1>
        </div>

        <div className="w-1/2 lg:w-3/4 text-xs md:text-base flex flex-col lg:flex-row justify-between lg:items-center text-end md:text-start">
          <h4 className="mb-5 lg:mb-0">
            FULLSTACK DEVELOPER
            <br /> FOLIO /{" "}
            <span className="fam-number font-light">2021 - 2024</span>
          </h4>

          <h4 className="mb-5 lg:mb-0">
            AVAILABLE FOR FREELANCE
            <br /> WORK FROM JULY{" "}
            <span className="fam-number font-light">2024</span>
          </h4>
          <div className="flex justify-end md:justify-start  hover:-mb-1">
            <a
              href="#sectionContact"
              className="py-3 px-10 md:text-lg tracking-wider border border-gray-400 rounded-full  hover:text-white hover:font-semibold"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/** MOVIL */}
      <div className="mr-5 sm:py-5 md:hidden tracking-[-0.3em] font-bold text-[65px] flex flex-row justify-between">
        <span>D</span>
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>L</span>
        <span>O</span>
        <span>P</span>
        <span>E</span>
        <span>R</span>
      </div>

      <div className="-mt-4 md:hidden Xbg-red-500 w-[calc(100vw-10px)] h-[calc(100vw-10px)] flex flex-col justify-center rotate-90 -mx-5 pb-1">
        <div
          className="bbg-red-200 font-bold text-[140px] whitespace-nowrap tracking-[-0.12em] fam-home h-full grid grid-rows-3"
          style={{ fontFamily: "sans-serif" }}
        >
          <div className="relative Xbg-cyan-400/30 whitespace-nowrap">
            <div className="absolute -top-0.5 Xtext-7xl leading-none">
              ST<span className="text-cyan-600">A</span>CK
            </div>
          </div>

          <div className="relative Xbg-green-400 whitespace-nowrap">
            <div className="absolute Xbg-red-300 bottom-0 flex flex-col h-full items-center justify-center Xtext-[220px]">
              <div>
                <span className="Xtext-cyan-600 mr-1">F</span>RONT
                <span className="Xtext-gray-400/80 text-[120px] ml-10">&</span>
              </div>
            </div>
          </div>

          <div className="relative Xbg-cyan-400/50 whitespace-nowrap">
            <div className="absolute -bottom-0.5 Xtext-7xl leading-none">
              B<span className="">A</span>CK-E
              <span className="text-gray-400 -mr-5">N</span>D
            </div>
          </div>
        </div>
      </div>

      {/** MOVIL * /}
      <div className="sm:py-5 md:hidden font-bold text-6xl flex flex-row justify-between">
        <span>D</span>
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>L</span>
        <span>O</span>
        <span>P</span>
        <span>E</span>
        <span>R</span>
      </div>
      <div className="md:hidden h-[360px] sm:h-[550px] flex flex-col justify-end ">
        <div
          className="font-poppin font-bold w-full text-9xl leading-[110px]  rotate-90 sm:rotate-0 whitespace-nowrap tracking-[-0.12em]"
          style={{ fontFamily: "sans-serif" }}
        >
          <span className="hidden sm:block">
            FU<span className="text-cyan-600">L</span>L
            <br />
          </span>
          STACK <br />
          FRONT & <br /> B<span className="text-cyan-600">A</span>
          CK
          <span className="sm:hidden">-</span>
          <span className="hidden sm:block"> </span>
          END
        </div>
      </div> 
     */}

      {/** DESKTOP - MD*/}
      <div className="hidden md:inline-block text-gray-500 w-full mb-10">
        <div
          className="fam-home md:text-[350px] 
          leading-none tracking-[-0.02em]"
          //style={{ fontFamily: "sans-serif" }}
        >
          <div className="flex flex-row">
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span className="text-cyan-600">L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </div>

          <div className="flex flex-row justify-between">
            <span>FRONT</span>
            <span className="text-cyan-600">-</span>
            <span>END</span>
          </div>

          <div className="hidden Fflex flex-row justify-between text-[150px] lg:text-[210px] xl:text-[270px] ">
            <span> </span>
            <span className="">
              B<span className="text-cyan-600">A</span>
              <span>CK-END</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
