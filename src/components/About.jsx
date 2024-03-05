import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const About = () => {
  const { texts } = useAppContext();
  return (
    <div className=" text-white px-5 md:px-10">
      <div className="mb-16">
        <h1 className="text-3xl xl:text-4xl mb-5 text-white">
          {texts.aboutTitle}
        </h1>
        <p className="text-gray-300 lg:pr-12 mb-5">
          El mundo digital está en constante evolución, tu presencia en línea es
          esencial para el éxito de tu negocio, es por ello te acompañamos desde
          el proceso de definición y construcción de tu marca.
        </p>
        <div className="flex">
          <a
            href="#section4"
            className="text-center text-sm w-full md:w-1/2 rounded-sm font-semibold whitespace-nowrap py-3 tracking-widest text-black hover:text-white bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Mas informacion
          </a>
        </div>
      </div>

      <div className="text-gray-400 md:grid md:grid-cols-2 md:gap-5 md:gap-y-10">
        <div className="bg-gradient-to-br from-[#1E1F26] to-[#2C303A] Bbg-[#1E1F26] rounded-md shadow-lg shadow-black/80 p-5 lg:pt-10 mb-10 md:mb-0">
          <div className="-mt-10 lg:-mt-16 mb-5">
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

        <div className="bg-gradient-to-br from-[#1E1F26] to-[#2C303A] Bbg-[#2C303A] rounded-md shadow-lg shadow-black/80 p-5 lg:pt-10 mb-10 md:mb-0">
          <div className="-mt-10 lg:-mt-16 mb-5">
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
            integrada con múltiples formas de pago, para que puedas multiplicar
            tus ventas.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1E1F26] to-[#2C303A] Bbg-[#1A2035] rounded-md shadow-lg shadow-black/80 p-5 lg:pt-10 mb-10 md:mb-0">
          <div className="-mt-10 lg:-mt-16 mb-5">
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

        <div className="bg-gradient-to-br from-[#1E1F26] to-[#2C303A] Bbg-[#1A2035] rounded-md shadow-lg shadow-black/80 p-5 lg:pt-10 md:mb-0">
          <div className="-mt-10 lg:-mt-16 mb-5">
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
  );
};

export default About;
