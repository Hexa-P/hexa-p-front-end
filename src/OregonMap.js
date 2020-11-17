import React, { Component } from 'react';
import './OregonMap.css';
import request from 'superagent';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

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

    const displayedTempKey = Object.keys(this.state.monthlyData)
      .filter(key => key.slice(0, 4) === this.state.displayedYear)

    const displayedTemp = this.state.monthlyData[displayedTempKey].avg

    this.setState({ displayedTemp })
  }

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
                return geographies.map(geo => {
                  return <Geography 
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#AAA"
                  />
                })
              }
            }
          </Geographies>
          <Marker
            coordinates={[-122.675, 45.45]}
            fill="blue"
          >
            <circle
              r={0.3}
              fill="green"
              className="circle-marker"
            ></circle>
            <text className="displayed-temp">
              {Math.floor(this.state.displayedTemp)}
            </text>
          </Marker>
        </ComposableMap>
        <div className="flex-row flex-center">
          <button>1950</button>
          <button>1951</button>
          <button>1952</button>
        </div>
      </div>
    )
  }
}
