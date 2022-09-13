import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { RailwayProperties } from './types';

export default function lessThan8(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  if (resolution > zoomToResolution(8)) return new Style();

  const { vt_rtcode } = feature.getProperties() as RailwayProperties;

  const isShinkansen = vt_rtcode === '新幹線';
  const width = !isShinkansen ? 1 : 2;
  const color = !isShinkansen ? palette.rail.jr : palette.rail.shinkansen;
  const zIdx = zIndex.railway + (!isShinkansen ? 0 : 1);
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
