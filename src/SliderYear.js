import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import './slider.css'

export default class SliderYear extends Component {
  state = {
    slider_year: 1950
  }

  handleYearSlider = async (e) => {
    this.setState({ slider_year: e.target.value })
    console.log(e.target.value)
  }
  render() {

    return (
      <>
        <div className="slider-container">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={1950} //replace with lowermost year in the year array
            min={1950} //replace with lowermost year in the year array
            max={2005} //replace with uppermost year in the year array
            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
            onChange={this.handleYearSlider}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
          />
        </div>
      </>
    )
  }
}

