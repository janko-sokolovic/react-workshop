import React, { Component } from "react";

export class Result extends Component {
  render() {
    if (this.props.selectedAnswer === this.props.landmark.city) {
      return <div>You are absolutely correct!</div>;
    } else {
      return <div> You are terribly wrong!</div>;
    }
  }
}
