import React from "react";
import Switch from "../../images/hack/switchup.png";
import Star from "../../images/hack/star.png";
import Career from "../../images/hack/career.png";
import Google from "../../images/hack/google.png";

function SecondContent() {
  return (
    <div
      style={{
        backgroundColor: "#d8d8d8",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between p-4 text-center">
          <div className="w-1/5 text-gray-800">
            Rated “Best Coding Bootcamp”
            <img className="p-4" src={Switch} alt="" />
          </div>
          <div className="w-1/5 text-gray-800">
            Quora Reviews
            <img className="p-4" src={Star} alt="" />
          </div>
          <div className="w-1/5 text-gray-800">
            Rated “Best ISA Bootcamp”
            <img className="p-4" src={Career} alt="" />
          </div>
          <div className="w-1/5 text-sm text-gray-800">
            Over 10,000 Alumni Including 88 at
            <img className="p-4" src={Google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
