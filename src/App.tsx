import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Header hidden={hidden} setHidden={setHidden} />
    </>
  );
}

export default App;
