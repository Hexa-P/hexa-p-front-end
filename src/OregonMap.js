import React, { Component } from 'react';
import request from 'superagent';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

import * as oregonCountyData from './tl_2010_41_county10.json';
const oregonData = require('./tl_2010_41_county10.json')

export default class OregonMap extends Component {
  render() {
    return (
      <div>
        <ComposableMap
          className="oregon-map"
          projection="geoMercator"
          viewBox="65 155 25 25"
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
            ></circle>
          </Marker>
        </ComposableMap>
      </div>
    )
  }
}
