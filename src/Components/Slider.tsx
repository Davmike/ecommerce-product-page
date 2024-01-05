import React, { ReactNode, useState } from "react";
import { useSwipeable } from "react-swipeable";
import arrowRight from "../assets/icon-next.svg";
import arrowLeft from "../assets/icon-previous.svg";
import imageOne from "../assets/image-product-1.jpg";
import imageTwo from "../assets/image-product-2.jpg";
import imageThree from "../assets/image-product-3.jpg";
import imageFour from "../assets/image-product-4.jpg";

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

const Carousel = ({
  children,
  showLightBox,
  setShowLightBox,
}: {
  children: ReactNode;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const ProductImage = [imageOne, imageTwo, imageThree, imageFour];

  const [mainImage, setMainImage] = useState(imageOne);

  return (
    <div className="flex justify-center items-center flex-col gap-[16px]">
      <div {...handlers} className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <img
            src={mainImage}
            alt="main"
            style={{ width: "100%" }}
            className="hidden xl:block xl:absolute"
            onClick={() => {
              setShowLightBox(!showLightBox);
            }}
          />
          {React.Children.map(children, (child: any) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="indicators">
          <div className="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center">
            <button onClick={() => updateIndex(activeIndex - 1)}>
              <img src={arrowLeft} alt="turn image left" />
            </button>
          </div>
          <div className="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center">
            <button onClick={() => updateIndex(activeIndex + 1)}>
              <img src={arrowRight} alt="turn image right" />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex">
        {ProductImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-[88px] h-[88px] mr-4 cursor-pointer"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
