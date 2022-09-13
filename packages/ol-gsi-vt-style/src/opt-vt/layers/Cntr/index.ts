import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { contourCommonStyle } from '../../../common';

export default function cntrStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_alti } =
    feature.getProperties() as GsiOptVTFeatureProperties<
      {
        vt_alti?: number;
      },
      7351 | 7352 | 7353
    >;

  return contourCommonStyle(
    { code: vt_code, alti: vt_alti },
    resolution,
    theme
  );
}
