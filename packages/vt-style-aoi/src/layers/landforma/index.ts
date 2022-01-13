import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';
import { isNumber, zIndex } from '../../utils';

export default function landformaStyle(feature: FeatureLike) {
  const { ftCode } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();
  const color = ftCode === 7401 ? '#dfe' : ftCode === 7403 ? '#ffd' : '#eef';

  return new Style({
    fill: new Fill({
      color,
    }),
    zIndex: zIndex.landforma,
  });
}
