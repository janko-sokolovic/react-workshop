import React, { Component } from "react";
import { Question } from "./components/Question";
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
