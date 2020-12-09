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

          </div>
          <div className="info-popup-container">
            WHERE HAVE WE GOTTEN THIS INFORMATION?
            Team Hexa_P has curated information from highly respected scientific communities devoted to providing well researched documentation of our climate. One such group devoted to providing accurate climate data is Azuvea (https://climate.azavea.com/), who has accurate historical temperature records for numerous points throughout the globe. In future projects, Hexa_P is eager to present the heavily researched climate models, which forecast expected temperature increases through out the globe from the present day up to 2100. These models, rendered by NASA, and verified by scientific communities world-wide, present best-case and worst-case scenarios, depending on how the global community joins together in the fight to preserve, and improve, the quality of the globe that we have become the stewards of.

            WHAT DOES A GLOBAL TEMPERATURE INCREASE EVEN MEAN?
            Barring any unexpected innovation beyond our scope of imagination, even the best case climate models forecast a 2.5 degree fahrenheit increase of our temperature, globally.

            
            {/* haha almost there! */}
            Lorem ip summdfgljksdfglijbxfdlkjbdxflbjxldfkgjbxldfkgjbnxdlkfgjblxdkjfg



          </div>

        </div>
      </div>
    )
  }
}
