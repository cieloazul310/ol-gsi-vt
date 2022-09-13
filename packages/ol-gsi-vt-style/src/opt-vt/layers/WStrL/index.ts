import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function wstrLStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    5901 | 5902 | 5911
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
