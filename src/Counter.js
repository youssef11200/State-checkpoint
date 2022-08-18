import React, { Component } from "react";

export class Timeapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeapp: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => {
      this.setState({
        timeapp: this.state.timeapp + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componenetWillUnmount");
  }

  render() {
    return <div>Time app : {this.state.timeapp}</div>;
  }
}

export default Timeapp;
