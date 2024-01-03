import logo from "../assets/logo.svg";
import cartImage from "../assets/icon-cart.svg";
import profile from "../assets/image-avatar.png";
import { SetStateAction } from "react";

// StyledBurger component
const StyledBurger = ({ setHidden, hidden }: StyledBurgerProps) => (
  <button
    className={`flex flex-col justify-around  w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-40 focus:outline-none`}
    onClick={() => setHidden(!hidden)}
  >
    <div
      className={`w-6 h-1 bg-[#69707D] rounded-md transition-all duration-300 ease-in-out mt-[7px] ${
        hidden ? "transform rotate-45 translate-y-2" : "transform rotate-0"
      }`}
    ></div>
    <div
      className={`w-6 h-1 bg-[#69707D] rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "opacity-0" : "opacity-1"
      }`}
    ></div>
    <div
      className={`w-6 h-1 bg-[#69707D] rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "transform -rotate-45 -translate-y-2" : "transform rotate-0"
      }`}
    ></div>
  </button>
);

export default function Header({
  setHidden,
  hidden,
  cart,
  setCart,
  total,
  count,
}: MyComponentProps) {
  return (
    <header className="relative">
      <div className="flex justify-between items-center bg-[white] px-[24px] pt-[20px] pb-[28px]">
        <div className="flex items-center">
          <StyledBurger
            setHidden={setHidden}
            hidden={hidden}
            cart={false}
            setCart={function (_cart: boolean): void {
              throw new Error("Function not implemented.");
            }}
            total={0}
            setTotal={undefined}
            count={0}
            setCount={function (value: SetStateAction<number>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <img
            className="w-[137px] h-[28px] ml-[10px]"
            src={logo}
            alt="logo of sneakers"
          />
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
            className="w-[24]px] h-[24px] ml-[22px]"
            src={profile}
            alt="here is profile icon"
          />
        </div>
      </div>
    </header>
  );
}
