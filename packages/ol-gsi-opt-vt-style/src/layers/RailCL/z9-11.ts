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
  const { vt_sngldbl, vt_rtcode } =
    feature.getProperties() as RailwayProperties;

  if (vt_sngldbl === '非表示') return new Style();

  const isJR = vt_rtcode === 'JR';
  const width = vt_sngldbl === '複線以上' ? 2 : 1;
  const color = isJR ? palette.rail.jr : palette.rail.shitetsu;
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
