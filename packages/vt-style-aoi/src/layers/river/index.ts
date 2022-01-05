import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export default function riverStyle(feature: FeatureLike) {
  const { ftCode } = feature.getProperties();

  return new Style({
    stroke: new Stroke({
      color: '#cdf',
      width: 1,
      lineDash: ftCode === 5322 ? [4, 4] : undefined,
    }),
    zIndex: 0,
  });
}
