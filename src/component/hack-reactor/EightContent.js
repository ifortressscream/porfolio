import React from "react";
import Syllabus from "../../images/hack/syllabus.png";

function EightContent() {
  return (
    <div>
      <div class="mx-auto mt-12 max-w-7xl">
        <div class="flex items-center justify-around p-8 text-center border shadow-2xl ">
          <div class="w-96">
            <img class="w-full h-46" src={Syllabus} alt="" />
          </div>
          <div class="flex-col items-center justify-center px-8 pt-4 text-left">
            <p class="font-serif text-lg">
              Download the Syllabus of Our Software Engineering Immersive
            </p>
            <p>
              We constantly improve our coding bootcamp curriculum based on new
              trends, changing needs of the tech industry, and feedback from our
              students and alumni.
            </p>
          </div>
          <div class="pr-18">
            <button class="px-10 py-2 text-blue-500 ease-in delay-100 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white mr-18">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EightContent;
