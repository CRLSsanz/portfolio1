import React from "react";
import { useAppContext } from "../context/AppProvider";
import foto from "../images/foto2.png";

const Home = () => {
  const { texts } = useAppContext();

  return (
    <div className="relative h-full mt-14 p-6 text-gray-100 lg:text-xl lg:w-[1180px]">
      <div className="absolute top-0 right-0 ">
        <div
          className="flex w-[130px] h-[500px] md:w-[200px] lg:w-[400px] md:h-[700px] lg:-mt-32"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${foto})`,
            backgroundPosition: "18%",
            backgroundSize: "cover",
            backgroundAttachment: "",
          }}
        >
          <div className="w-full bg-[#151515]/30 Bblur-3xl bg-center"> </div>
        </div>
      </div>

      <div className="w-3/5 md:px-10">
        <h1 className="hidden mb-5">{texts.homeHello} </h1>
        <div className="font-semibold mb-10 ">
          <h1 className="text-5xl tracking-wider mb-2">Carlos Sanchez</h1>
          <h1 className="mb-10 text-3xl md:text-6xl md:font-bold text-cyan-500 tracking-wider">
            {texts.homeTitle}
          </h1>
        </div>
        <p className="mb-10 md:pr-20 md:text-justify">{texts.homeText}</p>
        <a
          href="#section4"
          className="px-10 py-2 tracking-wider rounded-tr-lg rounded-bl-lg border-r-2 border-l-2 text-cyan-400 border-cyan-500"
        >
          {texts.homeButton}
        </a>
      </div>
    </div>
  );
};

export default Home;
