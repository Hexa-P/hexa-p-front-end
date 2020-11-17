import React, { Component } from 'react';
import './OregonMap.css';
import request from 'superagent';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { scaleQuantize } from "d3-scale";

import SliderYear from './SliderYear.js'

const oregonData = require('./tl_2010_41_county10.json')

export default class OregonMap extends Component {

  state = {
    monthlyData: {},
    displayedYear: '1950',
    tempType: 'avg',
    sliderYear: '1950'
  }

  componentDidMount = async() => {
    const data = await request
      .get(`https://serene-temple-06405.herokuapp.com/temps?month_param=01&year_range=1950:2005`);

    await this.setState({ monthlyData: data.body.month });

    this.setDisplayedTemp();
  }

  setDisplayedTemp = () => {
    const displayedTempKey = Object.keys(this.state.monthlyData)
      .filter(key => key.slice(0, 4) === this.state.displayedYear)

    const displayedTemp = this.state.monthlyData[displayedTempKey][this.state.tempType]

    this.setState({ displayedTemp })
  }

  handleYearClick = async (e) => {
    await this.setState({ displayedYear: e.target.value })

    this.setDisplayedTemp()
  }

  handleMonthClick = async (e) => {
    const data = await request
      .get(`https://serene-temple-06405.herokuapp.com/temps?month_param=${e.target.value}&year_range=1950:2005`);

    await this.setState({ monthlyData: data.body.month });

    this.setDisplayedTemp()
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

  handleMarkerClick = (city) => {
    this.props.history.push('/tempchart')
  }

  handleYearSlider = async (e) => {
    await this.setState({ displayedYear: String(e) })

    this.setDisplayedTemp();
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

  render() {
    return (
      <div className="flex-row flex-center">
        <div className="month-slider flex-col">
          {
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(month => {
              return <button
                key={month}
                  value={month}
                onClick={this.handleMonthClick}
              >{month}</button>
            })
          }
        </div>
        <div className="map-container">
          <ComposableMap
            className="oregon-map"
            projection="geoMercator"
            viewBox="69 159 18 18"
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
            <Marker
              coordinates={[-122.675, 45.45]}
            >
              <circle
                r={0.3}
                fill="green"
                className="circle-marker"
                onClick={() => this.handleMarkerClick('Portland')}
              ></circle>
              <text
                className="displayed-temp"
                textAnchor="middle"
                x="2.3"
                y="0.168"
                fill="black"
              >
                Portland: {`${Math.floor(this.state.displayedTemp * 10) / 10} ${String.fromCharCode(176)}F`}
              </text>
            </Marker>
          </ComposableMap>
          <SliderYear 
            handleYearSlider={this.handleYearSlider}
          />
        </div>
        <select onChange={this.handleTempType}>
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
    )
  }
}
