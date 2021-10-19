import React from "react";
import Background from "../../images/hack/background.jpg";

function StartingContent() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center p-36">
        <h1 className="mb-5 font-serif text-5xl text-gray-100">
          The Most Advanced Coding Bootcamp: Think Like a Software Engineer
        </h1>
        <p className="my-8 text-2xl font-light text-gray-100">
          Don't just learn to code.
          <span className="font-semibold">Reinvent your career</span> full-time,
          part-time, in-person or online.
        </p>
        <button className="px-6 py-2 text-white ease-in delay-100 bg-blue-500 border-2 border-blue-500 rounded-sm hover:bg-blue-400">
          Start Learning For Free
        </button>
      </div>
    </div>
  );
}

export default StartingContent;
