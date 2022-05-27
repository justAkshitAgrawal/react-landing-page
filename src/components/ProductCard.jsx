import React from "react";
import { TiLockClosedOutline } from "react-icons/ti";
import { BiDownload } from "react-icons/bi";
import { RiLockUnlockLine } from "react-icons/ri";

function ProductCard({ title, image, free, imp }) {
  return (
    <div className={`p-4 w-fit`}>
      <div
        className={
          imp
            ? `flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg drop-shadow-2xl`
            : `flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg`
        }
      >
        <div className="inline-flex bg-gray-200 ">
          <img src={image} alt="" className="rounded-lg h-52 w-52" />
        </div>
        <div className="flex items-end space-x-3 text-3xl">
          {title.charAt(0).toUpperCase()}
          <span className="text-xl text-gray-500">{title.substring(1)}</span>
          {!free ? <TiLockClosedOutline /> : <RiLockUnlockLine />}
        </div>
        <div className="flex items-center space-x-4 text-xl cursor-pointer">
          <span className="underline">Download</span>
          <BiDownload className="ml-2" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
