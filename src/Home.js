import React, { Component } from 'react';
import Article from './Article';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import './Article.css';


export default class Home extends Component {
    render() {
        return (
            <div className="main-div">
                <Navigation />
                <Header />
                <h1>Welcome home</h1>
                <Article />
                <Footer />
            </div>
        )
    }
}
