import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  RdEdgCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { rdEdgComptStyle } from '../../../common/road';

export default function rdEdgStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<RdEdgCode>;
  return rdEdgComptStyle({ code: vt_code }, resolution, theme);
}
