import React from "react";
import logo from "../assets/logo.svg";
import cartImage from "../assets/icon-cart.svg";
import profile from "../assets/image-avatar.png";

export default function DesktopHeader({ cart, setCart, total, count }) {
  return (
    <header className="hidden xl:block px-[165px] pt-[28px]">
      <div className="flex justify-between items-center bg-[white] px-[24px] pt-[20px] pb-[28px]">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <img
              className="w-[137px] h-[28px] ml-[10px]"
              src={logo}
              alt="logo of sneakers"
            />
          </div>
          <div className="flex gap-[32px] ml-[56px]">
            <p className="text-[#69707D] text-[15px] font-normal">
              Collections
            </p>
            <p className="text-[#69707D] text-[15px] font-normal">Men</p>
            <p className="text-[#69707D] text-[15px] font-normal">Women</p>
            <p className="text-[#69707D] text-[15px] font-normal">About</p>
            <p className="text-[#69707D] text-[15px] font-normal">Contact</p>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="bg-[#FF7E1B] w-[19px] h-[13px] rounded-[6.5px] text-[white] text-[10px] font-bold flex justify-center items-center absolute top-[-2px] left-[99px]">
            {count && total > 0 ? total : 0}
          </div>
          <img
            className="w-[21px] h-[20px] ml-[89px] cursor-pointer"
            src={cartImage}
            alt="here is cart icon"
            onClick={() => setCart?.(!cart)}
          />
          <img
            className="w-[50px] h-[50px] ml-[22px]"
            src={profile}
            alt="here is profile icon"
          />
        </div>
      </div>
      <hr className="bg-[#E4E9F2]" />
    </header>
  );
}
