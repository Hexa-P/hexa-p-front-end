import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import USMapChart from './USMapChart.js';
import OregonMap from './OregonMap.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import ChartTemplate from './ChartTemplate.js'
import './App.css';

// -----------------------------------------------------------------------------------

export default class App extends Component {
  render() {
    return (
      <div className="body">
        <Router>

          {/* ----------------------------------------------------------------------------------------- */}

          <Header />

          {/* ----------------------------------------------------------------------------------------- */}

          <Switch>
            <Route
              // location=
              path="/home"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/mapchart"
              exact
              render={(routerProps) => <OregonMap {...routerProps} />}
            />
            <Route
              path="/tempchart"
              exact
              render={(routerProps) => <ChartTemplate {...routerProps} />}
            />
            {/* <PrivateRoute
              token={this.state.token}
              exact
              path='/favorites'
              render={(routerProps) =>
                <Favorites {...routerProps} token={this.state.token} />} /> */}
          </Switch>

          {/* ------------------------------------------------------------------------------------------ */}

          <Footer />

          {/* ------------------------------------------------------------------------------------------ */}

        </Router>
      </div>
    )
  }
}