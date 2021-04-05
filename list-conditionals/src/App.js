import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    input: "",
  };

  textChangeHandler = (event, index) => {
    const input = event.target.value;
    this.setState({
      input: input,
    });
  };

  deleteCharHandler = (index) => {
    const input = this.state.input.split("");
    input.splice(index, 1);
    const newInput = input.join("");
    this.setState({ input: newInput });
  };

  render() {
    let output = null;

    if (this.state.input) {
      output = this.state.input.split("");

      output = (
        <div>
          {output.map((char, index) => {
            return (
              <Char click={() => this.deleteCharHandler(index)} output={char} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.input}
        ></input>
        <p>{this.state.input}</p>
        <Validation length={this.state.input.length} />
        {output}
      </div>
    );
  }
}

export default App;
