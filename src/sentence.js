import React, { Component } from "react";

class Randomstrings extends Component {
  constructor() {
    super();
    this.state = {
      sport: "",
    };
  }

  Array = [
    "curious student π§ͺ",
    "social impact leader π",
    "digital artist π¨",
    "horseback rider π",
    "traditional Chinese dancer π",
    "sisterπ―ββοΈ",
  ];

  componentDidMount() {
    setInterval(() => {
      this.setState({
        sport: this.Array[Math.floor(Math.random() * this.Array.length)],
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.sport}</div>;
  }
}

export default Randomstrings;
