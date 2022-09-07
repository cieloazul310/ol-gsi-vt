import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { isNumber, zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function buildingStyle(
  feature: FeatureLike,
  resolution: number
) {
  if (resolution >= 2.39) return new Style();
  const { ftCode, lvOrder } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  const stroke =
    ftCode === 3111
      ? undefined
      : new Stroke({
          color: palette.buiding.stroke,
          width: 1,
        });

  return new Style({
    fill: new Fill({
      color: palette.buiding.fill,
    }),
    stroke,
    zIndex: zIndex.building + (lvOrder ?? 0) * 10,
  });
}
