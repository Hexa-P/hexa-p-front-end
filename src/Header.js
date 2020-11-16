import './App.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>

          {/* --------------------------------------------------------------------- */}

          <h1>Oregon Environmental Data Initiative</h1>

          <Link to="/mapchart">Map</Link>
          <Link to="/tempchart">your chart</Link>

          {/* --------------------------------------------------------------------- */}

        </header>
      </div>
    )
  }
}
