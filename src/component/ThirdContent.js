import React from "react";
import Images from "../images/images.png";

function ThirdContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-2xl font-bold text-center">My Recent Work</div>
      <div className="p-4 text-sm text-center">
        Here are a few design projects I've worked on recently. Want to see
        more? <span className="font-semibold text-purple-700">Email me.</span>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-3 gap-4 h-96">
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur">
              High-end, custom residential
              <p>renovaters serving Fraser </p>
              <p>Valley homeowners.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700 ">
                View Project &#62;
              </button>
            </div>
          </div>
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur ">
              Uniting First Nations culture
              <p>and community through winter</p>
              <p>sports competition.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700 ">
                View Project &#62;
              </button>
            </div>
          </div>
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur ">
              Blockchain pioneers bringing
              <p>transparency, trust, and</p>
              <p>security to supply.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700 ">
                View Project &#62;
              </button>
            </div>
          </div>
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur">
              Business savvy tech experts
              <p>helping forward thinking</p>
              <p>companies get things done.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700">
                View Project &#62;
              </button>
            </div>
          </div>
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur">
              Vancouver's tower crane rental
              <p>service and support leader</p>
              <p>since 1974.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700">
                View Project &#62;
              </button>
            </div>
          </div>
          <div className="rounded-xl image_main">
            <img className="w-full h-full rounded-xl" src={Images} alt="" />
            <div className="p-2 font-semibold image_overlay image_overlay_blur">
              Results-oriented, responsive
              <p>and flexible full service civil</p>
              <p>engineering firm.</p>
              <button className="px-4 py-2 my-4 text-sm font-semibold border-2 border-indigo-700 rounded-full hover:bg-indigo-700">
                View Project &#62;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdContent;
