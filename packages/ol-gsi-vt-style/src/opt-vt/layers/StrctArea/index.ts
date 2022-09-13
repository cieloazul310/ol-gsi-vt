import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function strctAreaStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    4301 | 4302
  >;

  return new Style({
    fill: new Fill({
      color: palette.building.fill,
    }),
    stroke: new Stroke({
      color: palette.building.stroke,
      width: 1,
    }),
    zIndex: zIndex.building,
  });
}
