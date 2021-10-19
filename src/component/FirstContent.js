import React from "react";
import Computer from "../images/Computer.svg";

function Image() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid w-full h-full justify-items-center animate-pulse">
        <img className="h-72 " src={Computer} alt="" />
      </div>
    </div>
  );
}

export default Image;
