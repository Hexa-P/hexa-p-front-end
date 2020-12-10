import React, { Component } from 'react'
import github1 from './assets/github1.png';
import github2 from './assets/github2.png';
import github3 from './assets/github3.png';
import github4 from './assets/github4.png';
import github5 from './assets/github5.png';
import linkedin from './assets/linkedin.png';
import './FooterTwo.css';

export default class FooterTwo extends Component {
    render() {
        return (
            <>
            <footer className="footerBun">
                {/* is this FooterTwo necessary? */}

{/* -------------------------------------------------------------------------------- */}

                <div className="footer-left left">

                    <div className="gitabove inblock">
                        Sam Formichella
                        <div className="git inblock">
                        <a href="https://github.com/sformichella">
                            <img src={github1} alt='github'/>
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
                            <img src={github2} alt='github'/>
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
                            <img src={github3} alt='github'/>
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
                            <img src={github4} alt='github'/>
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
                            <img src={github5} alt='github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/ryancarreras/">
                            <img src={linkedin} alt='linkedin'/>
                            </a>
                        </div>
                    </div>

                </div>

{/* -------------------------------------------------------------------------------- */}

            </footer>
            </>
        )
    }
}