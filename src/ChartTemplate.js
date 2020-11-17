
import React, { Component } from 'react';
import Navigation from './Navigation.js'
import { Line } from 'react-chartjs-2';


const state = {
  city: 'Portland',
  temp_type: 'Average High',
  month: 'January',
  avg_temp: [43.2, 45.8, 49.2, 46.8, 43.2]
}


export default class ChartTemplate extends Component {

  // --------------------------------------------------------------------------------------

  render() {
    return (
    <>
      <div>
        <Navigation />
      </div>

{/* ------------------------------------------------------------------------------------- */}

      <div className="chart-container">
        <Line

          data={
            {
              labels: ['1950', '1951', '1952',
                '1953', '1954'],
              datasets: [
                {
                  label: '°F',
                  fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: [43.2, 45.8, 49.2, 46.8, 43.2]
                }
              ]
            }
          }
          options={{
            title: {
              display: true,
              text: `${state.city}'s ${state.temp_type} temperature for ${state.month}`,
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>

{/* --------------------------------------------------------------------------------------------------- */}

      </>
    )
  }
}
