import React, { Component } from "react";
import { Question } from "./components/Question";
import { Result } from "./components/Result";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/result" component={Result} />
          <Route path="/" component={Question} />
        </Switch>
      </div>
    );
  }
}

export default App;
