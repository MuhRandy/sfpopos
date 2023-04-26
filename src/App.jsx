import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title";
import POPOSList from "./POPOSList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
      <POPOSList />
    </div>
  );
}

export default App;
