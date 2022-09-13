import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  BoundaryCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { boundaryCommonStyle } from '../../../common';

export default function spefAreaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    Extract<BoundaryCode, 6101>
  >;
  return boundaryCommonStyle({ code: vt_code }, resolution, theme);
}
