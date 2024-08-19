import type { Palette } from "./types";

/** @deprecated use `useDefaultPalette()` */
export const defaultPalette: Palette = {
  anno: {
    text: {
      main: "#333333",
      light: "#666666",
    },
    water: "#7777dd",
    terrain: "#774444",
    transp: "#449944",
    green: `#007766`,
  },
  background: "#fcfcf7",
  boundary: {
    main: "#aa99bb",
    light: "#cccccc",
  },
  building: {
    stroke: "#eedd99",
    fill: "#ffeebb",
  },
  contour: {
    main: "#ddccbb",
    light: "#eeddcc",
  },
  contrast: "#ffffff",
  isbt: "#c5d6f9",
  rail: {
    station: {
      main: "#ffaacc",
      light: "#ffeeee",
    },
    shinkansen: "#4444aa",
    jr: "#666666",
    shitetsu: "#888888",
  },
  road: {
    highway: {
      edge: "#aaccaa",
      main: "#bbddbb",
    },
    national: {
      edge: "#eecc88",
      main: "#ffddaa",
    },
    pref: {
      edge: "#dddd99",
      main: "#ffffee",
    },
    basic: {
      edge: "#dddddd",
      main: "#ffffff",
    },
    edge: "#cccccc",
  },
  searoute: "#bbbbd7",
  structure: "#bbbbbb",
  tpgphArea: {
    wetland: "#ddffee",
    firn: "#eeeeff",
    sand: "#ffffdd",
  },
  transp: {
    highway: "#669966",
    national: "#6666ff",
  },
  volcano: "#ff0000",
  waterarea: "#ccddff",
  waterline: "#444466",
};

export function useDefaultPalette(): Palette {
  return {
    anno: {
      text: {
        main: "#333333",
        light: "#666666",
      },
      water: "#7777dd",
      terrain: "#774444",
      transp: "#449944",
      green: `#007766`,
    },
    background: "#fcfcf7",
    boundary: {
      main: "#aa99bb",
      light: "#cccccc",
    },
    building: {
      stroke: "#eedd99",
      fill: "#ffeebb",
    },
    contour: {
      main: "#ddccbb",
      light: "#eeddcc",
    },
    contrast: "#ffffff",
    isbt: "#c5d6f9",
    rail: {
      station: {
        main: "#ffaacc",
        light: "#ffeeee",
      },
      shinkansen: "#4444aa",
      jr: "#666666",
      shitetsu: "#888888",
    },
    road: {
      highway: {
        edge: "#aaccaa",
        main: "#bbddbb",
      },
      national: {
        edge: "#eecc88",
        main: "#ffddaa",
      },
      pref: {
        edge: "#dddd99",
        main: "#ffffee",
      },
      basic: {
        edge: "#dddddd",
        main: "#ffffff",
      },
      edge: "#cccccc",
    },
    searoute: "#bbbbd7",
    structure: "#bbbbbb",
    tpgphArea: {
      wetland: "#ddffee",
      firn: "#eeeeff",
      sand: "#ffffdd",
    },
    transp: {
      highway: "#669966",
      national: "#6666ff",
    },
    volcano: "#ff0000",
    waterarea: "#ccddff",
    waterline: "#444466",
  };
}
