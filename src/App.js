import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ce", age: 28 },
      { name: "Stephanie", age: 23 },
      { name: "Moises", age: 21 },
    ],
  };

  switchNameHandler = () => {
    //console.log("was clicked!");
    // DONT DO THIS this.state.persons[0].name = "Celia Saumell"
    this.setState({
      persons: [
        { name: "Celia Saumell", age: 28 },
        { name: "Stephanie", age: 101 },
        { name: "Moises", age: 21 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: Reading
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // The above JSX code gets compiled into this code below
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
