import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function wstrAStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    5401 | 5411
  >;

  return new Style({
    fill: new Fill({
      color: palette.structure,
    }),
    zIndex: zIndex.building,
  });
}
