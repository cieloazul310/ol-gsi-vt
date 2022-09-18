import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  SeaRouteCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { searouteCommonStyle } from '../../../common';

export default function searouteStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Extract<SeaRouteCode, 5901 | 5902 | 55902>
  >;
  return searouteCommonStyle({ code: ftCode }, resolution, theme);
}
