import React, { Component } from "react";
import { Question } from "./components/Question";
import { Result } from "./components/Result";
import { Route, Switch, withRouter } from "react-router-dom";
import landmarks from "./data/landmarks";
import cities from "./data/cities";
import _ from "lodash";
import "./App.css";

class App extends Component {
  constructor(props, state) {
    super(props);

    const landmark = _.sample(landmarks);
    const correctCity = landmark.city;
    const incorrectCities = _.sampleSize(_.without(cities, correctCity), 3);
    const answers = _.shuffle(incorrectCities.concat(correctCity));

    this.state = {
      answers,
      landmark,
      selectedAnswer: ""
    };
  }

  selectAnswer(selectedAnswer) {
    this.setState({ selectedAnswer });
    this.props.history.push("/result");
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/result"
            render={() => (
              <Result
                landmark={this.state.landmark}
                selectedAnswer={this.state.selectedAnswer}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <Question
                answers={this.state.answers}
                landmark={this.state.landmark}
                selectAnswer={this.selectAnswer.bind(this)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
