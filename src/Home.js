import React, { Component } from 'react';
import Article1 from './Article1.js';
import Navigation from './Navigation.js';
import HeaderHome from './HeaderHome.js';
import FooterTwo from './FooterTwo.js';
import './App.css';
import './Article1.css';


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="main-div">
                    <Navigation
                        token={this.props.token}
                        username={this.props.username}
                        logOut={this.props.logOut} />
                    <HeaderHome />
                    <Article1
                        token={this.props.token} />
                    <FooterTwo />
                </div>
            </>
        )
    }
}
