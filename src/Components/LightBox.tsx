import React from "react";
import Slider from "../Components/Slider";
import close from "../assets/icon-close.svg";

export default function LightBox({ showLightBox, setShowLightBox }) {
  return (
    !showLightBox && (
      <div>
        <img
          className="absolute top-[23%] left-[60%] w-[25px]"
          src={close}
          alt=""
        />

        <div className="flex justify-center items-center absolute top-[50%] left-[50%]">
          <div
            className="fixed inset-0 bg-black opacity-75 z-20"
            onClick={() => {
              setShowLightBox(!showLightBox);
            }}
          ></div>
          <div
            className="text-red-500 text-4xl cursor-pointer z-30 absolute"
            onClick={() => {
              setShowLightBox(!showLightBox);
            }}
          >
            <Slider />
          </div>
        </div>
      </div>
    )
  );
}
