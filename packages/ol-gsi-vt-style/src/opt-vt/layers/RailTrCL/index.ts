import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  RailTrCLCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { railTrCLCommonStyle } from '../../../common';

export default function railwayStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    RailTrCLCode
  >;

  return railTrCLCommonStyle({ code: vt_code }, resolution, theme);
}
