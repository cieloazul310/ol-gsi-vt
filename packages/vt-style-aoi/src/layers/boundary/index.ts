import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export default function boundaryStyle(feature: FeatureLike) {
  return new Style({
    stroke: new Stroke({
      width: 2,
      color: '#a9b',
      lineDash: [4, 4],
    }),
    zIndex: 3,
  });
}
