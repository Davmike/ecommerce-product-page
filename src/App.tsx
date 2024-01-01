import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Menu from "./Components/Menu";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Menu hidden={hidden} setHidden={setHidden} />
      <Header hidden={hidden} setHidden={setHidden} />
      <Slider />
    </>
  );
}

export default App;
