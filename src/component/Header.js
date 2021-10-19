import React from "react";
import ScreamLogo from "../images/ScreamLogo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-6 my-4 hover:text-indigo-800 bg-fixed">
          <Link to="/home">
            <img className="w-40 h-24 -ml-12" src={ScreamLogo} alt="" />
          </Link>
          <div>
            <Link to="/contact">
              <button className="px-6 py-2 ml-8 mr-2 font-medium text-purple-700 ease-in delay-100 border-2 border-purple-700 rounded-full hover:bg-purple-700 hover:text-white">
                Say Hello
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
