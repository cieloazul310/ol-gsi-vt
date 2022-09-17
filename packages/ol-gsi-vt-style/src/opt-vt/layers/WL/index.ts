import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  WaterLineCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { waterlineCommonStyle } from '../../../common';

export default function wlStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    Extract<WaterLineCode, 5201 | 5203 | 5231 | 5233>
  >;
  return waterlineCommonStyle({ code: vt_code }, resolution, theme);
}
