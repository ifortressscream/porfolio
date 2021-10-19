import React from "react";
import Materialui from "../images/Materialui.img";
import Csslogo from "../images/Csslogo.img";
import Htmllogo from "../images/Htmllogo.img";
import Reactlogo from "../images/Reactlogo.img";
import Jslogo from "../images/Jslogo.img";
import Tailwindlogo from "../images/Tailwindlogo.img";

function FourthContent() {
  return (
    <div className="w-full border-t border-blue-100 h-1/4">
      <div className="p-16 mx-auto font-sans text-2xl font-extrabold text-center max-w-7xl m-28">
        <p>TECH STUFF</p>
        <div>
          <div className="flex flex-row justify-between h-full pt-12 mx-auto max-w-7xl">
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Materialui}
                alt="material ui logo"
              />
            </div>
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Csslogo}
                alt="css logo"
              />
            </div>
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Htmllogo}
                alt="html logo"
              />
            </div>
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Reactlogo}
                alt=""
              />
            </div>
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Jslogo}
                alt=""
              />
            </div>
            <div className="w-1/6 h-48 p-4 m-2 my-2 bg-white border border-gray-100 shadow-2xl">
              <img
                className="w-full duration-200 ease-in transform shadow-2xl lg:h-full hover:scale-110"
                src={Tailwindlogo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthContent;
