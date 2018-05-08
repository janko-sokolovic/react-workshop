import React, { Component } from "react";
import { Question } from "./components/Question";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question />
      </div>
    );
  }
}

export default App;
