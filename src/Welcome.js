import React, { Component } from 'react';
import Navigation from './Navigation.js';
import './reset.css';
import './Welcome.css';
import forest from './assets/slowforest.mp4';



export default class Welcome extends Component {

    handleClick = async (e) => {
        this.props.history.push('/home')
    }

    render() {


        return (
            <div>
                <div>
                    <Navigation className='nav'
                        token={this.props.token}
                        username={this.props.username}
                        logOut={this.props.logOut} />
                </div>
                <section className='topwrapper'>
                    <video autoPlay muted loop className='earth'>
                        <source src={forest} type='video/mp4' />
                    </video>

                    <div className='content'>
                        <div className='title'>
                            <h1> Welcome to the Oregon Environmental Data Initiative </h1>
                        </div>
                        <div className='welcome-message'>
                            With so much at stake, the world needs answers. Our planet is our one home, our one place to live, survive, thrive, love and to heal. What can we do to help our home heal? What can we do to make things right? What do we need to accomplish to allow for our children to enjoy a world as beautiful as the one that we have been given. These are the questions we are asking you and this is a place where we hope you can find some of those answers.
                        </div>

                        <div className="button-fun">
                            <button className="button-presser button-sign" onClick={this.handleClick}>Enter</button>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
