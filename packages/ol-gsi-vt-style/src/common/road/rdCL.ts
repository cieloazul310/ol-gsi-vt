import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import {
  zoomToResolution,
  type Theme,
  type RdCLCode,
  type Palette,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { type VtRnkWidth, type VtRdCtg } from "./utils";

function rdCLWidth(
  {
    rnkWidth,
    r_width,
  }: {
    rnkWidth?: VtRnkWidth;
    r_width?: number;
  },
  resolution: number,
) {
  if (resolution > zoomToResolution(12)) return 1;
  if (r_width) return Math.round((r_width ?? 1) / (resolution * 100));
  let baseWidth = 0;
  if (rnkWidth === 0) baseWidth = 0.5;
  if (rnkWidth === 1) baseWidth = 1;
  if (rnkWidth === 2) baseWidth = 2;
  if (rnkWidth === 3) baseWidth = 3;
  if (rnkWidth === 4) baseWidth = 3;
  return baseWidth * Math.max(1, zoomToResolution(15) / resolution);
}

function rdCLColor(
  rdCtg: VtRdCtg | undefined,
  isHighway: boolean,
  palette: Palette,
) {
  if (isHighway) return palette.road.highway;
  if (rdCtg === 0) return palette.road.national;
  if (rdCtg === 1) return palette.road.pref;
  if (rdCtg === 2) return palette.road.basic;
  return palette.road.basic;
}

function rdCLOrder(rdCtg: VtRdCtg | undefined, isHighway: boolean) {
  if (isHighway) return 10;
  if (rdCtg === 0) return 9;
  if (rdCtg === 1) return 8;
  if (rdCtg === 2) return 2;
  return 1;
}

export default function rdCLCommonStyle(
  {
    code,
    rnkWidth,
    rdCtg,
    lvOrder,
    motorway,
    r_width,
  }: {
    code: RdCLCode;
    rnkWidth?: VtRnkWidth;
    rdCtg?: VtRdCtg;
    motorway?: 0 | 1 | 9;
    lvOrder?: number;
    r_width?: number;
  },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  if (resolution > zoomToResolution(7)) return new Style();
  const isHighway =
    code === 52703 || code === 52704 || motorway === 1 || rdCtg === 3;
  if (resolution > zoomToResolution(9)) {
    if (!isHighway && resolution > zoomToResolution(8)) return new Style();
    const width = 2;
    const color = isHighway
      ? palette.road.highway.main
      : palette.road.national.main;
    const order = isHighway ? 10 : 9;

    return [
      new Style({
        stroke: new Stroke({
          width,
          color,
        }),
        zIndex: order,
      }),
      new Style({
        stroke: new Stroke({
          width: width + 3,
          color: palette.contrast,
        }),
        zIndex: 8,
      }),
    ];
  }
  const withEdge = resolution < zoomToResolution(17);
  const isBridge = [2703, 2713, 2723, 2733].includes(code);
  const isTunnel = [2704, 2714, 2724, 2734].includes(code);
  const width = rdCLWidth({ rnkWidth, r_width }, resolution);
  const color = rdCLColor(rdCtg, isHighway, palette);
  const strokeWidth = isBridge ? 5 : 3;
  const order = rdCLOrder(rdCtg, isHighway);

  return [
    new Style({
      stroke: new Stroke({
        width,
        color: !isTunnel ? color.main : palette.background,
      }),
      zIndex: zIndex.road + (lvOrder ?? 0) * 10 + order,
    }),
    !withEdge
      ? new Style({
          stroke: new Stroke({
            width: width + strokeWidth,
            color: color.edge,
          }),
          zIndex: zIndex.roadBg + (lvOrder ?? 0) * 10,
        })
      : new Style(),
  ];
}
