import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import regression from 'regression';
import moment from 'moment';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';
import request from 'superagent';

import BACK_END_URL from './constants';


export default class ChartTemplate extends Component {

  // Data is intended to be in this format for the functions below:
  // {
  //   "1950": {
  //     avg: 49.20298345290
  //   }
  // }
  // --------------------------------------------------------------------------------------
  state = {
    cityName: 'Portland',
    cityId: '32',
    month: 'January',
    monthString: '01',
    tempType: 'avg',
    dropdownString: 'Average High',
    monthlyData: [],
    regressionData: [],
    dataIsSaved: false
  }

  componentDidMount = async () => {

    // Get all of the data from chartData in props.location.state
    const monthString = await this.props.location.state ?
      this.props.location.state.monthString
      : '01';

    const cityId = await this.props.location.state ?
      this.props.location.state.cityId
      : '32';

    const cityName = await this.props.location.state ?
      this.props.location.state.cityName
      : 'Portland';
  
      
    // Convert monthString to month name string thing
    const month = moment.months()[Number(monthString) - 1];

    this.setState({ cityName, cityId, monthString, month })

    // grab API data by month for every from 1950 - 2005
    const fetchData = await this.getAPIData();

    // Turn fetchData into an array of arrays with two points:
    // one for the year and one for the temp. For monthlyData
    // 
    const monthlyData = this.getTwoDimData(fetchData).map(pair => pair[1]);

    // Use the regression package to calculate a regression line
    // for the fetchData
    const regressionData = this.getTwoDimData(fetchData);

    this.setState({ monthlyData, regressionData })

  }

  getAPIData = async () => {
    const data = await request
      .get(`${BACK_END_URL}/temps?city_api_id=${this.state.cityId}&month_param=${this.state.monthString}&year_range=1950:2005`);

    return data.body.month;
  }

  getFavoriteData =  async () => {
    const userCityData = await request
      .get(`${BACK_END_URL}/api/user_profile`)
      .set('Authorization', localStorage.getItem('TOKEN'))

    const found = userCityData.body.find(city => city.city === this.state.city && city.month_param === this.state.month_param)

    this.setState({ dataIsSaved: Boolean(found)})
  }

  getTwoDimData = (data) => {
    const twoDimData = Object.keys(data)
      .reduce((dataArr, year) => {
        dataArr.push([
          Number(year.slice(0, 4)),
          data[year]
        ]);

        return dataArr;
      }, [])

    return twoDimData;
  }

  makeRegressionLineData = (twoDimObjData) => {
    const tempTypeData = twoDimObjData.map(pair => {
      return [
        pair[0],
        pair[1][this.state.tempType]
      ]
    })

    const twoDimRegressionData = regression.linear(tempTypeData).points;

    return twoDimRegressionData.map(pair => pair[1]);
  }

  handleSaveButton = () => {
    return this.state.dataIsSaved ?
      'Saved!'
      : localStorage.getItem('TOKEN') && this.state.monthlyData.length !== 0 ?
        <button onClick={this.saveData}>Save This Data!</button>
        : '';
  }

  saveData = async () => {
    await request
      .post(`${BACK_END_URL}/api/user_profile`)
      .set('Authorization', localStorage.getItem('TOKEN'))
      .send({
        city: this.state.cityName,
        month_param: this.state.monthString,
        city_api_id: this.state.cityId
      })

    this.setState({ dataIsSaved: true })
  }

  handleTempType = async (e) => {

    const dropdownString = e.target.value;

    // tempConvert is used to convert from dropdownString to the
    // 'avg', 'max', or 'min' since that's what's in fetchData
    const tempConvert = {
      'Average Temp': 'avg',
      'Average High Temp': 'max',
      'Average Low Temp': 'min'
    }

    const tempType = tempConvert[dropdownString]

    this.setState({ tempType, dropdownString })
  }

  render() {

    const {
      cityName,
      month,
      dropdownString,
      tempType,
      monthlyData,
      regressionData
    } = this.state;

    const {
      handleTempType,
      makeRegressionLineData
    } = this

    return (

      <>
        <div>
          <Navigation token={this.props.token}
            username={this.props.username}
            logOut={this.props.logOut} />
        </div>

        <Header />
        <div className="chart-page-content">
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
                        data: monthlyData.map(obj => obj[tempType]),
                        yAxisID: 'y-axis-1'
                      },
                      {
                        label: 'regression-line',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: makeRegressionLineData(regressionData),
                        yAxisID: 'y-axis-1'
                      },
                    ]
                  }
                }
                options={{
                  title: {
                    display: true,
                    text: `${cityName}'s ${dropdownString} temperature for ${month}`,
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
                  },
                }}
                />
            }
            <div>
              {
                this.handleSaveButton()
              }

              <div className="temp-dropdown-container">
                <select
                  onChange={handleTempType}
                  className="temp-dropdown"
                >
                  {
                    ['Average Temp', 'Average High Temp', 'Average Low Temp'].map(temp => {
                      return <option
                        key={temp}
                        value={temp}
                      >{temp}</option>
                    })
                  }
                </select>
              </div>
            </div>

          </div>

          <div className="chart-text">
            Historic Climate Temperature data gives us a clear perspective of where we’ve come from… and where we are headed. <br></br>Unless we take a stand. <br></br>Data shows a clear increase in the temperatures over this extended time. We hope that viewing this personalized data will illuminate that Climate Change affects us, not only globally, but locally as well.
          </div>

        </div>

        <Footer />

      </>
    )
  }
}
