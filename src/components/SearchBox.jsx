import React from "react";

import { BiChevronDown } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";

function SearchBox() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center mt-5 bg-white rounded-lg w-[40%] justify-between px-1">
        <div className="flex">
          <button className="flex items-center justify-center p-2 m-2 border-2 border-black rounded-lg">
            Vectors
            <BiChevronDown />
          </button>
          <input
            type="text"
            placeholder="Search Vectors..."
            className="w-full pr-10 ml-4 rounded-lg outline-none"
          />
        </div>
        <div className="flex items-center px-2">
          <RiSearchLine className="w-8 h-8 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
