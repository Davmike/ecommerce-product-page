import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Home";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import DesktopHeader from "./Components/DesktopHeader";
import LightBox from "./Components/LightBox";

function App() {
  const [hidden, setHidden] = useState(false);
  const [cart, setCart] = useState<boolean>(false);
  const [total, setTotal] = useState<number | undefined>(0);
  const [number, setNumber] = useState<number>();
  const [count, setCount] = useState<number>(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const totalBuying = () => {
    setTotal(count);
  };

  // const handleClose = () => {
  //   setShowLightBox(showLightBox);
  // };

  return (
    <>
      <Menu hidden={hidden} setHidden={setHidden} />
      <Header
        hidden={hidden}
        setHidden={setHidden}
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
        count={count}
        setCount={setCount}
      />
      <DesktopHeader
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
        count={count}
        setCount={setCount}
      />
      <Cart
        cart={cart}
        total={total}
        setTotal={setTotal}
        number={number}
        setNumber={setNumber}
        count={count}
      />
      <Slider
        count={count}
        setCount={setCount}
        setTotal={setTotal}
        totalBuying={totalBuying}
        // handleClose={handleClose}
        showLightBox={showLightBox}
        setShowLightBox={setShowLightBox}
      />
      <LightBox showLightBox={showLightBox} setShowLightBox={setShowLightBox} />
    </>
  );
}

export default App;
