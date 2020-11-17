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

const oregonData = require('./tl_2010_41_county10.json')

export default class OregonMap extends Component {

  state = {
    monthlyData: {},
    displayedYear: "1950"
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

    const displayedTemp = this.state.monthlyData[displayedTempKey].avg

    this.setState({ displayedTemp })
  }

  handleYearClick = async (e) => {
    this.setState({ displayedYear: e.target.value })

    this.setDisplayedTemp()
  }

  colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#00B5E5",
    "#00A3DB",
    "#0091D1",
    "#007FC8",
    "#006DBE",
    "#005BB5",
    "#0049AB",
    "#0037A1",
    "#002598"
  ]);

  render() {
    return (
      <div className="map flex-col flex-center">
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
                    fill={this.colorScale(j % 10)}
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
            ></circle>
            <text
              className="displayed-temp"
              textAnchor="middle"
              x="1.9"
              y="0.168"
              fill="black"
            >
              Portland: {Math.floor(this.state.displayedTemp)}
            </text>
          </Marker>
        </ComposableMap>
        <div className="flex-row flex-center">
          {
            [0, 1, 2].map(year => {
              return <button
                key={year + 1950}
                value={year + 1950}
                onClick={(e) => this.handleYearClick(e)}
              >{year + 1950}</button>
            })
          }
        </div>
      </div>
    )
  }
}
