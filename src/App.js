import React, { Component } from 'react';
import USMapChart from './USMapChart.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className = "body">
        <USMapChart/>
      </div>
    )
  }
}
