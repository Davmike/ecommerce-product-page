import React, { ReactNode, useState } from "react";
import { useSwipeable } from "react-swipeable";
import arrowRight from "../assets/icon-next.svg";
import arrowLeft from "../assets/icon-previous.svg";

export const CarouselItem = ({
  children,
  width,
}: {
  children: ReactNode;
  width: string;
}) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

// here i add image change code which controled if image change or not
const Carousel = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // here i add sensor slider for mobile and other device
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {/* first image which turn image left*/}
        <div className="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center">
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <img src={arrowLeft} alt="turn image left" />
          </button>
        </div>
        {/* second image which turn image right*/}
        <div className="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center">
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <img src={arrowRight} alt="turn image right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
