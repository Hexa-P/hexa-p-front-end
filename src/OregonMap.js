import React, { Component } from 'react';
import './OregonMap.css';
import request from 'superagent';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import Popup from 'reactjs-popup';
import Navigation from './Navigation.js';
import SliderYear from './SliderYear.js';
import SliderMonth from './SliderMonth.js';
import Header from './Header.js';
import Footer from './Footer.js';

const oregonData = require('./tl_2010_41_county10.json')


export default class OregonMap extends Component {

  state = {
    displayedMonth: 'January',
    displayedYear: '1950',
    displayedTemps: [],
    tempType: 'avg',
    cities: [32, 167, 213, 751, 756, 934],
    fetchData: [],
    monthlyData: {}
  }

  componentDidMount = async() => {     
    try {

      const data = await request
        .post(`https://multiple-markers.herokuapp.com/many_temps`)
        .send({ city_ids: this.state.cities })

      this.setState({ fetchData: data.body.data })

    } catch (e) {

      console.log(e);
      
    }

    const monthlyData = this.state.fetchData
      .reduce((citiesObj, city) => {
        const data = Object.keys(city.data)
          .filter(date => date.slice(-2) === '01')
          .reduce((dataObj, date) => {
            dataObj[date.slice(0, 4)] = city.data[date];
            return dataObj;
          }, {})

        const month = moment.months()[Number('01') - 1]

        citiesObj[city.city] = {
          city: city.city,
          id: city.id,
          month,
          data
        }

        return citiesObj;
    }, {})

    this.setState({ monthlyData })
  }

  setDisplayedTemp = async () => {
    const displayedTempKey = Object.keys(this.state.monthlyData)
      .filter(key => key.slice(0, 4) === this.state.displayedYear)

    const displayedTemp = this.state.monthlyData[displayedTempKey][this.state.tempType]

    this.setState({ displayedTemp })
  }

  handleTempType = async (e) => {
    const tempConvert = {
      'Average Temp': 'avg',
      'Average High Temp': 'max',
      'Average Low Temp': 'min'
    }

    const tempType = tempConvert[e.target.value]

    await this.setState({ tempType })

    this.setDisplayedTemp();
  }

  handleHistoricalButton = (city) => {
    this.props.history.push('/tempchart')
  }

  handleYearSlider = async (e) => {
    await this.setState({ displayedYear: String(e) })
  }

  handleMonthSlider = (e) => {
    let monthNumber = e + 1;

    if (monthNumber > 9) monthNumber = String(monthNumber)
    else monthNumber = '0' + String(monthNumber)

    const month_param = monthNumber;
    const month = moment.months()[Number(monthNumber) - 1];

    const monthlyData = this.state.fetchData
      .reduce((citiesObj, city) => {
        const data = Object.keys(city.data)
          .filter(date => date.slice(-2) === monthNumber)
          .reduce((dataObj, date) => {
            dataObj[date.slice(0, 4)] = city.data[date];
            return dataObj;
          }, {})

        citiesObj[city.city] = {
          city: city.city,
          id: city.id,
          month,
          data
        }

        return citiesObj;
    }, {})

    this.setState({ monthlyData, displayedMonth: month, month_param })

  }

  lightBlueColorScale = scaleQuantize()
    .domain([1, 10])
    .range([
      "#00B5E5",
      "#00AAD9",
      "#009FCD",
      "#0094C1",
      "#008AB5",
      "#007FA9",
      "#00749D",
      "#006991",
      "#005F85"
    ]);

  redColorScale = scaleQuantize()
    .domain([1, 10])
    .range([
      "#FFB3BC",
      "#FDA5AB",
      "#FB979B",
      "#F98A8B",
      "#F87C7B",
      "#F66E6B",
      "#F4615B",
      "#F2534B",
      "#F1463B"
    ]);

  // --------------------------------------------------------------------------------------

  render() {
    return (
      <>
        <Navigation
          token={this.props.token}
          username={this.props.username}
          logOut={this.props.logOut} />

        <div>
          <Header />
        </div>

        {/* --------------------------------------------------------------------------------------*/}
        <div className="oregon-map-container">
          <div className="map-wrapper">

            <div className="month-slider-grid">
              <SliderMonth
                handleMonthSlider={this.handleMonthSlider}
              />
            </div>

            <div className="map-container">
              <ComposableMap
                projection="geoMercator"
                viewBox="69 159.5 18 18"
              >

                <Geographies geography={oregonData}>
                  {
                    ({ geographies }) => {
                      let j = -1
                      return geographies.map(geo => {
                        j += 1;
                        return <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={this.lightBlueColorScale(j % 10)}
                        />
                      })
                    }
                  }
                </Geographies>

                {
                  this.state.fetchData.map(city => {
                    return <Marker
                      key={city.id}
                      coordinates={[city.longitude, city.latitude]}>
                    <Popup
                      trigger={<circle
                        r={0.3}
                        fill="red"
                        className="circle-marker"
                      ></circle>}
                      position="left"
                    >
                      <div className="portland-popup">
                        <span>{city.city}</span>
                        <button
                          className="historical-data-button"
                        // onClick={() => this.handleHistoricalButton('Portland')}
                        >
                          <NavLink
                            to={{
                              pathname: "/tempchart",
                              state: {
                                city: city.city,
                                city_api_id: city.id,
                                month: this.state.displayedMonth,
                                month_param: this.state.month_param
                              }
                            }}>View Historical Data</NavLink>
                        </button>
  
                      </div>
                    </Popup>
  
                    <text
                      className="displayed-temp"
                      textAnchor="left"
                      x="0.5"
                      y="0.25"
                      fill="black"
                    >
                      {
                        this.state.monthlyData[city.city]
                          ? `${Math.floor(this.state.monthlyData[city.city].data[this.state.displayedYear][this.state.tempType] * 10) / 10}${String.fromCharCode(176)}F`
                          : ''
                      }
                    </text>
  
                  </Marker>
                  })
                }

              </ComposableMap>
            </div>

            <div className="year-slider-grid">
              <SliderYear
                handleYearSlider={this.handleYearSlider}
              />
            </div>

            <div className="temp-dropdown-container">
              <select
                onChange={this.handleTempType}
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

        {/* ------------------------------------------------------------------------------------- */}

        <Footer />
      </>
    )
  }
}
