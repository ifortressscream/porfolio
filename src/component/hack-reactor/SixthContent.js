import React from "react";
import Video from "../../images/hack/video.png";

function SixthContent() {
  return (
    <div class="flex">
      <div class="flex flex-col items-end justify-center w-1/2 p-8 font-serif text-xl text-left ">
        <div class="w-1/2"></div>
        <div class="w-1/2">
          <h1 class="py-4 font-bold">
            The Best and Most Immersive Coding Bootcamp
          </h1>
          <p class="text-sm font-light">
            The Hack Reactor Software Engineering Immersive is one of the top
            coding bootcamps and we select high-potential students through a
            rigorous admissions process. In our software engineering bootcamp,
            we train students through over 800 hours of Computer Science and
            JavaScript curriculum that closely models the software engineering
            industry. Led by passionate and experienced teachers, engineering
            leaders, and former hiring managers, we produce software engineers
            the best teams want to hire. We offer our immersive bootcamp
            programs at Galvanize campuses in Austin, Denver, Los Angeles, New
            York, Phoenix, San Francisco, Seattle, and live online.
          </p>
        </div>
      </div>
      <div class="w-1/2">
        <img class="w-full" src={Video} alt="" />
      </div>
    </div>
  );
}

export default SixthContent;
