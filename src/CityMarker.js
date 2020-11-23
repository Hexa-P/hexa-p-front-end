import React, { Component } from 'react';
import { Marker } from 'react-simple-maps';
import { Popup } from 'reactjs-popup';
import { NavLink } from 'react-router-dom'

export default class CityMarker extends Component {
  render() {

    const {
      cityId,
      cityName,
      lat,
      lon,
      chartData,
      isThereData,
      getTemp
    } = this.props;

    return (
      <Marker
        key={cityId}
        coordinates={[lon, lat]}
      >
      <Popup
        trigger={<circle
          r={0.3}
          fill="red"
          className="circle-marker"
        ></circle>}
        position="left"
      >
        <div className="portland-popup">
          <span>{cityName}</span>
          <button
            className="historical-data-button"
          >
            <NavLink
              to={{
                pathname: "/tempchart",
                state: chartData
              }}
            >
              View Historical Data
            </NavLink>
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
          isThereData ?
          getTemp(cityId)
          : ''
        }
      </text>

    </Marker>
    )
  }
}
