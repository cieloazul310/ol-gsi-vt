import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  zoomToResolution,
  type Theme,
  type GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function roadStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { rnkWidth, rdCtg, ftCode, lvOrder } =
    feature.getProperties() as GsiVTFeatureProperties<{
      motorway?: 0 | 1 | 9;
      rdCtg?: 0 | 1 | 2 | 3 | 5 | 6;
      tollSect?: 0 | 1 | 2 | 9;
      rnkWidth?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      Width?: number;
      medSect?: number;
    }>;

  if (resolution > zoomToResolution(9)) {
    const width = ftCode === 52701 ? 1 : 2;
    const color =
      ftCode === 52701
        ? palette.road.national.main
        : ftCode === 52703
        ? palette.road.highway.main
        : palette.road.highway.light;
    const order = ftCode === 52701 ? 9 : 10;

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

  if (resolution < zoomToResolution(17) && ftCode <= 2700) {
    return new Style({
      stroke: new Stroke({
        color: palette.road.edge,
        width: 2,
      }),
      zIndex: zIndex.road + 60,
    });
  }

  const width =
    resolution > zoomToResolution(12)
      ? 1
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

  // const strokeWidth = [2703, 2713, 2723, 2733].includes(ftCode) ? 6 : 3;

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
            width: width + 3,
            color: [2703, 2713, 2723, 2733].includes(ftCode)
              ? palette.road.edge
              : color.main,
          }),
          zIndex: zIndex.roadBg + (lvOrder ?? 0) * 10,
        })
      : new Style(),
  ];
}
