import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  WaterLineCode,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { waterlineCommonStyle } from '../../../common';

export default function lakeStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    Extract<WaterLineCode, 5231 | 5232 | 5233>
  >;
  return waterlineCommonStyle({ code: ftCode }, resolution, theme);
}
