import React, { Component } from "react";

export class Result extends Component {
  render() {
    const { selectedAnswer, city } = this.props;
    return (
      <div>
        {selectedAnswer === city
          ? "You are absolutely correct!"
          : "You are terribly wrong!"}
      </div>
    );
  }
}
