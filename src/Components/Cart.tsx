import cartImg from "../assets/image-product-1-thumbnail.jpg";
import trash from "../assets/icon-delete.svg";
import { useState } from "react";

export default function Cart({ cart, total, count }: CartProps) {
  const [num] = useState(125);

  return (
    <div className="px-[8px] pt-[8px] pb-[36px] flex fixed right-0 z-10 flex-row-reverse">
      {cart && (
        <div className="bg-[#FFFFFF] rounded-[10px] h-[256px] w-[360px]">
          <p className="text-[#1D2026] text-[16px] font-bold pt-[24px] pl-[24px]">
            Cart
          </p>
          <hr className="bg-[#E4E9F2] h-[1px] mt-[27px]" />
          {count === 0 ? (
            <p className="flex justify-center items-center mt-[77px] text-[#69707D] text-[16px] font-bold ">
              Your cart is empty.
            </p>
          ) : (
            <div className="px-[24px] pt-[24px] pb-[32px]">
              <div className="flex">
                <img
                  className="w-[50px] h-[50px] rounded-[4px]"
                  src={cartImg}
                  alt=""
                />
                <div className="flex flex-col ml-[16px]">
                  <p className="text-[#69707D] text-[16px] font-normal">
                    Fall Limited Edition Sneakers
                  </p>
                  <div className="flex flex-row">
                    <p className="text-[#69707D] text-[16px] font-normal">
                      ${num}
                    </p>
                    <p className="font-kumbh-sans text-[#69707D]">x</p>
                    <p className="font-kumbh-sans text-[#69707D]">{total}</p>
                    <p className="text-[#1D2026] text-[16px] font-bold ml-[5px]">
                      ${num * total}
                    </p>
                    <img
                      className="absolute right-[8%] top-[42%]"
                      src={trash}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <button className="bg-[#FF7E1B] h-[56px] w-[312px] rounded-[10px] mt-[24px] text-[white] text-[16px] font-bold">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
