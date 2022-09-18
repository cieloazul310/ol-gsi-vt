import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  WStructureAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { wstructureAreaCommonStyle } from '../../../common';

export default function wstructureaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<WStructureAreaCode>;

  return wstructureAreaCommonStyle({ code: ftCode }, resolution, theme);
}
