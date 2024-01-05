import Slider from "../Components/Slider";
import close from "../assets/icon-close.svg";
import { LightBoxProps } from "../types";

export default function LightBox({
  showLightBox,
  setShowLightBox,
  children,
}: LightBoxProps) {
  return (
    showLightBox && (
      <div>
        <img
          className="hidden xl:block xl:absolute xl:top-[23%] xl:left-[60%] xl:w-[25px]"
          src={close}
          alt=""
        />

        <div className="flex justify-center items-center absolute top-[50%] left-[50%]">
          <div
            className="hidden xl:block xl:fixed xl:inset-0 xl:bg-black xl:opacity-75 xl:z-20"
            onClick={() => {
              setShowLightBox(!showLightBox);
            }}
          ></div>
          <div className="text-red-500 text-4xl cursor-pointer z-30 absolute">
            <Slider
              showLightBox={showLightBox}
              setShowLightBox={setShowLightBox}
              children={children}
              count={0}
              setCount={function (): void {
                throw new Error("Function not implemented.");
              }}
              setTotal={function (): void {
                throw new Error("Function not implemented.");
              }}
              totalBuying={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    )
  );
}
