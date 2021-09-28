import React from "react";

function SixthContent() {
  return (
    <div className="w-full h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="pt-40 font-serif text-3xl font-semibold text-center font-2xl">
          Testimonials
          <p className="pt-8 text-lg font-thin">
            People I've worked with have said some nice things...
          </p>
          <div>IMAGE</div>
          <p className="text-xl leading-relaxed pt-44 font-extralight">
            “Matt was a real pleasure to work with and we look forward to
          </p>
          <p className="text-xl leading-relaxed font-extralight">
            working with him again. He’s definitely the kind of designer you can
          </p>
          <p className="pb-12 text-xl leading-relaxed font-extralight">
            trust with a project from start to finish.”
          </p>
        </div>
        <div className="font-serif text-lg font-semibold text-center">
          Pascal Tremblay
          <p className="text-base font-thin">Creative Lead, Good Kind</p>
        </div>
      </div>
    </div>
  );
}

export default SixthContent;
