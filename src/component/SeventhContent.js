import React from "react";

function SeventhContent() {
  return (
    <div style={{ backgroundColor: "#7510F7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full text-white h-52">
          <div className="absolute flex items-center justify-center w-full h-56 bg-black -inset-y-24 rounded-xl">
            <div className="w-2/5 text-3xl font-bold text-center">
              Start a project
            </div>
            <div className="w-1/5 text-sm text-center">
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </div>
            <div className="flex justify-center w-2/5">
              <button className="px-10 py-2 ease-in delay-150 transform border-2 border-indigo-700 rounded-full hover:bg-indigo-700">
                Let's do this
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full font-serif text-2xl text-center text-white text-opacity-70 h-96"
          style={{ backgroundColor: "#7510F7" }}
        >
          <div className="pb-12">LOGO</div>
          Living, learning, & leveling up
          <p>one day at a time.</p>
          <div className="w-full py-4 mx-auto max-w-6xl border border-white">
            <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
              <i class="fa fa-twitter"></i>
            </div>
            <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
              <i class="fa fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhContent;
