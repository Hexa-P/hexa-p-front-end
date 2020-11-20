import React, { Component } from 'react';
import Navigation from './Navigation.js';
import request from 'superagent';
import { NavLink } from 'react-router-dom';
import './reset.css'
import './SignLogin.css';
import bridge from './images/signlog.jpg';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        err: null,

    }

    // ----------------------------------------------------------------------------------------

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        try {
            const user = await request
                .post('https://serene-temple-06405.herokuapp.com/auth/signin')
                .send(this.state);


            this.setState({ loading: false })

            this.props.setTokenAndName(user.body.email,
                user.body.token);
            this.props.history.push('/userProfile')
        }
        catch (err) {
            this.setState({ err: 'ERROR, Please enter a valid EMAIL' })

            this.setState({ loading: false })
        }

    }

    // ----------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>

                <img className="bridged" src={bridge} type='image' alt="forest bridge" />

                {/* ----------------------------------------------------------------------- */}
                <div className="main-container">
                    <div className="container center">

                        <NavLink className="signup" to="/signup">SignUp</NavLink>
                        <NavLink className="login" to="/login">Login</NavLink>

                        <div className="login-form">
                            <form onSubmit={this.handleSubmit}>
                                <h2>Login</h2>
                            Email:
                            <label>
                                    {this.state.err && <div>
                                        {this.state.err}
                                    </div>}
                                    <input
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </label>
                            Password
                            <label>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                </label>

                                {
                                    this.state.loading
                                        ? 'spins'
                                        : <button className="button-sign">Submit</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------- */}

            </div>

        )
    }
}