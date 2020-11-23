import React, { Component } from 'react';
import './OregonMap.css';
import request from 'superagent';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import { lightBlueGradient } from './OregonMapUtils.js'
import Navigation from './Navigation.js';
import SliderYear from './SliderYear.js';
import SliderMonth from './SliderMonth.js';
import Header from './Header.js';
import Footer from './Footer.js';
import CityMarker from './CityMarker';

const oregonData = require('./tl_2010_41_county10.json')


export default class OregonMap extends Component {

  state = {
    fetchData: [],
    cities: [32, 167, 213, 751, 756, 934],
    yearString: '1950',
    monthString: '01',
    tempType: 'avg',
    decimalPoints: 1
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
  }

  getTemp = (city) => {
    const month = this.state.monthString;
    const year = this.state.yearString;

    return this.getCityTemp(city, month, year);
  }

  getCityTemp = (cityId, monthString, yearString) => {
    const decimalPoints = this.state.decimalPoints;
    const dateString = yearString + '-' + monthString;
    const tempType = this.state.tempType;

    const fetchData = this.state.fetchData;
    if (fetchData.length === 0) return 'No Fetch Data';

    let cityData = fetchData.filter(cityObj => cityObj.id === cityId);
    if (cityData.length === 0) return 'No city match';

    cityData = cityData[0].data

    const datum = cityData[dateString][tempType]
    const roundedDatum = Math.floor(datum * (10 ** decimalPoints) ) / (10 ** decimalPoints);

    return roundedDatum;
  }


  handleTempType = async (e) => {
    const tempConvert = {
      'Average Temp': 'avg',
      'Average High Temp': 'max',
      'Average Low Temp': 'min'
    }

    const tempType = tempConvert[e.target.value]

    await this.setState({ tempType })
  }

  handleYearSlider = (e) => {
    const yearNumber = e;

    const yearString = String(yearNumber)

    this.setState({ yearString });
  }

  handleMonthSlider = (e) => {
    const monthNumber = e + 1;
    let monthString = '';

    if (monthNumber > 9) monthString = String(monthNumber)
    else monthString = '0' + String(monthNumber)

    this.setState({ monthString })
  }


  // --------------------------------------------------------------------------------------

  render() {

    const {
      fetchData
    } = this.state

    const {
      handleMonthSlider,
      handleYearSlider,
      handleTempType,
      getTemp
    } = this


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
                handleMonthSlider={handleMonthSlider}
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
                          fill={ lightBlueGradient(j % 10) }
                        />
                      })
                    }
                  }
                </Geographies>

                {
                  fetchData.map(city => {
                    const chartData = {
                      city: city.city,
                      city_api_id: city.id,
                      month: this.state.displayedMonth,
                      month_param: this.state.month_param
                    }

                    return <CityMarker
                      key={city.id}
                      chartData={chartData}
                      cityId={city.id}
                      cityName={city.city}
                      lat={city.latitude}
                      lon={city.longitude}
                      isThereData={!!fetchData.length}
                      getTemp={getTemp}
                    ></CityMarker>
                  })
                }

              </ComposableMap>
            </div>

            <div className="year-slider-grid">
              <SliderYear
                handleYearSlider={handleYearSlider}
              />
            </div>

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

        {/* ------------------------------------------------------------------------------------- */}

        <Footer />
      </>
    )
  }
}
