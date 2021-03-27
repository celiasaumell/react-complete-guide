import React from "react";
import "./UserInputOutput.css";

const input = (props) => {
  return (
    <div className="Input">
      <input type="text" onChange={props.change} value={props.username}></input>
    </div>
  );
};

export default input;
