import React, { Component } from 'react';
import Navigation from './Navigation.js';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div> 
                    <Navigation /> 
                </div>
                <h1> WELCOME </h1>
            </div>
        )
    }
}
