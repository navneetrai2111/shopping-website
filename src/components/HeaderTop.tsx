import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitterX />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b>THIS WEEK ORDER OVER -$55
          </div>

          <div className="flex gap-4">
            {/* currency drop down */}
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              id="currency"
              name="currency"
            >
              {/* <option value="">Select Currency</option> */}
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>
            {/* launguage drop down */}
            <select
              className="text-gray-500 text-[12px w-[80px]"
              id="language"
              name="language"
            >
              {/* <option value="">Select Language</option> */}
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
