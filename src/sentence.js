import React, { Component } from "react";

class Randomstrings extends Component {
  constructor() {
    super();
    this.state = {
      sport: "",
    };
  }

  Array = [
    "curious student 🧪",
    "social impact leader 🌍",
    "digital artist 🎨",
    "horseback rider 🐎",
    "traditional Chinese dancer 💃",
    "sister👯‍♀️",
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
