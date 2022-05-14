import React, { Component } from "react";
import "../styles/background.css";
import Main from "./Main";
import Navbar from "./Navbar";

export default class Background extends Component {
  render() {
    return (
      <>
        <div id="background">
          <div id="background-cover">
            <Navbar />
            <Main/>
          </div>
        </div>
      </>
    );
  }
}
