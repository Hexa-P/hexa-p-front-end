import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import regression from 'regression';
import moment from 'moment';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';
import request from 'superagent';


export default class ChartTemplate extends Component {

  // Data is intended to be in this format for the functions below:
  // {
  //   "1950": {
  //     avg: 49.20298345290
  //   }
  // }
  // --------------------------------------------------------------------------------------
  state = {
    city: 'Portland',
    temp_type: 'Average High',
    month: 'January',
    monthlyData: [],
    regressionData: []
  }

  componentDidMount = async() => {
    const data = await this.props.location.state ?
      this.props.location.state.monthlyData
      : request
        .get(`https://serene-temple-06405.herokuapp.com/temps?city_api_id=32&month_param=01&year_range=1950:2005`)

    const monthlyData = this.getTwoDimData(data);
    const regressionData =  this.makeRegressionLineData(monthlyData);

    const city = this.props.location.state ?
      this.props.location.state.city
      : 'Portland';

    const month = this.props.location.state ?
      this.props.location.state.month
      : 'January';

    this.setState({ monthlyData, regressionData, city, month })
  }

  getTwoDimData = (data) => {
    return Object.keys(data)
      .reduce((dataArr, year) => {
        dataArr.push([
          Number(year.slice(0, 4)),
          data[year].avg
        ]);
        
        return dataArr;
      }, [])
  }

  makeRegressionLineData = (data) => {
    return regression.linear(data).points
  }
  
  saveData = async () => {
    const monthNumber = moment().month(this.state.month).format('MM');

    await request
      .post(`https://serene-temple-06405.herokuapp.com/api/user_profile`)
      .set('Authorization', localStorage.getItem('TOKEN'))
      .send({ 
        month_param: monthNumber,
        city_api_id: 32
      })
  }

  render() {

    const { 
      city,
      month,
      temp_type,
      monthlyData,
      regressionData
    } = this.state;

    return (
  
      <>
      <div>
        <Navigation />
      </div>

      <Header />

      <div className="chart-container">

        {
          this.state.monthlyData.length === 0
          ? 'Select some data to look at on the Map page!'
          : <Line
            data={
              {
                labels: [...Array(55).keys()].map(num => num + 1950),
                datasets: [
                  {
                    label: '°F',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: monthlyData.map(pair => pair[1]),
                    yAxisID: 'y-axis-1'
                  },
                  {
                    label: 'regression-line',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: regressionData.map(pair => pair[1]),
                    yAxisID: 'y-axis-1'
                  },
                ]
              }
            }
            options={{
              title: {
                display: true,
                text: `${city}'s ${temp_type} temperature for ${month}`,
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'right'
              },
              scales: {
                yAxes: [
                  {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                  },
                ],
                xAxes: [{
                  ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10
                  }
                }]
              }
            }}
          /> 
        }

        {
          localStorage.getItem('TOKEN') && this.state.monthlyData.length !== 0 ?
          <button onClick={this.saveData}>Save This Data!</button>
          : ''
        }

      </div>

      <Footer />

      </>
    )
  }
}
