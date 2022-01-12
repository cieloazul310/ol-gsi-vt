import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export default function boundaryStyle(feature: FeatureLike) {
  const { ftCode } = feature.getProperties();

  return new Style({
    stroke: new Stroke({
      width: ftCode !== 6101 ? 2 : 1,
      color: ftCode !== 6101 ? '#a9b' : '#aaa',
      lineDash: ftCode !== 6101 ? [4, 4] : undefined,
    }),
    zIndex: 200,
  });
}
