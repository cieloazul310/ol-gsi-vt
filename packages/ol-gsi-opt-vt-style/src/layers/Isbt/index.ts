import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  OptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function isbtStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_depth } = feature.getProperties() as OptVTFeatureProperties<{
    vt_depth?: number;
  }>;

  const width = resolution > 38.22 || (vt_depth && vt_depth % 50 !== 0) ? 1 : 2;

  return new Style({
    stroke: new Stroke({
      color: palette.isbt,
      width,
    }),
    zIndex: zIndex.contour,
  });
}
