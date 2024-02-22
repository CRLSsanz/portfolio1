import React from "react";
import { useAppContext } from "../context/AppProvider";
import foto from "../images/foto2.png";

const Home = () => {
  const { texts } = useAppContext();

  return (
    <div className="relative h-full mt-14 p-6 text-gray-100 lg:text-lg lg:w-[960px]">
      <div className="absolute top-0 right-0 ">
        <div
          className="flex w-[130px] h-[500px] md:w-[400px] md:h-[500px]"
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
      <div className="w-3/4">
        <h1 className="mb-5">{texts.homeHello} </h1>
        <h1 className="text-3xl md:text-5xl mb-5 text-cyan-500">
          Carlos Sanchez <br />
          <span className="mb-10">{texts.homeTitle}</span>
        </h1>
        <p className="mb-20 pr-16 lg:pr-96">{texts.homeText}</p>
        <a
          href="#section4"
          className="px-10 py-3 tracking-wider border-2 border-cyan-500"
        >
          {texts.homeButton}
        </a>
      </div>
    </div>
  );
};

export default Home;
