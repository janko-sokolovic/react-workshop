import React, { Component } from "react";

import "./Result.css";
export class Result extends Component {
  render() {
    const { selectedAnswer, city } = this.props;
    return (
      <div className="result">
        {selectedAnswer === city
          ? "You are absolutely correct!"
          : "You are terribly wrong!"}
      </div>
    );
  }
}
