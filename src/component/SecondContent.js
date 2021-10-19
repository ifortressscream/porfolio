import React from "react";
import DesignerIcon from "../images/DesignerIcon.svg";
import FEDIcon from "../images/FEDIcon.svg";
import MentorIcon from "../images/MentorIcon.svg";

function SecondContent() {
  return (
    <div>
      <div className="text-white" style={{ backgroundColor: "#7510F7" }}>
        <div className="relative">
          <div className="flex items-center justify-center max-w-3xl mx-auto text-center">
            <div className="m-20">
              <div className="mb-4 text-2xl font-semibold">
                Hi, I’m Michael. Nice to meet you.
              </div>
              <div className="pb-32 text-sm font-normal leading-loose">
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </div>
            </div>
          </div>
          <div className="absolute flex h-auto max-w-5xl mx-auto text-center text-black bg-white border border-gray-100 rounded-lg shadow-xl top-3/4 inset-x-32">
            <div className="w-1/3 p-4 border-r border-gray-100">
              <div className="flex justify-center py-4">
                <img className="w-40 h-12" src={DesignerIcon} alt="design" />
              </div>
              <p className="pb-4 font-sans text-2xl font-bold">Designer</p>
              <p className="pb-6 text-xs leading-loose">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
            </div>
            <div className="w-1/3 p-4 border-r border-gray-100">
              <div className="flex justify-center py-4">
                <img className="w-40 h-12" src={FEDIcon} alt="" />
              </div>
              <p className="pb-4 font-sans text-2xl font-bold">
                Front-end Developer
              </p>
              <p className="pb-6 text-xs leading-loose">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
            </div>

            <div className="w-1/3 p-4">
              <div className="flex justify-center py-4">
                <img className="w-40 h-12" src={MentorIcon} alt="" />
              </div>
              <p className="pb-4 font-sans text-2xl font-bold">Mentor</p>
              <p className="pb-6 text-xs leading-loose">
                I genuinely care about people, and love helping fellow designers
                work on their craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
