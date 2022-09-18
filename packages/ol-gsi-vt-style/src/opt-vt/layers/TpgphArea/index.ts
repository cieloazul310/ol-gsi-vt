import { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  TpgphAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { tpgphAreaCommonStyle } from '../../../common';

export default function tpgphAreaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<TpgphAreaCode>;

  return tpgphAreaCommonStyle({ code: vt_code }, resolution, theme);
}
