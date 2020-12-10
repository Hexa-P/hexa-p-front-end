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
                    {/* seems like this data could have lived in an array to be mapped over to prevent code duplication */}
                    <div className="gitabove inblock">
                        Sam Formichella
                        <div className="git inblock">
                        <a href="https://github.com/sformichella">
                            <img src={github} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sam-formichella/">
                            <img src={linkedin} alt='linkedin'/>
                        </a>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Andrew Bray
                        <div className="git inblock">
                        <a href="https://github.com/Andrew-Bray">
                            <img src={github} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-michael-bray/">
                            <img src={linkedin} alt='linkedin'/>
                        </a>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Katie Berry
                        <div className="git inblock">
                        <a href="https://github.com/KatieMBerry">
                            <img src={github} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/katie-m-berry/">
                            <img src={linkedin} alt='linkedin'/>
                        </a>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Richard Hillman
                        <div className="git inblock">
                        <a href="https://github.com/Richard-Hillman">
                            <img src={github} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/richard-hillman/">
                            <img src={linkedin} alt='linkedin'/>
                        </a>
                        </div>
                    </div>

{/* ------------- */}

                    <div className="gitabove inblock">
                        Ryan Carreras
                        <div className="git inblock">
                        <a href="https://github.com/ryanleviathan">
                            <img src={github} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/ryancarreras/">
                            <img src={linkedin} alt='linkedin'/>
                        </a>
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