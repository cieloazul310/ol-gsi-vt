import type { Palette } from "./types";

const defaultPalette: Palette = {
  anno: {
    text: {
      main: "#333",
      light: "#666",
    },
    water: "#77d",
    terrain: "#744",
    transp: "#494",
    green: `#076`,
  },
  background: "#fcfcf7",
  boundary: {
    main: "#a9b",
    light: "#ccc",
  },
  building: {
    stroke: "#ed9",
    fill: "#feb",
  },
  contour: {
    main: "#dcb",
    light: "#edc",
  },
  contrast: "#fff",
  isbt: "#c5d6f9",
  rail: {
    station: {
      main: "#fac",
      light: "#fee",
    },
    shinkansen: "#44a",
    jr: "#666",
    shitetsu: "#888",
  },
  road: {
    highway: {
      edge: "#aca",
      main: "#bdb",
    },
    national: {
      edge: "#ec8",
      main: "#fda",
    },
    pref: {
      edge: "#dd9",
      main: "#ffe",
    },
    basic: {
      edge: "#ddd",
      main: "#fff",
    },
    edge: "#ccc",
  },
  searoute: "#bbbbd7",
  structure: "#bbb",
  tpgphArea: {
    wetland: "#dfe",
    firn: "#eef",
    sand: "#ffd",
  },
  transp: {
    highway: "#696",
    national: "#66f",
  },
  volcano: "#f00",
  waterarea: "#cdf",
  waterline: "#446",
};

export default defaultPalette;
