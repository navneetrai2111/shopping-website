import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMin = () => {
  return (
    <div className="border-b border-gray-300 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="mb-3 md:mb-0 font-bold text-3xl text-center  sm:pb-0 text-black">
          Logo
        </div>
        <div className="w-full sm:w-[30px] md:w-[70%] relative">
          <input
            id="search-input"
            name="search"
            placeholder="Search..."
            type="text"
            className="border border-blue-gray-200 rounded-lg w-full p-2 px-4"
          />
          <BsSearch
            className="absolute right-0 top-3 mr-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="hidden lg:flex text-gray-500 gap-4 text-[30px">
          <BiUser size={24} />

          <div className="relative">
            <FiHeart size={24} />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag size={24} />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMin;
