import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
  //return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old </p>;
};

export default person;