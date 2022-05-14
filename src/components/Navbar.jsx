import React, { Component } from "react";
import "../styles/navbar.css";
import 'animate.css';

export default class Navbar extends Component {
  render() {
    return(
      <>
      <ul id="navbar-container">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>About</li>
        <li>Find us</li>
      </ul>
      </>
    );
  }
}