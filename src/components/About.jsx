import React from "react";
import { useAppContext } from "../context/AppProvider";

const About = () => {
  const { texts } = useAppContext();
  return (
    <div className="px-4 mb-4 text-sm text-gray-300 md:px-24 xl:px-48">
      <div className="p-4 py-8 rounded-md bg-[#2d808f85] mb-3 lg:grid lg:grid-cols-3 lg:gap-4 text-center ">
        <h1 className="text-2xl pb-4 font-semibold text-cyan-500">
          {texts.aboutTitle}
        </h1>
        <div>
          <h1 className="mb-2 uppercase text-white">Front-end</h1>
          <p className="mb-6">{texts.aboutFrontend}</p>
        </div>
        <div>
          <h1 className="mb-2 uppercase text-white">Back-end</h1>
          <p className="mb-6">{texts.aboutBankend}</p>
        </div>
        <div>
          <h1 className="mb-2 uppercase text-white">
            {texts.aboutConsultantTitle}
          </h1>
          <p className="mb-6"> {texts.aboutConsultant}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
