import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function admAreaStyle(
  feature: FeatureLike,
  resolution: number,
  { palette }: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    1103 | 1104
  >;
  return new Style({
    fill: new Fill({ color: palette.background }),
    zIndex: 0,
  });
}
