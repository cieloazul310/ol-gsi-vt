import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  WaterLineCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { waterlineCommonStyle } from '../../../common';

export default function coastlineStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<WaterLineCode, 5101 | 5103>
  >;
  return waterlineCommonStyle({ code: vt_code }, resolution, theme);
}
