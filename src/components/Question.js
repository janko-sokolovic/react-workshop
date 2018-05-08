import React, { Component } from "react";

import "./Question.css";

export class Question extends Component {
  render() {
    return (
      <div>
        <div className="question">
          Where is the <span className="landmark"> Allianz Arena?</span>
        </div>
        <div className="answers">
          <button className="answer">Answer 1</button>
          <button className="answer">Answer 2</button>
          <button className="answer">Answer 3</button>
          <button className="answer">Answer 4</button>
        </div>
      </div>
    );
  }
}
