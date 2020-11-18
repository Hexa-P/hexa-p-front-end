import React, { Component } from 'react';
import include from './images/genderN.jpg';
import './UserProfile.css';

export default class UserProfile extends Component {

    state = { 
        charts: [],
        chart: '',
        err: null,
        favorite_article: '',
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
                <div className="overall-wrap"> 

                    <div className="left-wrapper">
                        <div className="profile-img">
                            <img className="includes" src={include} type='image' alt="gender neutral default" />
                        </div>

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
                    </div>

        {/* ----------------------------------------------------------------------------------- */}

                    <div className="right-wrapper">
                        <div>
                            
                            <div>
                                {/* IMPORT FAVORITES  */}
                                <h2>Your Saved Charts:</h2>

                                    {
                                        !!this.state.charts.length && this.state.charts.map(chart => 
                                        <div className="chart">
                                            chart: {chart.chart}; 
                                            completed: {chart.completed.toString()} 
                                            <div>
                                            <button onClick={() => this.handleCompletedChart(chart.id)}>Chart It</button>
                                            </div>
                                        </div>)
                                    }
            
                            </div>

                        </div>
                    </div>


                </div>
            </>
        )
    }
}