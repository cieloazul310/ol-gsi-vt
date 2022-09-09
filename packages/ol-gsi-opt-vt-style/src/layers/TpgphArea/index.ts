import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { OptVTFeatureProperties } from '../../types';

export default function tpgphAreaStyle(feature: FeatureLike) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
    Record<string, unknown>,
    7401 | 7402 | 7403
  >;

  const color =
    vt_code === 7401
      ? palette.landforma.wetland
      : vt_code === 7403
      ? palette.landforma.sand
      : palette.landforma.firn;

  return new Style({
    fill: new Fill({
      color,
    }),
    zIndex: zIndex.landforma,
  });
}
