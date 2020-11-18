import React, { Component } from 'react';
import Article from './Article';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                    Welcome home
                <Article />
                <Footer />
            </div>
        )
    }
}
