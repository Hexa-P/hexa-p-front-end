import { scaleQuantize } from 'd3-scale';

export const lightBlueGradient = scaleQuantize()
    .domain([1, 10])
    .range([
      "#00B5E5",
      "#00AAD9",
      "#009FCD",
      "#0094C1",
      "#008AB5",
      "#007FA9",
      "#00749D",
      "#006991",
      "#005F85"
    ]);

export const redGradient = scaleQuantize()
    .domain([1, 10])
    .range([
    "#FFB3BC",
    "#FDA5AB",
    "#FB979B",
    "#F98A8B",
    "#F87C7B",
    "#F66E6B",
    "#F4615B",
    "#F2534B",
    "#F1463B"
    ]);
