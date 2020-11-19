import React, { Component } from 'react';
import include from './images/genderN.jpg';
import './UserProfile.css';
import Navigation from './Navigation.js';
import FooterTwo from './FooterTwo';

export default class UserProfile extends Component {

    state = { 
        city: '',
        temp_type: '',
        month: '',
        monthlyData: [],
        regressionData: [],
        err: null,
    }

    // fetch = async () => {
    //     const response = await request.get(`https://serene-temple-06405.herokuapp.com/api/userprofile/${charts}`)
    //     .set('Authorization', this.props.token)

    //     this.setState({ charts: response.body })
    // } 

    // componentDidMount = async () => {
    //     this.fetch();
    // }


    
// -------------------------------------------------------------------------

    render() {
        return (
            <>

<Navigation />

{/* ------------------------------------------------ */}

                {/* <img className="back-one" src={forestb} type='image' alt="forestlooking up" /> */}
                <div className="overall-wrap"> 

                    <div className="left-wrapper">

                        <div className="text-area">


                            <section className="topper">

                                <div className="profile-img">
                                    <img className="includes" src={include} type='image' alt="gender neutral default" />
                                </div>

                            </section>

                            <section className="bopper">

                                <div className="name-fun">
                                    Name: 
                                </div>

                                <div className="email-fun">
                                    Email:
                                </div>

                                <div className="about"> 

                                    <about>

                                    </about>

                                </div>

                            </section>

                        </div>

                    </div>

        {/* ----------------------------------------------------------------------------------- */}

                    <div className="right-wrapper">
                        <div className="text-area">
                            
                            <div className="new-york">
                                {/* IMPORT FAVORITES  */}
                                <h2>Cities:</h2>

        
            
                            </div>

                        </div>
                    </div>


                </div>

<FooterTwo />

            </>
        )
    }
}