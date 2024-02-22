import React from "react";
import { useAppContext } from "../context/AppProvider";
import foto from "../images/foto2.png";

const Home = () => {
  const { texts } = useAppContext();

  return (
    <div className="relative h-full p-6 text-gray-100 lg:text-lg md:px-48 lg:px-80">
      <div className="absolute -top-32 right-0 ">
        <div
          className="flex w-40 md:w-[400px] h-[700px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${foto})`,
            backgroundPosition: "10%",
            backgroundSize: "cover",
            backgroundAttachment: "",
          }}
        >
          <div className="w-full bg-[#151515]/20 blur-3xl bg-center">
            Hola 2
          </div>
        </div>
      </div>

      <h1 className="mb-5">{texts.homeHello} </h1>
      <h1 className="text-3xl md:text-5xl mb-5 text-cyan-500">
        Carlos Sanchez <br />
        <span className="mb-10">{texts.homeTitle}</span>
      </h1>
      <p className="mb-20 pr-16">{texts.homeText}</p>
      <a
        href="#section4"
        className="px-10 py-3 tracking-wider border-2 border-cyan-500"
      >
        {texts.homeButton}
      </a>
    </div>
  );
};

export default Home;
