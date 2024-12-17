import React from "react";

const NavBar = () => {
  return (
    <div className=" w-44 h-24 m-auto relative top-4 ">
      <div className="w-full h-4 mb-3">
        <p className="text-center text-black text-xs font-medium">
          Topics I thought you'd enjoy
        </p>
      </div>
      <div className="border-white flex w-full h-20 justify-between  ">
        <div className="bg-amber-500 w-20 h-20 rounded cursor-pointer bg-[url('https://copilot.microsoft.com/th?id=OCR.120224_Politics_24_Landscape&forceJpeg=1&o=6&w=600')] bg-cover bg-center transition duration-500 ease-out hover:scale-[1.1] hover:ease-in">
          <div className=" w-full h-[35px] relative top-11">
            <p className="text-[4px] font-[10px] text-center">
              Today's top stories on copilot Daily
            </p>
            <h2 className="text-[4px] font-bold px-2">
              UK recycling costs for Amazon, and more
            </h2>
            <div className="bg-black text-amber-600 text-[6px] text-center px-4 mx-2 mt-1 rounded">
              Play Now
            </div>
          </div>
        </div>
        <div className=" w-20 h-20 group ">
          <div className="bg-blue-100 w-20 h-8 mb-2 rounded cursor-pointer hover:scale-[1.1] group-hover:overflow-hidden ease-in-out duration-700 flex justify-between">
            <div className="w-10 h-4 rounded px-1">
              <img
                src="https://copilot.microsoft.com/th?id=ODSWG.0b15ba4d-f56a-4326-9cf7-a98555f18919&forceJpeg=1&o=6&w=500&h=500 "
                className="w-10 h-8 rounded"
              ></img>
            </div>
            <div className="w-10 h-8">
              <p className="text-[4px] p-1 font-medium text-start">
                hello everyone,i am very happy
              </p>
            </div>
          </div>
          <div className="bg-blue-100 w-20 h-8 rounded cursor-pointer hover:scale-[1.1] group-hover:overflow-hidden ease-in-out duration-700 flex justify-between">
            <div className="w-10 h-4 rounded px-1">
              <img
                src="https://copilot.microsoft.com/th?id=ODSWG.0b15ba4d-f56a-4326-9cf7-a98555f18919&forceJpeg=1&o=6&w=500&h=500 "
                className="w-10 h-8 rounded"
              ></img>
            </div>
            <div className="w-10 h-8">
              <p className="text-[4px] p-1 font-medium text-start">
                hello everyone,i am very happy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
