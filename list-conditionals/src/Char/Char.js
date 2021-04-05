import React from "react";
import "./Char.css";
const char = (props) => {
  return (
    <div className="Char" onClick={props.click}>
      <p>{props.output}</p>
    </div>
  );
  //return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old </p>;
};

export default char;
