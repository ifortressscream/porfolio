import React from "react";
import JavaScript from "../../images/hack/JavaScript.jpg";
import Kayleigh from "../../images/hack/Kayleigh.jpg";
import Galvanize from "../../images/hack/Galvanize.jpg";

function EleventhContent() {
  return (
    <div>
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center justify-between mb-6 border shadow-2xl">
          <div class="w-1/5">
            <img class="w-full" src={JavaScript} alt="" />
          </div>
          <div class="w-3/5 p-8">
            <p class="pb-3 font-serif text-2xl">
              Bootcamps are a great place to learn JavaScript
            </p>
            <p class="text-sm">
              There are many reasons why taking the coding bootcamp path offers
              the best benefits to those looking for JavaScript training or
              becoming a software engineer.
            </p>
          </div>
          <div class="w-1/5 p-8">
            <button class="w-full px-6 py-2 text-blue-400 ease-in delay-100 transform bg-white border border-blue-400 rounded-sm hover:bg-blue-400 hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between mb-6 border shadow-2xl">
          <div class="w-1/5">
            <img class="w-full" src={Kayleigh} alt="" />
          </div>
          <div class="w-3/5 p-8">
            <p class="font-serif text-2xl">
              Kayleigh Foley, alum and Software Engineer at Smartcar, shares her
              learning journey
            </p>
            <p class="text-sm">
              2018 Hack Reactor alum Kayleigh Foley reflects on her experience
              learning to code, the benefits of working at a smaller company
              like Smartcar, and the creative freedom that coding provides.
            </p>
          </div>
          <div class="w-1/5 p-8">
            <button class="w-full px-6 py-2 text-blue-400 ease-in delay-100 transform bg-white border border-blue-400 rounded-sm hover:bg-blue-400 hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between mb-6 border shadow-2xl">
          <div class="w-1/5">
            <img class="w-full" src={Galvanize} alt="" />
          </div>
          <div class="w-3/5 p-8">
            <p class="font-serif text-2xl">
              Software engineer salaries by experience: How much should you be
              making?
            </p>
            <p class="text-sm">
              It’s easy to find an average starting salary or the overall
              average salary of different tech jobs, but a software engineering
              career is a path that offers many levels of salary.
            </p>
          </div>
          <div class="w-1/5 p-8">
            <button class="w-full px-6 py-2 text-blue-400 ease-in delay-100 transform bg-white border border-blue-400 rounded-sm hover:bg-blue-400 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EleventhContent;
