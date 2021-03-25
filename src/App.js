import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!! I'm a React App</h1>
        <p>This is really working</p>
        <Person />
        <Person />
        <Person />
        
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
