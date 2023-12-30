import Carousel, { CarouselItem } from "./Home";
import imgOne from "../assets/image-product-1.jpg";
import imgTwo from "../assets/image-product-2.jpg";
import imgThree from "../assets/image-product-3.jpg";
import imgFour from "../assets/image-product-4.jpg";
import buttonCart from "../assets/icon-cart.svg";

export default function Slider() {
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
        <p className="text-[#FF7E1B] text-[12px] bold">SNEAKER COMPANY</p>

        <h1 className="text-[#1D2026] text-[28px] bold mt-[19px]">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-[#69707D] text-[15px] normal mt-[15px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="flex justify-between items-center mt-[28px]">
          <div className="flex justify-center items-center">
            <p className="text-[#1D2026] text-[28px] bold">$125.00</p>
            <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex justify-center items-center ml-[16px]">
              <p className="text-[#FF7E1B] text-[16px] bold ">50%</p>
            </div>
          </div>
          <p className="text-[#B6BCC8] text-[16px] bold">$250.00</p>
        </div>

        <div className="flex justify-center items-center mt-[27px]">
          <input
            className="bg-[#F6F8FD] h-[56px] rounded-[10px] outline-none w-[327px]"
            type="number"
            placeholder="0"
          />
        </div>

        <div className="flex justify-center items-center mt-[16px]">
          <button className="bg-[#FF7E1B] w-[327px] h-[56px] rounded-[10px] flex justify-center items-center gap-[15px] text-[#FFFFFF] text-[16px] bold">
            <img src={buttonCart} alt="cart image for button" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
