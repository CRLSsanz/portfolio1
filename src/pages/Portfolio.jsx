import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
const bag3 =
  "Hhttps://github.com/CRLSsanz/trade/blob/main/fondo01.jpg?raw=true";

const Portfolio = () => {
  return (
    <div>
      <section
        id="section1"
        className="min-h-[1050px] XXmd:min-h-screen md:min-h-[700px] Bbg-[#1A2035] bg-[#151515] flex"
      >
        <div className="mx-auto w-full">
          <h1 className="Hh-16"> </h1>
          <Home />
        </div>
      </section>

      <section
        id="section2"
        className="min-h-[700px] bBg-[#1A2035] bg-[#2F3437] Bbg-[#259ca0] flex"
        style={{
          //backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(${bag3})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
        }}
      >
        <div className="Xmx-auto w-full -mt-1">
          <div className="bg-[#151515] h-16"> </div>
          <h1 className="-mt-16 h-16 w-full sticky z-50 top-0">
            <Navbar />
          </h1>

          <svg
            className="block md:hidden -mt-1"
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
            className="hidden md:block -mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 70"
          >
            <path
              fill="#151515"
              fillOpacity="1"
              d="M0,15L360,70L1440,15L1440,0L720,0L0,0Z"
            ></path>
          </svg>

          <div className="flex">
            <div className="mx-auto XXw-full -mt-1">
              <div className="py-10 xl:w-[1100px] grid grid-cols-1  lg:grid-cols-3">
                <div className="col-span-2">
                  <About />
                </div>

                <div className="lg:sticky lg:top-20">
                  <h1 id="section3" className="h-16">
                    {" "}
                  </h1>
                  <Skills />
                </div>

                <div className="col-span-2">
                  <h1 id="section4" className="h-16">
                    {" "}
                  </h1>
                  <Work />
                </div>
              </div>
            </div>
          </div>

          <svg
            className="block md:hidden -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
          >
            <path
              fill="#1A2035"
              fillOpacity="1"
              d="M0,160L1440,15L1440,180L0,180Z"
            ></path>
          </svg>
          <svg
            className="hidden md:block -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 70"
          >
            <path
              fill="#1A2035"
              fillOpacity="1"
              d="M0,60L1080,15L1440,60L1440,70L720,70L0,70Z"
            ></path>
          </svg>
        </div>
      </section>

      <section
        id="section3XX"
        className="hidden min-h-[700px] bg-[#1A2035] Fflex"
      >
        <div className="my-autoooo w-full">
          <h1 className="h-16"> </h1>
          <Skills />
        </div>
      </section>

      <section
        id="section4XX"
        className="hidden min-h-[700px] bg-[#259ca0] Fflex"
      >
        <div className="my-autooo w-full">
          <h1 className="h-16"> </h1>
          <Work />
        </div>
      </section>

      <section id="section5" className="min-h-[800px] bg-[#1A2035] flex">
        <div className="lg:mx-auto">
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
        <div className="my-autooo w-full">
          <h1 className="h-16"> </h1>
          <Footer />
        </div>
      </section>

      <div className="bg-[#151515] text-white text-center text-sm py-4 ">
        <h1 className="hidden">
          All Rights Reserved <span className="font-numero">© 2023 </span>
          CRLSDEV
        </h1>
        <h1 className="px-12">
          <span className="font-numero">© 2023 </span> All Rights Reserved.
          Developer by CRLSDEV
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
