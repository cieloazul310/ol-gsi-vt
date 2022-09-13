import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { contourCommonStyle } from '../../../common';

export default function contourStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, alti } = feature.getProperties() as GsiVTFeatureProperties<
    { alti?: number },
    7351 | 7353 | 7352 | 7371 | 7372 | 7373
  >;
  return contourCommonStyle(
    { code: ftCode, alti, altiDepth: alti },
    resolution,
    theme
  );
}
