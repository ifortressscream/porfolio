import React from "react";

function FifthContent() {
  return (
    <div>
      <div className="text-white" style={{ backgroundColor: "#7510F7" }}>
        <div className="relative">
          <div className="flex items-center justify-center max-w-3xl mx-auto text-center">
            <div className="m-20">
              <div className="mb-4 text-2xl font-semibold">
                My Startup Projects
              </div>
              <div className="pb-32 text-sm font-normal leading-loose">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Eventually, I decided that it would be a fun
                challenge to try designing and building my own.
              </div>
            </div>
          </div>
          <div className="absolute h-auto max-w-5xl mx-auto text-center text-black rounded-lg top-3/4 inset-x-32">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-full p-12 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  Next level plug and play chassis systems for custom
                  do-it-yourself lightsaber builds.
                </p>
              </div>
              <div className="h-full p-12 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  Simple feedback and engagement tools for teams that want to
                  build and ship winning products.
                </p>
              </div>
              <div className="h-full p-12 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  A powerful, easy-to-configure form backend for designers and
                  developers. No coding required.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-full p-12 mt-4 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  Beautifully simple websites for independent distributors of
                  Young Living Essential Oils.
                </p>
              </div>
              <div className="h-full p-12 mt-4 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  A collaborative tool for creating simple, effective user
                  personas for design projects.
                </p>
              </div>
              <div className="h-full p-12 mt-4 bg-white border border-blue-100 rounded-2xl">
                <p className="pb-4 font-sans text-lg font-semibold">LOGO</p>
                <p className="pb-6 text-xs leading-loose">
                  A space and member management solution for coworking
                  communities both big and small.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
      <div className="font-serif text-2xl font-semibold text-center border-b border-blue-100 p-44">
        Interested in collaborating or investing?
        <div className="pt-6 pb-12 font-sans text-xl text-center font-extralight">
          I’m always open to discussing product design work or partnership
          opportunities.
        </div>
        <button className="px-6 py-2 text-xl text-center text-indigo-700 border-2 border-indigo-700 rounded-full hover:text-white hover:bg-indigo-700">
          Start a conversation
        </button>
      </div>
    </div>
  );
}

export default FifthContent;
