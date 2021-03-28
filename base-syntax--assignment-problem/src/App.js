import React, { Component } from 'react';
import './App.css';
import UserInput from "./User/Input" 
import UserOutput from "./User/Output"

class App extends Component {
  state = {
    username: "musicbox"
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    const style= {
      textAlign: "center"
    }
    return (
      <div className="App" style={style}>
        <p>Input Your Username</p>
        <UserInput username={this.state.username} change={this.changeUsernameHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username="csaumell"/>
      </div>
    );
  }
}

export default App;
