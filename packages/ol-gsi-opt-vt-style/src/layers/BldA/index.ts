import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  OptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function buildingStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  // if (resolution >= 2.39) return new Style();
  const { vt_code, vt_lvorder } =
    feature.getProperties() as OptVTFeatureProperties;

  const stroke =
    vt_code === 3111
      ? undefined
      : new Stroke({
          color: palette.building.stroke,
          width: 1,
        });

  return new Style({
    fill: new Fill({
      color: palette.building.fill,
    }),
    stroke,
    zIndex: zIndex.building + (vt_lvorder ?? 0) * 10,
  });
}
