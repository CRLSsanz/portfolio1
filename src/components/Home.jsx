import React from "react";
//import { useAppContext } from "../context/AppProvider";
//import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  //const { texts } = useAppContext();

  return (
    <div className="h-full p-5 sm:px-10 XXmd:w-[1100px] text-gray-400 dark:text-gray-500 ">
      <div className="w-full lg:max-w-[1300px] flex flex-row mb-5 mx-auto">
        <div className="w-1/2 lg:w-1/4 lg:text-base tracking-widest ">
          <h1 className="w-32 fam-logo leading-4 md:leading-6">CRLS CODE</h1>
        </div>

        <div className="w-1/2 lg:w-3/4 text-xs md:text-sm flex flex-col lg:flex-row justify-between lg:items-center text-end md:text-start">
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
          <div className="z-50 flex justify-end md:justify-start">
            <a
              href="#sectionContact"
              className="py-1 px-8 md:text-lg tracking-wider border border-gray-400 rounded-full hover:shadow-md hover:shadow-white/50 hover:dark:shadow-black/30 cursor-pointer"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/** MOVIL */}
      <div className="mr-5 px-2 sm:py-5 md:hidden tracking-[-0.3em] font-bold text-[65px] flex flex-row justify-between">
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

      <div className="md:hidden Xbg-red-500 w-[calc(100vw-25px)] h-[calc(100vw-25px)] flex flex-col justify-center rotate-90 -mx-2">
        <div
          className="Xbg-red-200 font-bold text-[130px] whitespace-nowrap tracking-[-0.12em] fam-home h-full grid grid-rows-3"
          style={{ fontFamily: "sans-serif" }}
        >
          <div className="relative Bbg-cyan-400/30 whitespace-nowrap">
            <div className="absolute -top-0.5 Xtext-7xl leading-none">
              ST<span className="text-cyan-600">A</span>CK
            </div>
          </div>

          <div className="relative Xbg-green-400 whitespace-nowrap">
            <div className="absolute Xbg-red-300 bottom-0 flex flex-col h-full items-center justify-center Xtext-[220px]">
              <div>
                <span className="Xtext-cyan-600 mr-1">F</span>RO
                <span className="text-gray-500/90">NT</span>
                <span className="Xtext-gray-400/80 text-[120px] ml-10">&</span>
              </div>
            </div>
          </div>

          <div className="relative Bbg-cyan-400/50 whitespace-nowrap">
            <div className="absolute Bbg-yellow-400 -bottom-0.5 Xtext-7xl leading-none">
              <span className="text-gray-400/80">B</span>
              ACK<span className="Xborder-t-2 text-cyan-600">-</span>EN
              <span className="">D</span>
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
      <div className="hidden md:max-w-[730px] lg:max-w-[1240px] xl:max-w-[1300px] md:flex mx-auto">
        <div className="w-full h-full text-gray-500 ">
          <div
            className="fam-home md:text-[220px] lg:text-[330px] xl:text-[370px] 
          leading-none h-[700px] grid grid-rows-3"
            //style={{ fontFamily: "sans-serif" }}
          >
            <div className="relative Xbg-blue-200">
              <div className="absolute w-full top-0 tracking-[-0.05em] flex flex-row justify-between whitespace-nowrap xl:pl-36">
                <span>FRONT</span>
                <span className="w-full flex my-auto">
                  <span className="md:h-6 lg:h-8 xl:h-10 w-full bg-gray-500"></span>
                </span>
                <span className="-ml-5">END</span>
              </div>
            </div>

            <div className="xl:-ml-5 xl:w-52 xl:h-52 Xbg-red-500 -tracking-[0.05em] flex flex-row md:justify-center lg:justify-start xl:justify-center lg:pt-5 xl:pt-0 lg:pl-1.5 xl:pl-0 lg:text-[180px] xl:text-[200px] xl:-rotate-90">
              <span>D</span>
              <span>E</span>
              <span>V</span>
              <span className="Xtext-purple-700">E</span>
              <span>L</span>
              <span>O</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
            </div>

            <div className="relative Xbg-orange-300">
              <div className="absolute bottom-0 tracking-[-0.05em] w-full flex flex-row justify-between whitespace-nowrap xl:pl-36">
                <span>
                  <span className="tracking-[-0.06em]">
                    B<span className="text-cyan-600">A</span>
                    <span>CK</span>
                  </span>
                  -<span className="-ml-2">END</span>
                </span>

                <span className="tracking-normal Xbg-yellow-200 text-xl">
                  <div> </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
