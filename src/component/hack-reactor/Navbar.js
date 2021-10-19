import React from "react";
import { Link } from "react-router-dom";
import HackLogo from "../../images/hack/logo2.svg";

function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between w-full text-sm h-28">
          <Link to="/home">
            <img className="w-32 h-32" src={HackLogo} />
          </Link>

          <div>Bootcamps</div>
          <div className="">Professional Development</div>
          <div className="">Prepare</div>
          <div className="">Outcomes</div>
          <div className="">Events</div>
          <div className="px-4 py-2 text-gray-100 ease-in delay-100 bg-blue-500 rounded-sm hover:bg-blue-400">
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
