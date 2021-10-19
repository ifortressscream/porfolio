import React from "react";
import HackLogo from "../images/HackLogo.png";
import Shoppee from "../images/Shoppee.img";
import Twitter from "../images/Twitter.png";
import Login from "../images/Login.png";
import Dashboard from "../images/Dashboard.png";
import Todolist from "../images/Todolist.png";
import { Link } from "react-router-dom";

function FifthContent() {
  return (
    <div>
      <div className="text-white" style={{ backgroundColor: "#7510F7" }}>
        <div className="relative">
          <div className="flex items-center justify-center max-w-3xl mx-auto text-center">
            <div className="m-20">
              <div className="mb-4 text-2xl font-semibold">
                My Startup Projects
              </div>
              <div className="pb-32 text-base font-medium leading-loose">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Eventually, I decided that it would be a fun
                challenge to try designing and building my own.
              </div>
            </div>
          </div>
          <div className="absolute h-auto max-w-5xl mx-auto text-center text-black rounded-lg top-3/4 inset-x-32">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-full p-1 duration-200 ease-in transform rounded-2xl hover:scale-110">
                <Link to="/hack-reactor">
                  <img
                    className="w-full rounded-2xl"
                    src={HackLogo}
                    alt="hackreactor"
                  />
                </Link>
              </div>
              <div className="h-full p-1 duration-200 ease-in transform rounded-2xl hover:scale-110">
                <Link to="/shoppee">
                  <img
                    className="w-full rounded-2xl"
                    src={Shoppee}
                    alt="shoppee"
                  />
                </Link>
              </div>
              <div className="h-full p-1 rounded-2xl duration-200 ease-in transform bg-white hover:scale-110">
                <Link to="/Twitter">
                  <img
                    className="w-full rounded-2xl"
                    src={Twitter}
                    alt="twitter"
                  />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-full p-1 mt-4 rounded-2xl duration-200 ease-in transform bg-white hover:scale-110">
                <Link to="/Login">
                  <img className="w-full rounded-2xl" src={Login} alt="login" />
                </Link>
              </div>
              <div className="h-full p-1 mt-4 rounded-2xl duration-200 ease-in transform bg-white hover:scale-110">
                <Link to="/Dashboard">
                  <img
                    className="w-full rounded-2xl"
                    src={Dashboard}
                    alt="dashboard"
                  />
                </Link>
              </div>
              <div className="h-full p-1 mt-4 duration-200 ease-in transform bg-white hover:scale-110 rounded-2xl">
                <Link to="/Todolist">
                  <img
                    className="w-full rounded-2xl"
                    src={Todolist}
                    alt="todolist"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
      <div className="font-serif text-2xl font-semibold text-center border-b border-blue-100 p-44">
        Interested in collaborating or investing?
        <div className="pt-6 pb-12 font-sans text-xl text-center font-extralight">
          I’m always open to discussing product design work or partnership
          opportunities.
        </div>
        <button className="px-6 py-2 text-xl text-center text-indigo-700 border-2 border-indigo-800 rounded-full hover:text-white hover:bg-indigo-700">
          Start a conversation
        </button>
      </div>
    </div>
  );
}

export default FifthContent;
