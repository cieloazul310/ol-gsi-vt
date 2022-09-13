import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { contourCommonStyle } from '../../../common';

export default function isbtStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_depth } =
    feature.getProperties() as GsiOptVTFeatureProperties<
      {
        vt_depth?: number;
      },
      7371 | 7372 | 7373
    >;
  return contourCommonStyle(
    { code: vt_code, altiDepth: vt_depth },
    resolution,
    theme
  );
}
