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
                        <img src={github} alt='github'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Andrew Bray
                        <img src={github} alt='github'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Katie Berry
                        <img src={github} alt='github'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Richard Hillman
                        <img src={github} alt='github'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                    <div>
                        Ryan Carreras
                        <img src={github} alt='github'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <img src={captain_planet} alt='captain planet'/>
                    </div>
                </div>
            </footer>
        )
    }
}