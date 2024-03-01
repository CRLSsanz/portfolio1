import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
const bag3 = "https://github.com/CRLSsanz/trade/blob/main/fondo01.jpg?raw=true";

const Portfolio = () => {
  return (
    <div>
      <section
        id="section1"
        className="min-h-screen Bbg-[#1A2035] bg-[#151515] flex"
      >
        <div className="m-auto">
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
        <div className="my-auto w-full -mt-1">
          <svg
            className="block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
          >
            <path
              fill="#151515"
              fillOpacity="1"
              d="M0,15L1440,170L1440,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 70"
          >
            <path
              fill="#151515"
              fillOpacity="1"
              d="M0,15L360,70L1440,15L1440,0L720,0L0,0Z"
            ></path>
          </svg>
          <h1 className="h-8 sm:h-20"> </h1>
          <About />
        </div>
      </section>

      <section id="section3" className="min-h-[700px] bg-[#1A2035] flex">
        <div className="my-autoooo w-full">
          <h1 className="h-16"> </h1>
          <Skills />
        </div>
      </section>

      <section id="section4" className="min-h-[700px] bg-[#259ca0] flex">
        <div className="my-autooo w-full">
          <h1 className="h-16"> </h1>
          <Work />
        </div>
      </section>

      <section
        id="section5"
        className="min-h-[800px] bg-[#1A2035] flex justify-center"
      >
        <div className="my-autooo w-[600px] px-2">
          <h1 className="h-16"> </h1>
          <Contact />
        </div>
      </section>

      <section
        id="section6"
        className="bg-[#259ca0] flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bag3})`,
          backgroundPosition: "30%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="my-auto w-full text-center">
          <h1 className="h-16"> </h1>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
