import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import type { FeatureLike } from 'ol/Feature';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { OptVTFeatureProperties } from '../../types';

export default function waterareaStyle(feature: FeatureLike) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
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

  return new Style({
    fill: new Fill({
      color: palette.waterarea,
    }),
    zIndex: zIndex.waterarea,
  });
}
