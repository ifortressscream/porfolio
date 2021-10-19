import React from "react";
import Hero from "../../images/hack/hero.jpg";
import Prep from "../../images/hack/prep.jpg";
import Scholarships from "../../images/hack/scholarships.jpg";

function SeventhContent() {
  return (
    <div>
      <div>
        <div class="flex justify-center py-16 font-serif text-3xl">
          Our Bootcamps
        </div>
      </div>

      <div>
        <div class="mx-auto max-w-7xl">
          <div class="flex w-full">
            <div class="w-full">
              <div>
                <div class="h-80">
                  <img class="w-full h-full" src={Hero} alt="" />
                </div>
                <div class="flex flex-col items-center justify-between py-4 border-2 shadow-lg shadow-2xl h-96">
                  <div class="flex flex-col items-center justify-center">
                    <p class="text-3xl">Onsite</p>
                    <p class="mt-4 text-2xl">12 WEEKS FULL TIME</p>
                    <p class="p-6 text-left">
                      Join HackReactor’s Software Engineering Immersive at one
                      of the Galvanize campuses across the nation.
                    </p>
                  </div>
                  <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="mx-4">
                <div class="h-80">
                  <img class="w-full h-full" src={Prep} alt="" />
                </div>
                <div class="flex flex-col items-center justify-between py-4 border-2 shadow-lg h-96">
                  <div class="flex flex-col items-center justify-center">
                    <p class="text-3xl">Online</p>
                    <p class="mt-4 text-2xl">12 WEEKS FULL TIME</p>
                    <p>(Online)</p>
                    <p class="p-6 text-left">
                      Reinvent your career remotely with our Hack Reactor
                      Software Engineering Online Immersive, which directly
                      mirrors our in-person program.
                    </p>
                  </div>
                  <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div>
                <div class="h-80">
                  <img class="w-full h-full" src={Scholarships} alt="" />

                  <div class="flex flex-col items-center justify-between py-4 border-2 shadow-lg h-96">
                    <div class="flex flex-col items-center justify-center">
                      <p class="text-3xl">Online Part-Time</p>
                      <p class="mt-4 text-2xl">9 Months Part-Time</p>
                      <p>(Online)</p>
                      <p class="p-6 text-left">
                        Take the exact same Hack Reactor coding bootcamp
                        after-hours, live online, without having to quit your
                        day job.
                      </p>
                    </div>
                    <button class="text-blue-400 ease-in delay-100 border border-2 border-blue-300 border-blue-400 w-72 h-14 hover:bg-blue-400 hover:text-white">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-20"></div>
        </div>
      </div>
    </div>
  );
}

export default SeventhContent;
