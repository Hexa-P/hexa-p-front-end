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

const debounce = (func, delay) => {
  let inDebounce
  return function () {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export default class OregonMap extends Component {

  state = {
    monthlyData: {},
    api_city_id: 32,
    displayedMonth: 'January',
    displayedYear: '1950',
    tempType: 'avg'
  }

  componentDidMount = async() => {     

    try {
      const data = await request
        .get(`https://serene-temple-06405.herokuapp.com/temps?city_api_id=${this.state.api_city_id}&month_param=01&year_range=1950:2005`);

      await this.setState({ monthlyData: data.body.month });

      this.setDisplayedTemp();
    } catch(e) {
      console.log(e);
    }
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

    this.setDisplayedTemp();
  }

  handleMonthSlider = debounce(async (e) => {
    let monthNumber = e + 1;
    const month = moment.months()[e];

    if (monthNumber > 9) monthNumber = String(monthNumber)
    else monthNumber = '0' + String(monthNumber)

    try {
      const data = await request
        .get(`https://serene-temple-06405.herokuapp.com/temps?city_api_id=32&month_param=${monthNumber}&year_range=1950:2005`);

      await this.setState({ monthlyData: data.body.month, displayedMonth: month });

      this.setDisplayedTemp()

    } catch (e) {
      console.log(e);
    }
  }, 500)

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

                <Marker coordinates={[-122.675, 45.45]}>
                  <Popup
                    trigger={<circle
                      r={0.3}
                      fill="red"
                      className="circle-marker"
                    ></circle>}
                    position="left"
                  >
                    <div className="portland-popup">

                      <button
                        className="historical-data-button"
                      // onClick={() => this.handleHistoricalButton('Portland')}
                      >
                        <NavLink
                          to={{
                            pathname: "/tempchart",
                            search: "?city=portland",
                            state: {
                              monthlyData: this.state.monthlyData,
                              city: 'Portland',
                              api_city_id: 32,
                              month: this.state.displayedMonth
                            }
                          }}>View Historical Data</NavLink>
                      </button>

                      <button
                        className="predictions-button"
                        onClick={() => this.handlePredictionsButton('Portland')}
                      >
                        View Predictions
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
                    Portland: {
                      this.state.displayedTemp
                        ? `${Math.floor(this.state.displayedTemp * 10) / 10}${String.fromCharCode(176)}F`
                        : ''
                    }
                  </text>

                </Marker>

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
