import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  LandformPointCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';

export default function landformpStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<LandformPointCode>;
  return annoCommonStyle({ code: ftCode }, resolution, theme);
}
