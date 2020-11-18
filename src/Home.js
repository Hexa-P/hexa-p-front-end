import React, { Component } from 'react';
import Article1 from './Article1.js';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import './Article1.css';


export default class Home extends Component {
    render() {
        return (
            <div className="main-div">
                <Navigation />
                <Header />

                <Article1 />
                <Footer />
            </div>
        )
    }
}
