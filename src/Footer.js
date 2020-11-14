import './App.css';
import React, { Component } from 'react'
import captain_planet from './assets/captain_planet.gif';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-left">
                    <div>
                        Sam Formichella
                        <img className='git' src={github} alt='github'/>
                        <img className='li' src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Andrew Bray
                        <img className='git' src={github} alt='github'/>
                        <img className='li' src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Katie Berry
                        <img className='git' src={github} alt='github'/>
                        <img className='li' src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Richard Hillman
                        <img className='git' src={github} alt='github'/>
                        <img className='li' src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Ryan Carreras
                        <img className='git' src={github} alt='github'/>
                        <img className='li' src={linkedin} alt='linkedin'/>
                    </div>
                </div>
            </footer>
        )
    }
}