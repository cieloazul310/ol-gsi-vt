import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  OptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function strctLineStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
    Record<string, unknown>,
    4201 | 4202
  >;

  return new Style({
    stroke: new Stroke({
      color: palette.structure,
      width: 4,
      lineCap: 'square',
    }),
    zIndex: zIndex.building,
  });
}
