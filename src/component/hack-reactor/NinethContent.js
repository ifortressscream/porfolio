import React from "react";
import Melissalouie from "../../images/hack/melissalouie.png";
import Kevin_Fang from "../../images/hack/Kevin_Fang.png";
import Evelyn from "../../images/hack/evelyn.png";
import Career2 from "../../images/hack/career2.png";
import Q2021 from "../../images/hack/2021.png";
import CourseReport from "../../images/hack/course report.png";

function NinethContent() {
  return (
    <div>
      <div class="grid grid-flow-col grid-rows-3 mx-auto mt-16 max-w-7xl gap-x-6 gap-y-2">
        <div class="flex items-center border shadow-md">
          <div class="border border-t-0 border-r-0">
            <img class="items-start" src={Melissalouie} alt="" />
          </div>
          <div class="p-4">
            <p class="max-w-lg mb-2 font-medium text-left text-md">
              "I just accepted an offer from Amex to be a software engineer in
              New York, and it is exactly the type of position I wanted.
              Galvanize’s career services and support have far surpassed my
              expectations."
            </p>
            <p class="italic">
              Melissa Louie, Software Engineer, American Express
            </p>
          </div>
        </div>
        <div class="flex items-center border shadow-md">
          <div class="border border-t-0 border-r-0">
            <img class="items-start" src={Kevin_Fang} alt="" />
          </div>
          <div class="p-4">
            <p class="max-w-lg mb-2 font-medium text-left text-md">
              ""When the bootcamp believed in me by offering the opportunity for
              an Income Share Agreement, then I believed in the bootcamp."
            </p>
            <p class="italic">Kevin Fang, Software Engineer, Self-Employed</p>
          </div>
        </div>
        <div class="flex items-center border shadow-md">
          <div class="border border-t-0 border-r-0">
            <img class="items-start" src={Evelyn} alt="" />
          </div>
          <div class="p-4">
            <p class="max-w-lg mb-2 font-medium text-left text-md">
              ""I’ve been around teachers for a really long time, both in a
              collegial sense and in a student-teacher type of relationship. One
              of my favorite teachers of all time was the lead instructor of
              Hack Reactor at Austin."
            </p>
            <p class="italic">
              Evelyn Binkard, Software Engineer, Kapsch Trafficcom North America
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center col-span-3 row-span-3 p-6 border shadow-md gap-x-16">
          <div class="w-40 h-40">
            <img src={Career2} alt="" />
          </div>

          <div class="w-40 h-40">
            <img src={Q2021} alt="" />
          </div>
          <div class="w-40 h-40">
            <img src={CourseReport} alt="" />
          </div>
          <p class="text-center">Career Karma, Switchup, and Course</p>
          <p>Report all consider Hack Reactor a top</p>
          <p>bootcamp in several categories.</p>
        </div>
      </div>
    </div>
  );
}

export default NinethContent;
