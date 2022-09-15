import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  TpgphAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { tpgphAreaCommonStyle } from '../../../common';

export default function landformaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    TpgphAreaCode
  >;

  return tpgphAreaCommonStyle({ code: ftCode }, resolution, theme);
}
