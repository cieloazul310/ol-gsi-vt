import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  OptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function riverStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
    Record<string, unknown>,
    5301 | 5302 | 5321 | 5322 | 5331
  >;

  return new Style({
    stroke: new Stroke({
      color: palette.waterarea,
      width: 1,
      lineDash: vt_code === 5302 || vt_code === 5322 ? [4, 4] : undefined,
    }),
    zIndex: zIndex.river,
  });
}
