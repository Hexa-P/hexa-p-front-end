import React, { Component } from 'react';
import request from 'superagent';
import Navigation from './Navigation.js';
import { NavLink } from 'react-router-dom';
import './reset.css' 
import './SignLogin.css';
import bridge from './images/signlog.jpg';

export default class SignUp extends Component {

    // -----------------------------------------------------------------------------

    state = { 
        email: '',
        password: '',
        loading: false,
        err:null,
    }

// ----------------------------------------------------------------------------------

    handleSubmitSignUp = async (e) => {
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

// -----------------------------------------------------------------------------------
    
    handleSubmitLogin = async (e) => {
        e.preventDefault()
        this.setState({ loading:true })
        try{
        const user = await request
            .post('https://serene-temple-06405.herokuapp.com/auth/signin')
            .send(this.state);
        

            console.log(user.body,'Logging You In')
            this.setState({ loading: false })

            this.props.changerTN(user.body.email,
            user.body.token);
            this.props.history.push('/userProfile')
        }
        catch(err) {
            this.setState({ err: 'ERROR, Please enter a valid EMAIL'})
        } 

    }   

// -------------------------------------------------------------------------------------

    render() {
        return (
            <section className="background">
                <img className="bridged" src={bridge} type='image' alt="forest bridge" />

                <div>
                    <Navigation />
                </div>       
    {/* ----------------------------------------------------------------------- */}
                
                <div className="main-container">
                
                    <div className="container center">

                    <NavLink className="signup" to="/signup">SignUp</NavLink> 
                    <NavLink className="login" to="/login">Login</NavLink> 

                    <div className="signup-form">
                        <form onSubmit={this.handleSubmitSignUp}>
                            <h2>Sign Up</h2>
                            Email:
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

                </div>

    {/* ---------------------------------------------------------------------------------- */}

                </div>
            </section>
        )
    }
}