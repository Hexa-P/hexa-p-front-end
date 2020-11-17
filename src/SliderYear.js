import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import './slider.css'

export default class SliderYear extends Component {

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
            onChange={this.props.handleYearSlider}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
          />
        </div>
      </>
    )
  }
}

