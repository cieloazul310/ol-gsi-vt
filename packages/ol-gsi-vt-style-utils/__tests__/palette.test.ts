import { describe, it, expect } from "vitest";
import {
  mergeDefaultPalette,
  useDefaultPalette,
  usePalePalette,
} from "../src/theme/palette";

describe("defaultPalette", () => {
  it("default palette", () => {
    const palette = useDefaultPalette();

    expect(palette.rail.station.main).toBe("#ffaacc");
    expect(palette.rail.station.light).toBe("#ffeeee");
  });
});

describe("mergeDefaultPalette", () => {
  it("default palette", () => {
    const palette = mergeDefaultPalette({
      road: {
        highway: {
          // edge: "#aca",
          main: "#eeffee",
        },
        national: {
          // edge: "#ec8",
          main: "#ffffee",
        },
      },
      rail: { station: { main: "#eeeeff" } },
    });

    expect(palette.road.highway.edge).toBe("#aaccaa");
    expect(palette.road.highway.main).toBe("#eeffee");
    expect(palette.road.national.edge).toBe("#eecc88");
    expect(palette.road.national.main).toBe("#ffffee");

    expect(palette.rail.station.main).toBe("#eeeeff");
    expect(palette.rail.station.light).toBe("#ffeeee");
  });

  it("pale palette", () => {
    const palette = mergeDefaultPalette(
      {
        road: {
          highway: {
            // edge: "#bbb",
            main: "#eeffee",
          },
          national: {
            // edge: "#ccc",
            main: "#ffffee",
          },
        },
        rail: { station: { main: "#eeeeff" } },
      },
      usePalePalette(),
    );

    expect(palette.road.highway.edge).toBe("#bbbbbb");
    expect(palette.road.highway.main).toBe("#eeffee");
    expect(palette.road.national.edge).toBe("#cccccc");
    expect(palette.road.national.main).toBe("#ffffee");

    expect(palette.rail.station.main).toBe("#eeeeff");
    expect(palette.rail.station.light).toBe("#cccccc");
  });
});
