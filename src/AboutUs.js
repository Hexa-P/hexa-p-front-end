import React, { Component } from 'react';
import bamf from './images/bamf.jpg';
import andrew_b from './images/andrew_b.png';
import katie_b from './images/katie_b.PNG';
import ryan_c from './images/ryan_c.png';
import sam_f from './images/sam_f.png';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
import './AboutUs.css';
import forest from './assets/slowforest.mp4'
import Navigation from './Navigation.js';
import FooterTwo from './FooterTwo.js';


export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <video autoPlay muted loop className='earth'>
                    <source src={forest} type='video/mp4' />
                </video>
                <div className="about-us-content">
                    {/* this data should probably live in some json, to be loopsed over to prevent code duplication */}

                    {/* -------------------------------------------------------- */}

                    <div className="badass-container">
                        <img className="profile-pic" src={andrew_b} type='image' alt="Richard and his cat" />
                        <div className="badass-name-text">

                            <h2 className="badass-name">Andrew Bray</h2>
                            <p className="about-text">
                                As an activist, a storyteller, and a software engineer, Andrew devotes his pursuits to advocating for a sustainable future for ourselves, and our children. He lives in Portland and is grateful that he only needs to bike a few minutes away to frolic in the forest. And yes, he will truly frolic amongst the trees.
                    </p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------- */}

                    <div className="badass-container">
                        <img className="profile-pic" src={sam_f} type='image' alt="Richard and his cat" />
                        <div className="badass-name-text">

                            <h2 className="badass-name">Sam Formichella</h2>
                            <p className="about-text">
                                Sam will rock your friggin socks off. Period. Unless you don't recycle. Then he will get a look on his face that will break your heart. So don't litter, yo.
                    </p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------- */}

                    <div className="badass-container">
                        <img className="profile-pic" src={katie_b} type='image' alt="Richard and his cat" />
                        <div className="badass-name-text">

                            <h2 className="badass-name">Katie Berry</h2>
                            <p className="about-text">
                                Katie resides in Incline Village, NV (Lake Tahoe). Katie is a member of World Wildlife Fund and The Humane Society. Don't mess with her chipmunks.
                    </p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------- */}

                    <div className="badass-container">
                        <img className="profile-pic" src={ryan_c} type='image' alt="Richard and his cat" />
                        <div className="badass-name-text">

                            <h2 className="badass-name">Ryan Carreras</h2>
                            <p className="about-text">
                                Ryan is actually a forest spirit living among us. Don't let his friendly demeanor fool you though. He is down to clown with environmentalists.
                    </p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------- */}
                    <div className="badass-container">
                        <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                        <div className="badass-name-text">

                            <h2 className="badass-name">Richard Hillman</h2>
                            <p className="about-text">
                                An alchemical software developer with mysterious magical powers. Richard has taken a blood oath to the enviornment and will be combustion engine free within five years. He has also vowed to go back to sustainable living, reducing the amount of single use plastic, and in general all plastic at every corner possible. He wishes to live back in the wilderness with his family of wild things and coding to save the world.
                    </p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------- */}
                </div>
                <FooterTwo />
            </div >
        )
    }
}
