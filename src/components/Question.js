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
    const randomLandmark = _.sample(landmarks);
    const randomIncorrectAnswers = _.sampleSize(cities, 3);

    const allAnswers = _.shuffle(
      randomIncorrectAnswers.concat(randomLandmark.city)
    );

    return (
      <div>
        <div className="question">
          Where is the <span className="landmark"> {randomLandmark.name} </span>{" "}
          located?
        </div>
        <div className="answers">{this.renderAnswers(allAnswers)}</div>
      </div>
    );
  }
}
