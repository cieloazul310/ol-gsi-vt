import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { waterareaCommonStyle } from '../../../common';

export default function waterareaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    | 5100
    | 5101
    | 5102
    | 5103
    | 5111
    | 5121
    | 5200
    | 5201
    | 5202
    | 5203
    | 5211
    | 5212
    | 5221
    | 5231
    | 5232
    | 5233
    | 5242
    | 5251
  >;
  return waterareaCommonStyle({ code: vt_code }, resolution, theme);
}
