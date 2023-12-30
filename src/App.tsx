import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Header hidden={hidden} setHidden={setHidden} />
      <Slider />
    </>
  );
}

export default App;
