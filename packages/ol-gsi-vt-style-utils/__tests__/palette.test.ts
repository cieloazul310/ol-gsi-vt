import { describe, it, expect } from "vitest";
import {
  mergeDefaultPalette,
  useDefaultPalette,
  usePalePalette,
} from "../src/theme/palette";

describe("defaultPalette", () => {
  it("default palette", () => {
    const palette = useDefaultPalette();

    expect(palette.rail.station.main).toBe("#fac");
    expect(palette.rail.station.light).toBe("#fee");
  });
});

describe("mergeDefaultPalette", () => {
  it("default palette", () => {
    const palette = mergeDefaultPalette({
      road: {
        highway: {
          // edge: "#aca",
          main: "#efe",
        },
        national: {
          // edge: "#ec8",
          main: "#ffe",
        },
      },
      rail: { station: { main: "#eef" } },
    });

    expect(palette.road.highway.edge).toBe("#aca");
    expect(palette.road.highway.main).toBe("#efe");
    expect(palette.road.national.edge).toBe("#ec8");
    expect(palette.road.national.main).toBe("#ffe");

    expect(palette.rail.station.main).toBe("#eef");
    expect(palette.rail.station.light).toBe("#fee");
  });

  it("pale palette", () => {
    const palette = mergeDefaultPalette(
      {
        road: {
          highway: {
            // edge: "#bbb",
            main: "#efe",
          },
          national: {
            // edge: "#ccc",
            main: "#ffe",
          },
        },
        rail: { station: { main: "#eef" } },
      },
      usePalePalette(),
    );

    expect(palette.road.highway.edge).toBe("#bbb");
    expect(palette.road.highway.main).toBe("#efe");
    expect(palette.road.national.edge).toBe("#ccc");
    expect(palette.road.national.main).toBe("#ffe");

    expect(palette.rail.station.main).toBe("#eef");
    expect(palette.rail.station.light).toBe("#ccc");
  });
});
