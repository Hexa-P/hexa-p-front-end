import React, { Component } from 'react';
import moment from 'moment';
import include from './images/genderN.jpg';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.js';
import FooterTwo from './FooterTwo';
import request from 'superagent';

export default class UserProfile extends Component {

    state = {
        email: '',
        city: '',
        temp_type: '',
        month: '',
        monthlyData: [],
        regressionData: [],
        err: null,
        userCityData: []
    }

    // fetch = async () => {
    //     const response = await request.get(`https://serene-temple-06405.herokuapp.com/api/userprofile/${charts}`)
    //     .set('Authorization', this.props.token)

    //     this.setState({ charts: response.body })
    // } 

    // componentDidMount = async () => {
    //     this.fetch();
    // }

    componentDidMount = async () => {
        const userCityData = await request
            .get(`https://serene-temple-06405.herokuapp.com/api/user_profile`)
            .set('Authorization', localStorage.getItem('TOKEN'))

        this.setState({ userCityData: userCityData.body })

        this.setState({ email: localStorage.getItem('USERNAME')})
    }
    
// -------------------------------------------------------------------------

    render() {

        console.log(this.state.userCityData);

        return (
            <>

                <Navigation token={this.props.token}
                    username={this.props.username}
                    logOut={this.props.logOut} />

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

                                <div className="email-fun">
                                    Email: {this.state.email}
                                </div>

                                <div className="about">

                                    
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

                                {
                                    this.state.userCityData.map(city => {
                                        return <Link className="city-month-data"
                                        to="/tempchart"
                                        state={{
                                            month_param: city.month_param,
                                            city_api_id: city.city_api_id,
                                            city: city.city
                                        }}
                                        >
                                            {`${city.city} - ${moment.months()[Number(city.month_param)]}`}
                                        </Link>
                                    })
                                }
            
                            </div>

                        </div>
                    </div>


                </div>

                <FooterTwo />

            </>
        )
    }
}