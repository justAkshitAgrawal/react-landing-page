import React from "react";

import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";

function Header() {
  return (
    <header className="p-5 mx-40">
      <nav>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5 font-light">
            <img
              src="https://camo.githubusercontent.com/8d44f40678140db7f06e1bdc24e5f33bf59b9e90c14a4e960f419623065b548e/68747470733a2f2f692e6962622e636f2f6e734c59594d562f70702e706e67"
              alt="Logo"
              className="rounded-full cursor-pointer w-14"
            />
            <h1 className="text-gray-600 cursor-pointer">Vectors</h1>
            <h1 className="text-gray-600 cursor-pointer">Photos</h1>
            <h1 className="text-gray-600 cursor-pointer">PSD</h1>
            <h1 className="text-gray-600 cursor-pointer">Video</h1>
            <h1 className="flex items-end space-x-1 font-bold cursor-pointer">
              More <AiFillCaretDown />{" "}
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <button className="flex items-center justify-center px-4 py-2 mr-5 text-gray-400 border-2 border-gray-400 rounded-lg">
              <AiOutlinePlus className="w-6 pr-2" />
              Submit
            </button>
            <img
              src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_sq.jpg"
              alt=""
              className="rounded-full shadow-xl cursor-pointer w-9"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
              alt=""
              className="w-10 rounded-full shadow-xl cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
