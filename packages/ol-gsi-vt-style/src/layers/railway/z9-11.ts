import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { RailwayProperties } from './types';

export default function lessThan12(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { snglDbl, rtCode1, rtCode10 } =
    feature.getProperties() as RailwayProperties;

  if (snglDbl === 0) return new Style();

  const leftFive = rtCode1?.slice(5);
  const isJR = leftFive === '40201' || leftFive === '40216';
  const isShinkansen = rtCode10 === '1';
  const width = isShinkansen ? 3 : snglDbl === 2 ? 2 : 1;
  const color = isShinkansen
    ? palette.rail.shinkansen
    : isJR
    ? palette.rail.jr
    : palette.rail.shitetsu;
  const zIdx = zIndex.railway;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: zIdx,
    }),
    new Style({
      stroke: new Stroke({
        width: width + 3,
        color: palette.contrast,
      }),
      zIndex: zIndex.railwayBg,
    }),
  ];
}
