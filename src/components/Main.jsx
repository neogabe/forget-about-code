import React, { Component } from 'react';
import '../styles/main.css';
import Description from './Description';
import Title from './Title';

export default class Main extends Component {
  render() {
    return (
      <div id='main-container'>
        <Title/>
        <Description />
      </div>
    )
  }
}
