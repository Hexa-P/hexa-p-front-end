import React, { Component } from 'react'
import './factpopup.css';
import forest from './assets/slowforest.mp4'

export default class FactPopUp extends Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop className='earth'>
          <source src={forest} type='video/mp4' />
        </video>
        <div className="fact-page">
          <div className="fact-popup-container">
            The planet is building up heat at the equivalent of four Hiroshima bombs worth of energy every second. And 90% of that heat is going into the oceans.
          </div>
        </div>
      </div>
    )
  }
}
