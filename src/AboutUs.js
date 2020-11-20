import React, { Component } from 'react';
import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
// import bamf from './images/bamf.jpg';
import './AboutUs.css';


export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1> ABOUT US </h1>
                {/* -------------------------------------------------------- */}

                <div>
                <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                    <p className="about-text">
                        Katie Berry: 
                    </p>
                </div>

{/* -------------------------------------------------------- */}

                <div> 
                <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                    <p className="about-text">
                        Ryan Carreras:
                    </p>
                </div>

{/* -------------------------------------------------------- */}

                <div> 
                <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                    <p className="about-text">
                        Andrew Bray: 
                    </p>
                </div>

{/* -------------------------------------------------------- */}

                <div> 
                <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                    <p className="about-text">
                        Samuel Formichella:
                    </p>
                </div>

{/* -------------------------------------------------------- */}

                <div> 
                <img className="profile-pic" src={bamf} type='image' alt="Richard and his cat" />
                    <p className="about-text">
                        Richard Hillman: An alchemical software developer with mysterious magical powers. Richard has taken a blood oath to the enviornment and will be combustion engine free within five years. He has also vowed to go back to sustainable living, reducing the amount of single use plastic, and in general all plastic at every corner possible. He wishes to live back in the wilderness with his family of wild things and coding to save the world. 
                    </p>
                </div>

                {/* -------------------------------------------------------- */}

            </div>
        )
    }
}
