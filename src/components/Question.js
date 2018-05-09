import React, { Component } from "react";
import "./Question.css";

export class Question extends Component {
  constructor(props, state) {
    super(props);
  }

  renderAnswers() {
    return this.props.answers.map((ans, i) => (
      <button
        key={i}
        className="answer"
        onClick={() => this.props.selectAnswer(ans)}
      >
        {ans}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <div className="question">
          Where is the
          <span className="landmark"> {this.props.landmark.name} </span>located?
        </div>
        <div className="answers">{this.renderAnswers()}</div>
      </div>
    );
  }
}
