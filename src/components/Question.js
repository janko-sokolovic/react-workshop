import React, { Component } from "react";
import _ from "lodash";
import landmarks from "../data/landmarks";
import cities from "../data/cities";
import "./Question.css";

export class Question extends Component {
  renderAnswers(answers) {
    const answerElements = answers.map((ans, i) => (
      <button key={i} className="answer">
        {ans}
      </button>
    ));

    return answerElements;
  }

  render() {
    const landmark = _.sample(landmarks);
    const correctCity = landmark.city;

    const incorrectCities = _.sampleSize(_.without(cities, correctCity), 3);

    const allAnswers = _.shuffle(incorrectCities.concat(correctCity));

    return (
      <div>
        <div className="question">
          Where is the <span className="landmark"> {landmark.name} </span>located?
        </div>
        <div className="answers">{this.renderAnswers(allAnswers)}</div>
      </div>
    );
  }
}
