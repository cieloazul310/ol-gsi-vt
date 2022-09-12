import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  OptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
    Record<string, unknown>,
    1211 | 1212 | 1221
  >;

  return new Style({
    stroke: new Stroke({
      width: 2,
      color: palette.boundary.main,
      lineDash: [4, 4],
    }),
    zIndex: zIndex.boundary,
  });
}
