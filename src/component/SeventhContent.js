import React from "react";
import { Link } from "react-router-dom";
import Scream from "../images/ScreamLogo.svg";

function SeventhContent() {
  return (
    <div style={{ backgroundColor: "#7510F7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full text-white h-52">
          <div
            className="absolute flex items-center justify-center w-full h-36 -inset-y-16 rounded-xl"
            style={{ backgroundColor: "#141C3A" }}
          >
            <div className="w-2/5 text-3xl font-bold text-center">
              Start a project
            </div>
            <div className="w-1/5 text-sm text-center">
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </div>
            <div className="flex justify-center w-2/5">
              <button className="px-10 py-2 font-semibold ease-in delay-150 transform border-2 border-indigo-700 rounded-full hover:bg-indigo-700">
                Let's do this
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full font-serif text-2xl text-center text-white text-opacity-70 h-96"
          style={{ backgroundColor: "#7510F7" }}
        >
          <div className="flex justify-center pb-12">
            <img className="w-40 h-20" src={Scream} alt="" />
          </div>
          Living, learning, & leveling up
          <p>one day at a time.</p>
          <div className="flex items-center justify-around h-12 max-w-6xl py-4 mx-auto my-12 w-72">
            <div className="flex items-center justify-center text-white transition ease-in delay-75 transform scale-75 border-2 border-white border-opacity-25 rounded-full cursor-pointer fill-current stroke-current w-14 h-14 hover:text-purple-800 hover:bg-white">
              <i class="fa fa-twitter"></i>
            </div>
            <div className="flex items-center justify-center text-white transition ease-in delay-75 transform scale-75 border-2 border-white border-opacity-25 rounded-full cursor-pointer fill-current stroke-current w-14 h-14 hover:text-purple-800 hover:bg-white">
              <i class="fa fa-linkedin"></i>
            </div>
            <div className="flex items-center justify-center text-white transition ease-in delay-75 transform scale-75 border-2 border-white border-opacity-25 rounded-full cursor-pointer fill-current stroke-current w-14 h-14 hover:text-purple-800 hover:bg-white">
              <i class="fa fa-facebook-f"></i>
            </div>
            <div className="flex items-center justify-center text-white transition ease-in delay-75 transform scale-75 border-2 border-white border-opacity-25 rounded-full cursor-pointer fill-current stroke-current w-14 h-14 hover:text-purple-800 hover:bg-white">
              <i class="fa fa-google"></i>
            </div>
          </div>
          <div className="flex items-center justify-around h-12 max-w-6xl mx-auto my-12 text-sm font-extralight">
            © 2021 Michael John Mesina
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhContent;
