import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

function App() {
  const [hidden, setHidden] = useState(false);
  const [cart, setCart] = useState<boolean>(false);

  return (
    <>
      <Menu hidden={hidden} setHidden={setHidden} />
      <Header
        hidden={hidden}
        setHidden={setHidden}
        cart={cart}
        setCart={setCart}
      />
      <Cart cart={cart} />
      <Slider />
    </>
  );
}

export default App;
