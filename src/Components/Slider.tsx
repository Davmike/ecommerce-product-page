import Carousel, { CarouselItem } from "./Home";
import imgOne from "../assets/image-product-1.jpg";
import imgTwo from "../assets/image-product-2.jpg";
import imgThree from "../assets/image-product-3.jpg";
import imgFour from "../assets/image-product-4.jpg";

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
    </div>
  );
}
