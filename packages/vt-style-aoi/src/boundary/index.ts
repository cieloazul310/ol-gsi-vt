import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export function boundaryStyle(feature: FeatureLike) {
  return new Style({
    stroke: new Stroke({
      width: 1,
      color: '#ccc',
      lineDash: [4, 4],
    }),
    zIndex: 3,
  });
}
