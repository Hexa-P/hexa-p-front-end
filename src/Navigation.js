import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default class Navigation extends Component {

    handleLogOut = async () => {

        await this.props.logOut();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="navbar">
                            <NavLink className="link" to="/Home">Home</NavLink>
                            <NavLink className="link" to="/mapchart">Map</NavLink>
                            <NavLink className="link" to="/tempchart">Chart</NavLink>
                            <NavLink className="link" to="/aboutUs">About the Developers</NavLink>
                    {  
                    this.props.token
                        ?
                        // I might be missing something, but it seems like this is the only stuff that actually hinges on the token
                            <div className="logged-in">
                                <NavLink className="link" to="/userprofile">User Profile</NavLink>
                                <span className="logout">
                                    <button className="logger-out" onClick={this.handleLogOut}>Log out</button>
                                </span>
                            </div>

                        : <div className="righty-oh">
                        <NavLink className="link" to="/signup">Sign Up</NavLink>
                        <NavLink className="link" to="/login">Login</NavLink>
                    </div>
                }
                </div>
            </div>
        )
    }
}

