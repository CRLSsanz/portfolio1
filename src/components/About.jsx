import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const About = () => {
  const { texts } = useAppContext();
  return (
    <div className=" text-gray-600 px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56 mb-10 sm:mb-20">
      <div className="lg:px-0 flex flex-col 2xl:flex-row ">
        <div
          className="w-full md:w-[600px] 2xl:w-full 2xl:basis-1/3 text-white 
        pl-4 border-l-4 border-cyan-400/50
        mb-20"
        >
          <h1 className="text-3xl lg:text-4xl text-cyan-400 font-bold mb-5">
            {texts.aboutTitle}
          </h1>
          <p className="lg:pr-12 mb-10">
            El mundo digital está en constante evolución, tu presencia en línea
            es esencial para el éxito de tu negocio, es por ello te acompañamos
            desde el proceso de definición y construcción de tu marca.
          </p>
          <div className="flex">
            <a
              href="#section4"
              className="text-center w-full md:w-1/2 rounded font-semibold whitespace-nowrap py-3 tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Mas informacion{" "}
              <span className="hidden 2xl:inline-block"> -{">"} </span>
            </a>
          </div>
        </div>

        <div className="2xl:basis-2/3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          <div className="bg-[#151515]/80 hover:bg-[#151515] text-white rounded-md shadow-lg shadow-black p-5 lg:pt-10 mb-20 md:mb-0">
            <div className="-mt-16 mb-5">
              <img
                src={cargarImagen(`./ab-diseweb.png`)}
                alt=""
                srcset=""
                className="py-2 px-3 rounded-md bg-gray-400"
              />
            </div>
            <h1 className="uppercase tracking-wider text-lg font-semibold text-cyan-500 mb-5">
              Desarrollo y diseño web
            </h1>
            <p className="lg:text-start lg:mb-5">
              Creo sitios web de calidad con un diseño que refleje la esencia de
              tu negocio, proporcionando una presencia en línea que destaque.
            </p>
          </div>

          <div className="bg-[#151515]/80 hover:bg-[#151515] text-white rounded-md shadow-lg shadow-black p-5 lg:pt-10 mb-20 md:mb-0">
            <div className="-mt-16 mb-5">
              <img
                src={cargarImagen(`./ab-shopping.png`)}
                alt=""
                srcset=""
                className="py-2 px-3 rounded-md bg-gray-400"
              />
            </div>
            <h1 className="uppercase tracking-wider text-lg font-semibold text-cyan-500 mb-5">
              Tienda Virtual
            </h1>
            <p className="lg:text-start lg:mb-5">
              Desarrollo tu tienda online con un diseño atractivo y efectivo,
              integrada con múltiples formas de pago, para que puedas
              multiplicar tus ventas.
            </p>
          </div>

          <div className="bg-[#151515]/80 hover:bg-[#151515] text-white rounded-md shadow-lg shadow-black p-5 lg:pt-10 mb-20 md:mb-0">
            <div className="-mt-16 mb-5">
              <img
                src={cargarImagen(`./ab-responsive.png`)}
                alt=""
                srcset=""
                className=" w-[74px] py-2 px-3 rounded-md bg-gray-400"
              />
            </div>
            <h1 className="uppercase tracking-wider text-lg lg:text-center font-semibold text-cyan-500 lg:h-14">
              Diseño Responsive
            </h1>
            <p className="lg:text-start lg:mb-5">
              Creo sitios web que se ven geniales en cualquier dispositivo,
              mejorando la experiencia de usuario y la visibilidad en los
              buscadores.
            </p>
          </div>

          <div className="bg-[#151515]/80 hover:bg-[#151515] text-white rounded-md shadow-lg shadow-black p-5 lg:pt-10 md:mb-0">
            <div className="-mt-16 mb-5">
              <img
                src={cargarImagen(`./ab-hosting.png`)}
                alt=""
                srcset=""
                className=" py-2 px-3 rounded-md bg-gray-400"
              />
            </div>
            <h1 className="uppercase tracking-wider text-lg lg:text-center font-semibold text-cyan-500 lg:h-14">
              Hosting
            </h1>
            <p className="lg:text-start lg:mb-5">
              Me encargo de alojar tu sitio web al mejor precio del mercado, con
              almacenamiento en SSD y certificado SSL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
