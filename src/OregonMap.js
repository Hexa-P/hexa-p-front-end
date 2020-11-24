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
import CityMarker from './CityMarker.js';

const oregonData = require('./tl_2010_41_county10.json')


export default class OregonMap extends Component {

  // 
  // fetchData = [
  //   {
  //     id: 32,
  //     city: 'Portland',
  //     latitude: 45.52345,
  //     longitude: -122.67621,
  //     data: {
  //       '1950-01': {
  //          avg: 46.592641787199305,
  //          max: 46.592641787199305,
  //          min: 46.592641787199305
  //       }, ...
  //     }, ...
  //   }
  // ]
  // 

  state = {
    fetchData: [],
    cities: [32, 167, 213, 751, 756, 934],
    yearString: '1950',
    monthString: '01',
    tempType: 'avg',
    decimalPoints: 2
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

    // Get number of decimal points, dateString, and tempType from state
    const decimalPoints = this.state.decimalPoints;
    const dateString = yearString + '-' + monthString;
    const tempType = this.state.tempType;

    // Grab the fetchData. If there is no fetchData, return 'No Fetch Data'
    const fetchData = this.state.fetchData;
    if (fetchData.length === 0) return 'No Fetch Data';

    // Get the city object inside of fetchData that has an id prop of cityId
    // If cityData is empty, return 'No city match'
    let cityData = fetchData.filter(cityObj => cityObj.id === cityId);
    if (cityData.length === 0) return 'No city match';

    // This just gets the city data out of the filtered fetchData array
    cityData = cityData[0].data

    // Get the temp data point out of cityData. Look at the fetchData model above
    // for more detail. roundedTemp rounds temp to decimalPoints decimal points
    const temp = cityData[dateString][tempType]
    const roundedTemp = Math.floor(temp * (10 ** decimalPoints) ) / (10 ** decimalPoints);

    return roundedTemp;
  }

  handleYearSlider = (e) => {

    // This function sets the yearString in state to the
    // value of the year slider
    const yearNumber = e;

    const yearString = String(yearNumber)

    this.setState({ yearString });
  }

  handleMonthSlider = (e) => {

    // This function sets the monthString in state to the
    // value of the month slider
    const monthNumber = e + 1;
    let monthString = '';

    // Here we convert a number 1 - 12 to a string in the format 'MM'
    // e.g. 1 -> '01', 11 -> '11'
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
                    // This renders the Oregon map and all of the counties
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
                  // This section renders all of the city markers
                  // from fetchData

                  fetchData.map(city => {

                    const chartData = {
                      cityName: city.city,
                      cityId: city.id,
                      monthString: this.state.monthString,
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

            
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------- */}

        <Footer />
      </>
    )
  }
}
