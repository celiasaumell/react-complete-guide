import React from "react";
import './Person.css';
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
  //return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old </p>;
};

export default person;
