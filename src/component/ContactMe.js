import React from "react";
import { Link } from "react-router-dom";
import ScreamLogo from "../images/ScreamLogo.svg";

function ContactMe() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between py-4 my-4">
        <Link to="/home">
          <img
            className="w-40 h-24 -ml-12 cursor-pointer"
            src={ScreamLogo}
            alt=""
          />
        </Link>
        <Link to="/home">
          <i className="fa fa-times cursor-pointer" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="text-center pt-24 ">
        <p className="font-normal font-mono text-5xl">
          Thanks for taking the time to reach out. How can I help you today?
        </p>
        <div className="text-xl p-12 flex justify-between px-12">
          <div className="text-left w-1/2">
            <p className="p-2">Name</p>
            <input
              className="placeholder-gray-200 placehold-opacity-10 border border-indigo-800 rounded h-12 w-11/12 p-2"
              placeholder="Name"
            ></input>
          </div>
          <div className="text-left w-1/2">
            <p className="p-2">Email</p>
            <input
              className="placeholder-gray-200 placehold-opacity-100 border border-indigo-800 rounded h-12 w-11/12 p-2"
              placeholder="Email Address"
            ></input>
          </div>
        </div>
        <div className="p-4 mr-14">
          <p className="text-center p-2 text">Message</p>
          <textarea
            rows="8"
            className="placeholder-gray-200 placehold-opacity-10 border border-indigo-800 rounded w-full p-2 -ml-18"
            placeholder="Message Me"
          ></textarea>
          <button className="px-12 py-2 m-8 font-medium text-purple-700 ease-in delay-100 border-2 border-purple-700 rounded-full hover:bg-purple-700 hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
