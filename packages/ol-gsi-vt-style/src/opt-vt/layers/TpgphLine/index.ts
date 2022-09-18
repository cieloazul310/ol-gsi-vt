import { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  TpgphLineCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { tpgphLineCommonStyle } from '../../../common';

export default function tpgphLineStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<TpgphLineCode>;

  return tpgphLineCommonStyle({ code: vt_code }, resolution, theme);
}
