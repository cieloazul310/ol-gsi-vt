import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function tpgphAreaStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    7401 | 7402 | 7403
  >;

  const color =
    vt_code === 7401
      ? palette.tpgphArea.wetland
      : vt_code === 7403
      ? palette.tpgphArea.sand
      : palette.tpgphArea.firn;

  return new Style({
    fill: new Fill({
      color,
    }),
    zIndex: zIndex.tpgphArea,
  });
}
