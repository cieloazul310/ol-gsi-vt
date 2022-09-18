import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  SeaRouteCode,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { searouteCommonStyle } from '../../../common';

export default function wrltLineStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Exclude<SeaRouteCode, 55902>
  >;

  return searouteCommonStyle({ code: vt_code }, resolution, theme);
}
