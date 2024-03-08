import React from "react";
//import { useAppContext } from "../context/AppProvider";
//import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  //const { texts } = useAppContext();

  return (
    <div className="h-full p-5 sm:px-10 XXmd:w-[1100px] text-gray-400 ">
      <div className="flex flex-row mb-10">
        <div className="w-1/2 lg:w-1/4 lg:text-lg tracking-widest ">
          <h1 className="w-32 fam-logo leading-4 md:leading-6">CRLS CODE</h1>
        </div>

        <div className="w-1/2 lg:w-3/4 text-xs md:text-base flex flex-col lg:flex-row justify-between lg:items-center text-end md:text-start">
          <h4 className="mb-5 lg:mb-0">
            FULLSTACK DEVELOPER
            <br /> FOLIO /{" "}
            <span className="font-numero font-light">2021 - 2024</span>
          </h4>

          <h4 className="mb-5 lg:mb-0">
            AVAILABLE FOR FREELANCE
            <br /> WORK FROM JULY{" "}
            <span className="font-numero font-light">2024</span>
          </h4>
          <div className="hover:-mb-1">
            <a
              href="#sectionContact"
              className="py-3 px-10 md:text-lg tracking-wider border rounded-full  hover:text-white hover:font-semibold"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/** MOVIL */}
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

      {/** DESKTOP - MD*/}
      <div className="hidden md:inline-block w-full mb-10">
        <div
          className="FFfont-poppins font-bold 
          md:text-[110px] lg:text-[150px] xl:text-[200px] 
          md:leading-[100px] lg:leading-[150px] xl:leading-[190px] 2xl:leading-[230px] tracking-[-0.15em]"
          style={{ fontFamily: "sans-serif" }}
        >
          <div className="flex flex-row xl:mb-5 2xl:mb-10">
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

          <div className="flex flex-row justify-between text-[160px] lg:text-[210px] xl:text-[310px]">
            <span>FRONT</span>
            <span className="text-cyan-600">-</span>
            <span>&</span>
          </div>

          <div className="flex flex-row justify-between text-[150px] lg:text-[210px] xl:text-[270px] ">
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
