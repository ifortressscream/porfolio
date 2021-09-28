import React from "react";

function Header() {
  return (
    <div className="w-full h-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end py-6 my-4 hover:text-indigo-800">
          Mentorship
          <button className="px-4 py-2 ml-2 mr-2 font-medium text-purple-700 ease-in delay-100 border-2 border-purple-700 rounded-full hover:bg-purple-700 hover:text-white">
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
