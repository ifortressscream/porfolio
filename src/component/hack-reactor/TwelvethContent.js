import React from "react";
import Quartz from "../../images/hack/quartz.png";
import Forbes from "../../images/hack/forbes.png";
import Techno from "../../images/hack/techco.png";
import HackReactor2 from "../../images/hack/hack-reactor-2.png";

function TwelvethContent() {
  return (
    <div>
      <div>
        <div class="mx-auto max-w-7xl">
          <div class="flex justify-center w-full p-12 font-serif text-3xl h-28">
            Hack Reactor in the News
          </div>

          <div class="flex">
            <div class="w-1/3 p-5 bg-white border-2 border-gray-100 shadow-lg">
              <img class="w-full" src={Quartz} alt="" />
              <p class="p-6 text-left">
                “My cohort included a lawyer, a neuroscientist, a Navy
                helicopter mechanic and a professional video-game player.”
              </p>
              <div class="flex items-center justify-center">
                <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div class="w-1/3 p-6 mx-6 bg-white border-2 border-gray-100 shadow-lg">
              <img class="w-full" src={Forbes} alt="" />
              <p class="p-6 pb-12 text-left">
                “The Hack Reactor bootcamp experience was a total game changer.”
              </p>
              <div class="flex items-center justify-center">
                <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div class="w-1/3 p-5 bg-white border-2 border-gray-100 shadow-lg">
              <img class="w-full" src={Techno} alt="" />
              <p class="p-6 pb-24 text-center">The Top 33 Coding Bootcamps</p>
              <div class="flex items-center justify-center">
                <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="flex justify-center pb-6 font-serif text-3xl pt-28">
          Get Started With Hack Reactor
        </div>
        <div class="flex justify-center">
          <button class="px-6 py-2 mb-20 text-white ease-in delay-100 bg-blue-500 border-2 border-blue-500 rounded text-md hover:bg-blue-400">
            Learn More about our Admissions Process
          </button>
        </div>
      </div>

      <div class="bg-blue-500 border-2">
        <div class="mx-auto max-w-7xl">
          <div class="flex justify-between w-full py-4">
            <img class="w-36" src={HackReactor2} alt="" />
            <p class="text-base font-semibold text-white">
              Stay current. Stay connected. Sign up for our newsletter!
            </p>
            <button class="px-8 text-white border rounded-sm hover:bg-white hover:text-black">
              Sign Up
            </button>
          </div>
          <hr class="border-white" />

          <div class="flex mt-4">
            <div class="w-1/4 text-white">
              <p class="py-2 font-bold text-white">GET STARTED</p>
              <p class="py-2">Admissions Process</p>
              <p class="py-2">Live Prep Course</p>
              <p class="py-2">Scholarships</p>
              <p class="py-2">Tour</p>
            </div>

            <div class="w-1/4 text-white">
              <p class="py-2 font-bold text-white">COMPANY</p>
              <p class="py-2">About</p>
              <p class="py-2">Careers</p>
              <p class="py-2">Blogs</p>
              <p class="py-2">Regulatory Information</p>
            </div>

            <div class="w-1/4 text-white">
              <p class="py-2 font-bold text-white">MORE</p>
              <p class="py-2">Partnerships</p>
              <p class="py-2">FAQ</p>
              <p class="py-2">Enterprise</p>
            </div>

            <div class="w-1/4 text-white">
              <p class="py-2 font-bold text-white">REVIEWS</p>
              <p class="py-2">Google SwitchUp Yelps Course Report</p>
              <p class="py-2 font-bold text-white">SOCIAL</p>
              <div class="flex justify-between">
                <div class="flex items-center justify-center w-8 h-8 border rounded-full ">
                  <i class="fa fa-facebook"></i>
                </div>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full ">
                  <i class="fa fa-twitter"></i>
                </div>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full ">
                  <i class="fa fa-youtube-square"></i>
                </div>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full ">
                  <i class="fa fa-instagram"></i>
                </div>
                <div class="flex items-center justify-center w-8 h-8 border rounded-full ">
                  <i class="fa fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-blue-500">
        <div class="w-full py-4 mx-auto max-w-7xl">
          <div class="flex justify-between">
            <p class="text-white">© 2021 Galvanize. All rights reserved.</p>
            <p class="ease-in delay-200 hover:text-white">
              Terms / Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwelvethContent;
