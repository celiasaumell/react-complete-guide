import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app running////////");
  const buttonHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevShowP) => !prevShowP);
      console.log(Math.random())
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={buttonHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Toggle Allow</Button>
    </div>
  );
}

export default App;
