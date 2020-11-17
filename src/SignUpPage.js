import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import Navigation from './Navigation.js';

export default class SignUp extends Component {

    // -----------------------------------------------------------------------------

    state = { 
        email: '',
        password: '',
        loading: false,
    }

// ----------------------------------------------------------------------------------

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({ loading:true })
        const user = await request
            .post('https://serene-temple-06405.herokuapp.com/auth/signup')
            .send(this.state);
            
            console.log(user.body,' sign UP')
            this.setState({ loading: false })

            this.props.setTokenAndName(user.body.email,
            user.body.token);
            this.props.history.push('/userProfile')
    }   

// -------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>

                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    Username or Email:
                    <label> 
                        <input
                        value={this.state.email}
                        type="email" 
                        required
                        onChange={(e) => this.setState({ email: e.target.value})}
                        />
                    </label>
                    Password:
                    <label> 
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value})}
                        />
                    </label>

                    {
                        this.state.loading
                        ? 'spins'
                        : <button>Submit</button>
                    }
                </form>
            </div>
        )
    }
}