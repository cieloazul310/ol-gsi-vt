import { gsiOptVtLayer, definePalette } from "@cieloazul310/ol-gsi-vt";

const palette = definePalette({
  anno: {
    transp: "#55f",
    green: "#557",
    terrain: "#557",
    text: {
      main: "#336",
      light: "#557",
    },
  },
  background: "#fafaff",
  building: {
    fill: "#ccf",
    stroke: "#aaf",
  },
  contour: {
    main: "#ccf",
    light: "#ccf",
  },
  rail: {
    station: {
      main: "#99f",
      light: "#ccf",
    },
  },
  road: {
    highway: {
      main: "#aaf",
      edge: "#66a",
    },
    national: {
      main: "#ccf",
      edge: "#bbf",
    },
    pref: {
      main: "#ddf",
      edge: "#bbc",
    },
    basic: {
      main: "#eef",
      edge: "#bbc",
    },
    edge: "#bbc",
  },
  transp: {
    highway: "#44a",
  },
  waterarea: "#aaf",
});

const layer = gsiOptVtLayer({
  theme: { palette },
});

export default layer;
