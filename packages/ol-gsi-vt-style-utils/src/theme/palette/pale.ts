import type { Palette } from "./types";

/** @deprecated */
export const palePalette: Palette = {
  anno: {
    text: {
      main: "#666",
      light: "#888",
    },
    transp: "#999",
    terrain: "#999",
    water: "#777",
    green: "#999",
  },
  background: "#fff",
  boundary: { main: "#777", light: "#999" },
  building: {
    stroke: "#ccc",
    fill: "#eee",
  },
  contrast: "#fff",
  contour: { main: "#ccc", light: "#ddd" },
  isbt: "#bbb",
  rail: {
    station: {
      main: "#999",
      light: "#ccc",
    },
    jr: "#999",
    shitetsu: "#999",
    shinkansen: "#999",
  },
  road: {
    highway: { edge: "#bbb", main: "#eee" },
    national: { edge: "#ccc", main: "#eee" },
    pref: { edge: "#ccc", main: "#fff" },
    basic: { edge: "#ddd", main: "#fff" },
    edge: "#ddd",
  },
  searoute: "#aaa",
  structure: "#bbb",
  tpgphArea: {
    wetland: "#eee",
    firn: "#eee",
    sand: "#eee",
  },
  transp: {
    national: "#aaa",
    highway: "#aaa",
  },
  volcano: "#777",
  waterarea: "#ccc",
  waterline: "#aaa",
};

export function usePalePalette(): Palette {
  return {
    anno: {
      text: {
        main: "#666",
        light: "#888",
      },
      transp: "#999",
      terrain: "#999",
      water: "#777",
      green: "#999",
    },
    background: "#fff",
    boundary: { main: "#777", light: "#999" },
    building: {
      stroke: "#ccc",
      fill: "#eee",
    },
    contrast: "#fff",
    contour: { main: "#ccc", light: "#ddd" },
    isbt: "#bbb",
    rail: {
      station: {
        main: "#999",
        light: "#ccc",
      },
      jr: "#999",
      shitetsu: "#999",
      shinkansen: "#999",
    },
    road: {
      highway: { edge: "#bbb", main: "#eee" },
      national: { edge: "#ccc", main: "#eee" },
      pref: { edge: "#ccc", main: "#fff" },
      basic: { edge: "#ddd", main: "#fff" },
      edge: "#ddd",
    },
    searoute: "#aaa",
    structure: "#bbb",
    tpgphArea: {
      wetland: "#eee",
      firn: "#eee",
      sand: "#eee",
    },
    transp: {
      national: "#aaa",
      highway: "#aaa",
    },
    volcano: "#777",
    waterarea: "#ccc",
    waterline: "#aaa",
  };
}
