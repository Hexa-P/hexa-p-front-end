import React, { useState, useEffect } from "react";
import request from 'superagent';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
const shapeData = require('./tl_2010_41_county10.json');

// const geoUrl = "./gadm36_USA_2.json";
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

// -----------------------------------------------------------------------------------

const MapChart = () => {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/unemployment-by-county-2017.csv").then(counties => {
      setData(counties);
    });
  }, []);

// -----------------------------------------------------------------------------------

  return (
    <>
      <ComposableMap projection="geoMercator" viewBox="65 150 30 30">

{/* -------------------------------------------------------------------------------- */}

        <Geographies className="blah" geography={shapeData}>
          {
            ({ geographies }) => { 
              return geographies
              .map(geo => {
              
                const cur = data.find(datum => datum.id === geo.properties.GEOID10);

                return (
                  <Geography                    
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.unemployment_rate : "#EEE")} 
                  />
                );
              })
            }
          }
        </Geographies>

{/* -------------------------------------------------------------------------------- */}

      </ComposableMap>
    </>
  );
};

// ------------------------------------------------------------------------------------

export default MapChart;
