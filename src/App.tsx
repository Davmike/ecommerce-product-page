import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

function App() {
  const [hidden, setHidden] = useState(false);
  const [cart, setCart] = useState<boolean>(false);
  const [total, setTotal] = useState<number | undefined>(0);
  const [number, setNumber] = useState<number>();
  const [count, setCount] = useState(0);

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
      />
      <Slider
        count={count}
        setCount={setCount}
        setTotal={setTotal}
        totalBuying={totalBuying}
      />
    </>
  );
}

export default App;
