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
  const [total, setTotal] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [showLightBox, setShowLightBox] = useState<boolean>(false);

  const totalBuying = () => {
    setTotal(count);
  };

  return (
    <>
      <Menu hidden={hidden} setHidden={setHidden} />
      <Header
        hidden={hidden}
        setHidden={setHidden}
        cart={cart}
        setCart={setCart}
        total={total}
        count={count}
      />
      <DesktopHeader
        cart={cart}
        setCart={setCart}
        total={total}
        count={count}
      />
      <Cart cart={cart} total={total} count={count} />
      <Slider
        count={count}
        setCount={setCount}
        setTotal={setTotal}
        totalBuying={totalBuying}
        showLightBox={showLightBox}
        setShowLightBox={setShowLightBox}
        hidden={hidden}
        setHidden={setHidden}
        cart={cart}
        total={total}
        number={number}
        setNumber={setNumber}
        setCart={setCart}
        children={undefined}
      />
      <LightBox
        showLightBox={showLightBox}
        setShowLightBox={setShowLightBox}
        children={undefined}
      />
    </>
  );
}

export default App;
