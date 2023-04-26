import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title";
import POPOSList from "./POPOSList";
import Footer from "./Footer";

function App() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer year={year} />
    </div>
  );
}

export default App;
