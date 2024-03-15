import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppProvider";
import Dashboard from "../components/Dashboard";

const bag3 = "https://github.com/CRLSsanz/trade/blob/main/fondo01.jpg?raw=true";

const Portfolio = () => {
  const { darkMode } = useAppContext();

  return (
    <div className={`${darkMode && "dark"} 2xl:pl-48 bg-cyan-500 `}>
      <section
        id="sectionHome"
        className="min-h-[820px] 860 XXmd:min-h-screen md:min-h-[700px] Bbg-[#1A2035] bg-[#1E1F26] dark:bg-gray-300 flex"
      >
        <div className="mx-auto w-full">
          <h1 className="Hh-16"> </h1>
          <Home />
        </div>
      </section>

      <section
        id="sectionAbout"
        className="min-h-[700px] bg-[#131417] Bbg-[#2F3437] dark:bg-gray-100 Bbg-[#259ca0] flex"
        style={{
          //backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(${bag3})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
        }}
      >
        <div className="Xmx-auto w-full -mt-1">
          <div className="bg-[#1E1F26] dark:bg-gray-300 h-20"> </div>

          <div className=" -mt-16 h-16 w-full sticky z-50 top-0">
            <Navbar />
          </div>
          <svg
            className="block md:hidden waves-color -mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,15L1440,170L1440,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="hidden waves-color Xmd:block -mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 70"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,15L360,70L1440,15L1440,0L720,0L0,0Z"
            ></path>
          </svg>

          <div className="flex flex-row">
            <div className="lg:basis-8/12 flex justify-end -mt-1">
              <div className="py-10 xl:w-[800px] flex flex-col">
                <div className="">
                  <About />
                </div>

                <div className="">
                  <h1 id="sectionSkills" className="h-16">
                    {" "}
                  </h1>
                  <Skills />
                </div>

                <div className="">
                  <h1 id="sectionWork" className="h-16">
                    {" "}
                  </h1>
                  <Work />
                </div>

                <div className="hidden col-span-2">
                  <h1 id="section4" className="h-16">
                    {" "}
                  </h1>
                  <Contact />
                </div>
              </div>
            </div>

            <div className="lg:basis-4/12 flex justify-start bg-[#1E1F26] -mt-12 md:ml-0">
              <div className=" Xbg-[#151515] max-h-screen sticky top-16">
                <Dashboard />
              </div>
            </div>
          </div>

          <svg
            className="block md:hidden text-[#18191E] dark:text-gray-200 -mb-1 -mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 180"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,160L1440,15L1440,180L0,180Z"
            ></path>
          </svg>
          <svg
            className="hidden md:block text-[#18191E] dark:text-gray-200 -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 70"
          >
            <path
              fill="currentColor"
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

      <section
        id="sectionContact"
        className="Hmin-h-[800px] bg-[#18191E] dark:bg-gray-200 Bbg-[#1A2035] flex"
      >
        <div className="mx-auto Xw-full">
          <div className="xl:w-[1100px]">
            <h1 className="h-16"> </h1>
            <Contact />
          </div>
        </div>
      </section>

      <section
        id="section6"
        className="bg-[#259ca0] flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,9), rgba(0,0,0,0.85)), url(${bag3})`,
          backgroundPosition: "50% 20%",
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
        }}
      >
        <div className="my-autooo w-full">
          <h1 className="h-16"> </h1>
          <Footer />
        </div>
      </section>

      {/** FOOTER */}
      <div className="BBbg-[#050505] bg-gray-50 text-gray-400 text-center text-sm py-4 ">
        <h4 className="px-12 tracking-wider">
          © <span className="fam-number font-extralight">2020-2024</span> Sanz™
          All Rights Reserved.{" "}
          <span className="hidden">Designed by CRLSCODE</span>
        </h4>
      </div>
    </div>
  );
};

export default Portfolio;
