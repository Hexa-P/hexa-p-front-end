import React, { Component } from 'react';
import moment from 'moment';
import ReactSlider from 'react-slider';
import './slider.css'

export default class SliderYear extends Component {

  months = moment.months();

  render() {
    return (
      <>
        <div className="slider-container-vertical">
          <ReactSlider
            className="vertical-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track-v"
            defaultValue={0} //replace with lowermost year in the year array
            min={0} //replace with lowermost year in the year array
            max={11} //replace with uppermost year in the year array
            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
            onChange={this.props.handleMonthSlider}
            renderThumb={(props, state) => <div {...props}>{this.months[state.valueNow]}</div>}
            orientation='vertical'
            marks
            markClassName="month-mark"
            pearling
          />
        </div>
      </>
    )
  }
}
