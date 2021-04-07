import React, { Component } from 'react';
import moment from 'moment';
import include from './images/genderN.jpg';
import './UserProfile.css';
import { NavLink } from 'react-router-dom';
import { ReactTinyLink } from "react-tiny-link";
import Navigation from './Navigation.js';
import FooterTwo from './FooterTwo';
import request from 'superagent';

import BACK_END_URL from './constants/constants';

export default class UserProfile extends Component {

    state = {
        email: '',
        city: '',
        temp_type: '',
        month: '',
        fav_url: [],
        monthlyData: [],
        regressionData: [],
        err: null,
        userCityData: []
    }

    fetchFaveUrls = async () => {
        const faves = await request
            .get(`${BACK_END_URL}/api/fav_url`)
            .set('Authorization', localStorage.getItem('TOKEN'))
        this.setState({ fav_url: faves.body })
    }


    componentDidMount = async () => {
        const userCityData = await request
            .get(`${BACK_END_URL}/api/user_profile`)
            .set('Authorization', localStorage.getItem('TOKEN'))

        this.setState({ userCityData: userCityData.body })

        this.setState({ email: localStorage.getItem('USERNAME') })
        this.fetchFaveUrls();
    }

    // -------------------------------------------------------------------------

    render() {

        return (
            <>

                <Navigation token={this.props.token}
                    username={this.props.username}
                    logOut={this.props.logOut}
                    history={this.props.history} />

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

                                        console.log(city);

                                        const chartData = {
                                            cityName: city.city,
                                            cityId: city.city_api_id,
                                            monthString: city.month_param
                                          }

                                        return <NavLink className="city-month-data"
                                            to={{
                                                pathname: '/tempchart',
                                                state: chartData
                                            }}
                                        >
                                            {`${city.city} - ${moment.months()[Number(city.month_param - 1)]}`}
                                        </NavLink>
                                    })
                                }

                            </div>

                        </div>
                    </div>

                    <div className="bottom-wrapper">
                        <div className="text-area">
                            <h2>Articles:</h2>
                            <div className="articles-faved">
                                {/* IMPORT FAVORITES  */}


                                {
                                    this.state.fav_url.map(url => {
                                        return <div className="my-fave-link-wrapper">
                                            <ReactTinyLink className="favelink"
                                                cardSize="small"
                                                showGraphic={true}
                                                maxLine={1}
                                                minLine={1}
                                                width={"30vw"}
                                                //proxyUrl="https://alchemy-anywhere.herokuapp.com/"
                                                url={url.fav_url}
                                            />
                                        </div>
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