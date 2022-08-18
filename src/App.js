import React, { Component } from "react";
import Timeapp from "./Counter";
import "./App.css";
import Button from "@mui/material/Button";

export class youssef extends Component {
  state = {
    person: {
      Fullname: "   Youssef Nasser  ",
      BIO: " Html is Done / CSS is Done  Javascript is Done ",
      profession: "web developper & technicien genie civil ",
      img: (
        <img
          src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/131317766_215550233414658_123446734089239072_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=y7zHgmiT8VcAX-hwbJC&_nc_ht=scontent.ftun16-1.fna&oh=00_AT9-lILcGQae-4f5EHqnkk6lZ5G6q4W2RqyRBNYg_ALsIw&oe=631C33AC"
          alt=""
          height={340}
          width={250}
        />
      ),
    },
    show: true,
  };
  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => {
      this.setState({
        timeapp: this.state.timeapp + 1,
      });
    }, 100);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  tuggel = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };

  render() {
    return (
      <div className="container">
        {this.state.show ? (
          <div
            className="onbio"
            style={{
              border: "none",
              borderRaduis: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="img">{this.state.person.img}</div>
            <h2
              style={{
                fontFamily: "Franklin Gothic Medium",
                marginLeft: "50px",
              }}
            >
              {this.state.person.Fullname}
            </h2>
            <h5> {this.state.person.BIO} </h5>
            <h5> {this.state.person.profession} </h5>

            <Button
              className="showbtn"
              variant="outlined"
              onClick={() => this.tuggel()}
            >
              <b>Hide</b>
            </Button>
          </div>
        ) : (
          <Button variant="outlined" onClick={() => this.tuggel()}>
            <b>show</b>
          </Button>
        )}
        {this.state.show ? <Timeapp /> : null}
      </div>
    );
  }
}

export default youssef;
