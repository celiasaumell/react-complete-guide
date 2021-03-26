import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ce", age: 28 },
      { name: "Stephanie", age: 23 },
      { name: "Moises", age: 21 },
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("was clicked!");
    // DONT DO THIS personsState.[0].name = "Celia Saumell"
    setPersonsState({
      persons: [
        { name: "Celia Saumell", age: 28 },
        { name: "Stephanie", age: 101 },
        { name: "Moises", age: 21 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi!! I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My Hobbies: Reading
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // The above JSX code gets compiled into this code below
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
