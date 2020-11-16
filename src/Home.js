import React, { Component } from 'react';
import Article from './Article';
import Navigation from './Navigation.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                Welcome home
                <Article />

            </div>
        )
    }
}
