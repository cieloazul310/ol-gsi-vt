import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { OptVTFeatureProperties } from '../../types';

export default function isbtStyle(feature: FeatureLike, resolution: number) {
  const { vt_depth } = feature.getProperties() as OptVTFeatureProperties<{
    vt_depth?: number;
  }>;

  const width = resolution > 38.22 || (vt_depth && vt_depth % 50 !== 0) ? 1 : 2;

  return new Style({
    stroke: new Stroke({
      color: palette.contour.depth,
      width,
    }),
    zIndex: zIndex.contour,
  });
}
