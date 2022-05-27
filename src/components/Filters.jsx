import React from "react";

import { BsToggles2 } from "react-icons/bs";
import { MdBookmarks } from "react-icons/md";

function Filters() {
  return (
    <div className="flex items-center justify-between p-5 mx-40 mt-10">
      <div className="flex items-center space-x-4 text-xl">
        <div className="flex space-x-1 cursor-pointer">
          <h1>Latest</h1>
          <span class="inline-block w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
        </div>
        <h1 className="cursor-pointer">Popular</h1>
        <h1>|</h1>
        <h1 className="text-lg cursor-pointer text-[#FF4E00]">Premium</h1>
        <h1 className="text-lg cursor-pointer text-[#3481EF]">Free</h1>
      </div>
      <div className="flex items-center space-x-4">
        <BsToggles2 className="w-6 h-6 cursor-pointer" />
        <MdBookmarks className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Filters;
