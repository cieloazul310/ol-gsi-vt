import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  WaterAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { waterareaCommonStyle } from '../../../common';

export default function waterareaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    Extract<WaterAreaCode, 5000 | 55000>
  >;
  return waterareaCommonStyle({ code: ftCode }, resolution, theme);
}
