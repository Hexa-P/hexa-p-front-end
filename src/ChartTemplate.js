import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import request from 'superagent';
import regression from 'regression';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Footer from './Footer.js';


export default class ChartTemplate extends Component {


  // --------------------------------------------------------------------------------------
  state = {
    city: 'Portland',
    temp_type: 'Average High',
    month: 'January',
    monthlyData: []
  }

  componentDidMount = async() => {
    // const data = await request
    //   .get(`https://serene-temple-06405.herokuapp.com/temps?month_param=01&year_range=1950:2005`)

    // const avgTemps = Object.keys(data.body.month)
    //   .reduce((arr, key) => {
    //     arr[Number(key.slice(0, 4)) - 1950] = data.body.month[key].avg;
    //     return arr;
    //   }, [])

    // this.setState({ monthlyData: avgTemps })

    const data = this.props.location.state
      ?  this.props.location.state.monthlyData
      : [];

    this.setState({ monthlyData: data })
  }
  
  render() {

    const { 
      city,
      month,
      temp_type,
      monthlyData 
    } = this.state;

    console.log(this.props.location.state
      ?  this.props.location.state.monthlyData
      : [])

    let myRegressionData = [];

    if (this.state.monthlyData.length > 0) {
      const twoDimTempsData = this.state.monthlyData.map(temp => {
        return [this.state.monthlyData.indexOf(temp) + 1950, temp]
      })

      myRegressionData = regression.linear(twoDimTempsData)
        .points
        .map(point => point[1]);
    } 


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
                    data: monthlyData,
                    yAxisID: 'y-axis-1'
                  },
                  {
                    label: 'regression-line',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: myRegressionData,
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

      </div>

      <Footer />

      </>
    )
  }
}
