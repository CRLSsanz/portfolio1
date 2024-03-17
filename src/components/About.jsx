import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const About = () => {
  const { texts } = useAppContext();

  const card = [
    {
      id: "01",
      title: texts.abDo1title,
      text: texts.abDo1text,
      link: "Leer màs",
      svg: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    },
    {
      id: "02",
      title: texts.abDo2title,
      text: texts.abDo2text,
      link: "Leer màs",
      svg: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z",
    },
    {
      id: "03",
      title: texts.abDo3title,
      text: texts.abDo3text,
      link: "Leer màs",
      svg: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z",
    },
    {
      id: "04",
      title: texts.abDo4title,
      text: texts.abDo4text,
      link: "Leer màs",
      svg: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z",
    },
  ];

  return (
    <div className=" text-white dark:text-gray-800">
      <div className="px-5 -mt-14 flex justify-start md:mt-0 mb-5">
        <img
          src={cargarImagen(`./foto3.jpg`)}
          alt="perfil"
          srcset=""
          className="w-32 h-32 border-4 border-white dark:border-gray-700 rounded-full shadow-md shadow-gray-950"
        />
      </div>
      <div className="overflow-hidden lg:overflow-visible">
        <div className="px-2 sm:px-5 ">
          <div className="flex items-end mb-5">
            <h1
              data-aos="fade-left"
              className="text-3xl whitespace-nowrap text-white dark:text-gray-700"
            >
              {texts.abTitle}
            </h1>
            <div className="w-full h-3 border-t border-gray-500/80 ml-3"></div>
          </div>
          <div className="">
            <p className="text-gray-300 dark:text-gray-500 lg:pr-12 mb-5">
              {texts.abTitleText}
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="text-sm flex flex-wrap items-end mb-10 text-gray-400 tracking-wider"
            >
              <div className="flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 -mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <h4 className="ml-1 mr-3"> {texts.abInfo1}</h4>
              </div>
              <div className="flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 -mt-0.5 text-cyan-300 dark:text-cyan-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                <h4 className="ml-1 mr-3"> {texts.abInfo2}</h4>
              </div>
              <div className="flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 -mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                  />
                </svg>
                <h4 className="ml-1 mr-3">
                  <span className="fam-number">{texts.abInfo3N}</span>{" "}
                  {texts.abInfo3}
                </h4>
              </div>
              <div className="flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 -mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <h4 className="ml-1">
                  {texts.abInfo4}
                  <span className="fam-number"> {texts.abInfo4N}</span>
                </h4>
              </div>
            </div>
            {/** BOTTON */}
            <div
              data-aos="Xzoom-in-left"
              data-aos-duration="X500"
              className="flex mb-10"
            >
              <a
                href="#sectionWork"
                className="text-center text-sm w-full md:w-1/2 rounded-sm whitespace-nowrap py-3 tracking-widest text-white bg-gradient-to-br from-blue-500 to-green-500/70 hover:bg-gradient-to-tl hover:to-green-500/70"
              >
                {texts.abBotton}
              </a>
            </div>
            {/** SUBTITULO */}
            <h2
              data-aos="zoom-in-left"
              data-aos-duration="500"
              className="text-2xl text-white dark:text-gray-700 mb-5"
            >
              {texts.abSubTitle}
            </h2>
            <p className=" text-gray-300 dark:text-gray-500 lg:pr-12 mb-16">
              {texts.abSubTitleText}
            </p>
          </div>
        </div>

        <div className="Xlg:flex Xlg:flex-row pr-2 -ml-2 sm:ml-0 sm:px-5">
          {/** 4 CARD */}
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5 ">
            {card.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg bg-[#2C303A] dark:bg-gray-200 dark:shadow text-gray-300 dark:text-gray-500 p-5 lg:pt-10 mb-10 sm:mb-5"
              >
                <div className="flex flex-row justify-between">
                  <div className="-mt-9 lg:-mt-[70px] mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      class="w-16 h-16 p-0.5 rounded-lg bg-[#131417]/95 Xdark:bg-gray-100 dark:bg-gray-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d={item.svg}
                      />
                    </svg>
                  </div>
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    className="fam-number text-4xl mb-1 lg:-mt-2"
                  >
                    {item.id}
                  </h2>
                </div>
                <h2
                  data-aos="fade-left"
                  className="Xtracking-wide text-white dark:text-gray-700 text-xl font-semibold mb-2"
                >
                  {item.title}
                </h2>
                <p className="pb-8">{item.text}</p>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="absolute bottom-7 left-5 text-cyan-300 dark:text-cyan-500 text-sm cursor-pointer hover:border-b border-cyan-500"
                >
                  {item.link}
                </span>
                <div className="X2xl:hidden absolute w-0.5 h-7 bottom-0 right-7 bg-gradient-to-b from-cyan-500 to-green-500">
                  {" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
