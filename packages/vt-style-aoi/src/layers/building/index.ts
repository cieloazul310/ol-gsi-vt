import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import { isNumber } from '../../utils';

export default function buildingStyle(feature: FeatureLike) {
  const { ftCode, lvOrder } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  const stroke =
    ftCode === 3111
      ? undefined
      : new Stroke({
          color: '#ed9',
          width: 1,
        });

  return new Style({
    fill: new Fill({
      color: '#feb',
    }),
    stroke,
    zIndex: 150 + (lvOrder ?? 0) * 10,
  });
}
