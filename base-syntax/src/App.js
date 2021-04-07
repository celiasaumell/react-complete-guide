import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { Button, Container } from "./Button/Button";
import styled, { css } from "styled-components";

const PersonStyled = styled.div`
  @media (min-width: 500px) {
    width: 450px;
    margin: auto;
  }
`;
class App extends Component {
  state = {
    persons: [
      { id: "kasjdalk1", name: "Max", age: 28 },
      { id: "kasjdalk2", name: "Manu", age: 29 },
      { id: "kasjdalk3", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <PersonStyled>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </PersonStyled>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes =['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        <Container>
          <Button primary onClick={this.togglePersonHandler}>
            {" "}
            Hello!
          </Button>
        </Container>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;