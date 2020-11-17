import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import OregonMap from './OregonMap.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import ChartTemplate from './ChartTemplate.js';
import './App.css';
import SignUpPage from './SignUpPage.js';


// -----------------------------------------------------------------------------------
export default class App extends Component {

state= {
  username: localStorage.getItem('USERNAME') || '',
  token: localStorage.getItem('TOKEN') || '',
}

// -----------------------------------------------------------------------------------

setTokenAndName=(username, token) => {
  localStorage.setItem('TOKEN', token);
  localStorage.setItem('USERNAME', username);

  this.setState({
    username: username,
    token: token
  })
}

// -----------------------------------------------------------------------------------

logOut = () => {
  localStorage.setItem('TOKEN', '');
  localStorage.setItem('USERNAME', '');

  this.setState({
    username: '',
    token: ''
  })

}

// -----------------------------------------------------------------------------------

  render() {
    return (
      <div className="body">
        <Router>

          {/* ----------------------------------------------------------------------------------------- */}

          <Header />

          {/* ----------------------------------------------------------------------------------------- */}

          <Switch>
            <Route
              path="/"
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

            <Route 
            path='/signup'
            exact 
            render={
              (routerProps) =>
                <SignUpPage
                {...routerProps}
                setTokenAndName={this.setTokenAndName} 
                />
            }
            />    
          </Switch>

          {/* ------------------------------------------------------------------------------------------ */}

          <Footer />

          {/* ------------------------------------------------------------------------------------------ */}

        </Router>
      </div>
    )
  }
}