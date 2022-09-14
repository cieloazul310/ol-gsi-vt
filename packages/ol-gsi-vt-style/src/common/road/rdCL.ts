import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  type Theme,
  type RdCLCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { type VtRnkWidth, type VtRdCtg } from './utils';

export default function rdCLCommonStyle(
  {
    code,
    rnkWidth,
    rdCtg,
    lvOrder,
    r_width,
  }: {
    code: RdCLCode;
    rnkWidth?: VtRnkWidth;
    rdCtg?: VtRdCtg;
    lvOrder?: number;
    r_width?: number;
  },
  resolution: number,
  { palette, zIndex }: Theme
) {
  if (resolution > zoomToResolution(9)) {
    const isHighway = code === 52703 || code === 52704 || rdCtg === 3;
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
  const isLarge = resolution < zoomToResolution(17);
  const isBridge = [2703, 2713, 2723, 2733].includes(code);
  const width =
    resolution > zoomToResolution(12)
      ? 1
      : r_width
      ? Math.round((r_width ?? 1) / (resolution * 100))
      : (rnkWidth === 0
          ? 0.5
          : rnkWidth === 1
          ? 1
          : rnkWidth === 2
          ? 2
          : rnkWidth === 3
          ? 3
          : rnkWidth === 4
          ? 3
          : 0) * Math.max(1, zoomToResolution(15) / resolution);
  const color =
    rdCtg === 0
      ? palette.road.national
      : rdCtg === 1
      ? palette.road.pref
      : rdCtg === 2
      ? palette.road.basic
      : rdCtg === 3
      ? palette.road.highway
      : palette.road.basic;

  const strokeWidth = isBridge ? 5 : 3;

  const order =
    rdCtg === 0 ? 9 : rdCtg === 1 ? 8 : rdCtg === 2 ? 2 : rdCtg === 3 ? 9 : 1;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color: color.light,
      }),
      zIndex: zIndex.road + (lvOrder ?? 0) * 10 + order,
    }),
    !isLarge
      ? new Style({
          stroke: new Stroke({
            width: width + strokeWidth,
            color: color.main,
            /*
            color: [2703, 2713, 2723, 2733].includes(code)
              ? palette.road.edge
              : color.main,
              */
          }),
          zIndex: zIndex.roadBg + (lvOrder ?? 0) * 10,
        })
      : new Style(),
  ];
}
