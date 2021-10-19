import React from "react";
import { Link } from "react-router-dom";
import ScreamLogo from "../../../images/ScreamLogo.svg";

function ShoppeeSite() {
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
    </div>
  );
}

export default ShoppeeSite;
