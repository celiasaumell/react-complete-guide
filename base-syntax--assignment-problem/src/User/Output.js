import React from "react";
import "./UserInputOutput.css"
const output = (props) => {
  return (
    <div className="Output">
      <p>Hello there, {props.username}!</p>
      <p>How are you?</p>
    </div>
  );
};

export default output;
