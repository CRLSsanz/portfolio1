import React from "react";

const Dashboard = () => {
  return (
    <div className="Xw-16 lg:w-[285px] h-full">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="text-center text-2xl font-semibold Xpy-2 h-16 pt-4">
            C.
          </div>
          <div className="Xbg-blue-300 w-12 h-12 md:w-16 md:h-16 rotate-90 lg:rotate-0 flex items-center">
            <div className="flex flex-row h-full text-gray-200 text-sm md:text-base">
              <h2 className="flex items-center px-4 md:px-6 hover:bg-gray-500/20 hover:border-b-2 hover:border-green-500 cursor-pointer">
                About
              </h2>
              <h2 className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 cursor-pointer">
                Skill
              </h2>
              <h2 className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 cursor-pointer">
                Proyect
              </h2>
              <h2 className="flex items-center px-3 hover:bg-gray-500/20 hover:border-b-2 cursor-pointer">
                Contact
              </h2>
            </div>
          </div>
        </div>

        <div>CRLS</div>
      </div>
    </div>
  );
};

export default Dashboard;
