import React, { Component } from 'react'
import captain_planet from './images/planateers.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <>
            <footer className="footerFun">

{/* -------------------------------------------------------------------------------- */}

                <div className="footer-left left">

                    <div className="gitabove inblock">
                        Sam Formichella
                        <div className="git inblock">
                            <img src={github} alt='github'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Andrew Bray
                        <div className="git inblock">
                            <img src={github} alt='github'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Katie Berry
                        <div className="git inblock">
                            <img src={github} alt='github'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Richard Hillman
                        <div className="git inblock">
                            <img src={github} alt='github'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Ryan Carreras
                        <div className="git inblock">
                            <img src={github} alt='github'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>
                    </div>

                </div>

{/* -------------------------------------------------------------------------------- */}

                <div className="footer-right right">
                    <div className="ohCaptainMyCaptain">
                        <img src={captain_planet} alt='captain planet'/>
                    </div>
                </div>

            </footer>
            </>
        )
    }
}