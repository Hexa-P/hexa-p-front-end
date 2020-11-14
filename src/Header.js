import './App.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>This is your HEXA-P header. isn't it lovely?</h1>
          <Link to="/mapchart">Check out our lovely map</Link>
        </header>
      </div>
    )
  }
}
