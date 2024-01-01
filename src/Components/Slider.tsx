import Carousel, { CarouselItem } from "./Home";
import imgOne from "../assets/image-product-1.jpg";
import imgTwo from "../assets/image-product-2.jpg";
import imgThree from "../assets/image-product-3.jpg";
import imgFour from "../assets/image-product-4.jpg";
import shape from "../assets/Shape.svg";
import minusImg from "../assets/icon-minus.svg";
import plusImg from "../assets/icon-plus.svg";
import { useState } from "react";

export default function Slider() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Carousel>
        <CarouselItem width={""}>
          <img className="image" src={imgOne} alt="Product 1" />
        </CarouselItem>
        <CarouselItem width={""}>
          <img className="image" src={imgTwo} alt="Product 2" />
        </CarouselItem>
        <CarouselItem width={""}>
          <img className="image" src={imgThree} alt="Product 3" />
        </CarouselItem>
        <CarouselItem width={""}>
          <img className="image" src={imgFour} alt="Product 4" />
        </CarouselItem>
      </Carousel>
      <div className="px-[24px] pt-[24px] pb-[88px]">
        <p className="text-[#FF7E1B] text-[12px] font-bold">SNEAKER COMPANY</p>

        <h1 className="text-[#1D2026] text-[28px] font-bold mt-[19px]">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-[#69707D] text-[15px] font-normal mt-[15px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="flex justify-between items-center mt-[28px]">
          <div className="flex justify-center items-center">
            <p className="text-[#1D2026] text-[28px] font-bold">$125.00</p>
            <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex justify-center items-center ml-[16px]">
              <p className="text-[#FF7E1B] text-[16px] font-bold ">50%</p>
            </div>
          </div>
          <p className="text-[#B6BCC8] text-[16px] font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row justify-between items-center w-[327px] h-[56px] bg-[#F6F8FD] p-[24px] mt-[27px] rounded-md  desktop:w-[137px]">
            <button
              onClick={() => {
                {
                  count > 0 ? setCount(count - 1) : "";
                }
              }}
            >
              <img
                src={minusImg}
                alt=""
                className="cursor-pointer  hover:text-[#FFAB6A]"
              />
            </button>
            <strong className="font-kumbh-sans">{count}</strong>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <img
                src={plusImg}
                alt=""
                className="cursor-pointer  hover:text-[#FFAB6A]"
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[16px]">
          <button className="bg-[#FF7E1B] w-[327px] h-[56px] rounded-[10px] flex justify-center items-center gap-[15px] text-[#FFFFFF] text-[16px] bold">
            <img src={shape} alt="cart image for button" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
