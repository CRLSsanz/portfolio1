import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
const bag3 = "https://github.com/CRLSsanz/trade/blob/main/fondo01.jpg?raw=true";

const Portfolio = () => {
  return (
    <div>
      <section id="section1" className="min-h-screen bg-[#1A2035] flex">
        <div className="my-auto">
          <Home />
        </div>
      </section>

      <section
        id="section2"
        className="min-h-[700px] bg-[#1A2035] flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bag3})`,
          backgroundPosition: "30%",
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
        }}
      >
        <div className="my-auto w-full px-2">
          <h1 className="h-16"></h1>
          <About />
        </div>
      </section>

      <section id="section3" className="min-h-[700px] bg-[#1A2035] flex">
        <div className="my-autoooo w-full">
          <h1 className="h-16"></h1>
          <Skills />
        </div>
      </section>

      <section id="section4" className="min-h-[700px] bg-[#259ca0] flex">
        <div className="my-autooo w-full px-2">
          <h1 className="h-16"></h1>
          <Work />
        </div>
      </section>

      <section
        id="section5"
        className="min-h-[700px] bg-[#1A2035] flex justify-center"
      >
        <div className="my-autooo w-[600px] px-2">
          <h1 className="h-16"></h1>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
