import React from "react";
import Screamoo from "../images/Screamoo.svg";

function ProfileBody() {
  return (
    <div className="w-full h-full pb-24 pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="py-2 font-serif text-4xl font-semibold">
            Designer, Front-end Developer & Mentor
          </div>
          <p className="py-4 text-xl">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
        <div className="">
          <div className="grid mt-20 justify-items-center">
            <img className="" src={Screamoo}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
