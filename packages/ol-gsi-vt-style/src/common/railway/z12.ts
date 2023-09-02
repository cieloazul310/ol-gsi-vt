import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import {
  zoomToResolution,
  type Theme,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import type { RailCLCommonProperties } from "./utils";

export default function over12(
  {
    snglDbl,
    lvOrder,
    railState,
    isJR,
    isChikatetsu,
    isStation,
  }: RailCLCommonProperties,
  resolution: number,
  { palette, zIndex }: Theme,
) {
  if (snglDbl === 0) return new Style();
  if (resolution > zoomToResolution(14) && isChikatetsu) return new Style();
  if (resolution < zoomToResolution(17) && snglDbl !== 4) return new Style();

  if (isStation) {
    const width = resolution > zoomToResolution(15) ? 4 : 8;
    if (railState === 0) {
      return new Style({
        stroke: new Stroke({
          width,
          color: palette.rail.station.main,
          lineCap: "square",
        }),
        zIndex: zIndex.station,
      });
    }
    const isBrigdge = railState === 1;

    return [
      new Style({
        stroke: new Stroke({
          width,
          color: isBrigdge
            ? palette.rail.station.main
            : palette.rail.station.light,
          lineCap: "square",
        }),
        zIndex: zIndex.station,
      }),
      new Style({
        stroke: new Stroke({
          width: width + 2,
          color: palette.rail.station.main,
          lineCap: "square",
        }),
        zIndex: zIndex.station - 1,
      }),
    ];
  }

  const width = 2;
  const color = isJR ? palette.rail.jr : palette.rail.shitetsu;
  const isTunnel = railState === 2 || railState === 100;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
        lineDash: isTunnel ? [width * 2, width * 2] : undefined,
      }),
      zIndex: zIndex.railway + (lvOrder ?? 0) * 10,
    }),
    new Style({
      stroke: new Stroke({
        width: width + 2,
        color: palette.contrast,
      }),
      zIndex: zIndex.railwayBg + (lvOrder ?? 0) * 10,
    }),
  ];
}
