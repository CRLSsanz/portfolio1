import React from "react";
//import { useAppContext } from "../context/AppProvider";
//import foto from "../images/img-web-developer.png.webp";
//import foto from "https://www.click-academy.it/wp-content/uploads/2024/01/img-web-developer-sito-a-chi-e-dedicato.png.webp";

const Home = () => {
  //const { texts } = useAppContext();

  return (
    <div
      className="h-full p-5 sm:px-10 XXmd:w-[1100px] 
     text-gray-400 "
    >
      <div className="flex flex-row mb-10">
        <div className="w-1/2 md:w-1/4 text-lg md:text-xl font-semibold tracking-[0.2em] ">
          <h1 className="w-32 leading-4 md:leading-6">CRLS SANZ</h1>
        </div>

        <div className="w-1/2 md:w-3/4 text-xs md:text-base flex flex-col md:flex-row justify-between md:items-center text-end md:text-start">
          <h1 className="mb-5 md:mb-0">
            FULLSTACK DEVELOPER
            <br /> FOLIO /{" "}
            <span className="font-numero font-light">2021 - 2024</span>
          </h1>

          <h1 className="mb-5 md:mb-0">
            AVAILABLE FOR FREELANCE
            <br /> WORK FROM JULY{" "}
            <span className="font-numero font-light">2024</span>
          </h1>
          <div>
            <button className="py-2 px-10 md:text-xl border rounded-full ">
              CONTACT
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden font-bold text-5xl flex flex-row justify-between">
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
      <div className="h-[380px] flex flex-col justify-end ">
        <div
          className="font-poppin font-bold w-full md:-mx-3 text-9xl leading-[110px] md:text-8xl md:leading-[80px] lg:text-[180px] lg:leading-[150px] rotate-90 md:rotate-0 whitespace-nowrap"
          style={{ fontFamily: "sans-serif" }}
        >
          <span className="hidden md:inline-block">
            DEVE<span className="text-cyan-600">L</span>OPER
            <br />
          </span>
          STACK <br />
          FRONT & <br /> B<span className="text-cyan-600">A</span>
          CK-END
        </div>
      </div>
    </div>
  );
};

export default Home;
