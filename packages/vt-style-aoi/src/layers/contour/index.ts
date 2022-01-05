import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export default function contourStyle(feature: FeatureLike, resolution: number) {
  const { ftCode, altiFlag } = feature.getProperties();
  
  const isDepth = [7371, 7372, 7373].includes(ftCode as number);
  const color = isDepth ? '#c5d6f9' : resolution > 19.11 ? '#dcb' : '#edc';
  const width = resolution > 38.22 || altiFlag ? 1 : 2;

  return new Style({
    stroke: new Stroke({
      color,
      width,
    }),
    zIndex: 1,
  });
}
