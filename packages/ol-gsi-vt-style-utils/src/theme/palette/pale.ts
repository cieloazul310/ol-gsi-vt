import type { Palette } from "./types";

/** @deprecated use `createPalePalette()` */
export const palePalette: Palette = {
  anno: {
    text: {
      main: "#666666",
      light: "#888888",
    },
    transp: "#999999",
    terrain: "#999999",
    water: "#777777",
    green: "#999999",
  },
  background: "#ffffff",
  boundary: { main: "#777777", light: "#999999" },
  building: {
    stroke: "#cccccc",
    fill: "#eeeeee",
  },
  contrast: "#ffffff",
  contour: { main: "#cccccc", light: "#dddddd" },
  isbt: "#bbbbbb",
  rail: {
    station: {
      main: "#999999",
      light: "#cccccc",
    },
    jr: "#999999",
    shitetsu: "#999999",
    shinkansen: "#999999",
  },
  road: {
    highway: { edge: "#bbbbbb", main: "#eeeeee" },
    national: { edge: "#cccccc", main: "#eeeeee" },
    pref: { edge: "#cccccc", main: "#ffffff" },
    basic: { edge: "#dddddd", main: "#ffffff" },
    edge: "#dddddd",
  },
  searoute: "#aaaaaa",
  structure: "#bbbbbb",
  tpgphArea: {
    wetland: "#eeeeee",
    firn: "#eeeeee",
    sand: "#eeeeee",
  },
  transp: {
    national: "#aaaaaa",
    highway: "#aaaaaa",
  },
  volcano: "#777777",
  waterarea: "#cccccc",
  waterline: "#aaaaaa",
};

/** @deprecated use `createPalePalette()` */
export function usePalePalette(): Palette {
  return {
    anno: {
      text: {
        main: "#666666",
        light: "#888888",
      },
      transp: "#999999",
      terrain: "#999999",
      water: "#777777",
      green: "#999999",
    },
    background: "#ffffff",
    boundary: { main: "#777777", light: "#999999" },
    building: {
      stroke: "#cccccc",
      fill: "#eeeeee",
    },
    contrast: "#ffffff",
    contour: { main: "#cccccc", light: "#dddddd" },
    isbt: "#bbbbbb",
    rail: {
      station: {
        main: "#999999",
        light: "#cccccc",
      },
      jr: "#999999",
      shitetsu: "#999999",
      shinkansen: "#999999",
    },
    road: {
      highway: { edge: "#bbbbbb", main: "#eeeeee" },
      national: { edge: "#cccccc", main: "#eeeeee" },
      pref: { edge: "#cccccc", main: "#ffffff" },
      basic: { edge: "#dddddd", main: "#ffffff" },
      edge: "#dddddd",
    },
    searoute: "#aaaaaa",
    structure: "#bbbbbb",
    tpgphArea: {
      wetland: "#eeeeee",
      firn: "#eeeeee",
      sand: "#eeeeee",
    },
    transp: {
      national: "#aaaaaa",
      highway: "#aaaaaa",
    },
    volcano: "#777777",
    waterarea: "#cccccc",
    waterline: "#aaaaaa",
  };
}

export function createPalePalette(): Palette {
  return {
    anno: {
      text: {
        main: "#666666",
        light: "#888888",
      },
      transp: "#999999",
      terrain: "#999999",
      water: "#777777",
      green: "#999999",
    },
    background: "#ffffff",
    boundary: { main: "#777777", light: "#999999" },
    building: {
      stroke: "#cccccc",
      fill: "#eeeeee",
    },
    contrast: "#ffffff",
    contour: { main: "#cccccc", light: "#dddddd" },
    isbt: "#bbbbbb",
    rail: {
      station: {
        main: "#999999",
        light: "#cccccc",
      },
      jr: "#999999",
      shitetsu: "#999999",
      shinkansen: "#999999",
    },
    road: {
      highway: { edge: "#bbbbbb", main: "#eeeeee" },
      national: { edge: "#cccccc", main: "#eeeeee" },
      pref: { edge: "#cccccc", main: "#ffffff" },
      basic: { edge: "#dddddd", main: "#ffffff" },
      edge: "#dddddd",
    },
    searoute: "#aaaaaa",
    structure: "#bbbbbb",
    tpgphArea: {
      wetland: "#eeeeee",
      firn: "#eeeeee",
      sand: "#eeeeee",
    },
    transp: {
      national: "#aaaaaa",
      highway: "#aaaaaa",
    },
    volcano: "#777777",
    waterarea: "#cccccc",
    waterline: "#aaaaaa",
  };
}
