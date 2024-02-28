import React from "react";
import { useAppContext } from "../context/AppProvider";
const cargarImagen = require.context("../images", true);

const About = () => {
  const { texts } = useAppContext();
  return (
    <div className="p-4 mb-4 text-sm text-gray-600 md:px-24 xl:px-48">
      <div className="px-10 rounded-md bg-[#ffffff]/70 mb-3 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-4 pb-5 text-center ">
        <h1 className="text-2xl py-10 font-bold text-gray-950 md:col-span-2 lg:col-span-4">
          {texts.aboutTitle}
        </h1>

        <div>
          <h1 className="flex flex-col items-center h-20">
            <img src={cargarImagen(`./ab-diseweb.png`)} alt="" srcset="" />
          </h1>

          <h1 className="mb-2 uppercase font-semibold text-cyan-500">
            Desarrollo y diseño web
          </h1>
          <p className="mb-6">
            Creo sitios web de calidad con un diseño que refleje la esencia de
            tu negocio, proporcionando una presencia en línea que destaque.
          </p>
        </div>

        <div>
          <h1 className="flex flex-col items-center h-20">
            <img src={cargarImagen(`./ab-shopping.png`)} alt="" srcset="" />
          </h1>
          <h1 className="mb-2 uppercase font-semibold text-cyan-500">
            Desarrollo de eCommerce
          </h1>
          <p className="mb-6">
            Desarrollo tu tienda online con un diseño atractivo y efectivo,
            integrada con múltiples formas de pago, para que puedas multiplicar
            tus ventas.
          </p>
        </div>

        <div>
          <h1 className="flex flex-col items-center h-20">
            <img src={cargarImagen(`./ab-responsive.png`)} alt="" srcset="" />
          </h1>
          <h1 className="mb-2 uppercase font-semibold text-cyan-500">
            Diseño Responsive
          </h1>
          <p className="mb-6">
            Creo sitios web que se ven geniales en cualquier dispositivo,
            mejorando la experiencia de usuario y la visibilidad en los
            buscadores.
          </p>
        </div>

        <div>
          <h1 className="flex flex-col items-center h-20">
            <img src={cargarImagen(`./ab-hosting.png`)} alt="" srcset="" />
          </h1>
          <h1 className="mb-2 uppercase font-semibold text-cyan-500">
            Hosting
          </h1>
          <p className="mb-6">
            Me encargo de alojar tu sitio web al mejor precio del mercado, con
            almacenamiento en SSD y certificado SSL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
