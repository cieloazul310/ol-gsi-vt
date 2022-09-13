import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { boundaryCommonStyle } from '../../../common';

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    1211 | 1212 | 1221 | 6101 | 51212 | 51221
  >;
  return boundaryCommonStyle({ code: ftCode }, resolution, theme);
}
