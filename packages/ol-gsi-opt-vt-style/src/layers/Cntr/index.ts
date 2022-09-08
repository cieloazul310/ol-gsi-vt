import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { OptVTFeatureProperties } from '../../types';

export default function contourStyle(feature: FeatureLike, resolution: number) {
  const { vt_alti } = feature.getProperties() as OptVTFeatureProperties<{
    vt_alti?: number;
  }>;

  const color =
    resolution > 19.11 ? palette.contour.main : palette.contour.light;
  const width = resolution > 38.22 || (vt_alti && vt_alti % 50 !== 0) ? 1 : 2;

  return new Style({
    stroke: new Stroke({
      color,
      width,
    }),
    zIndex: zIndex.contour,
  });
}