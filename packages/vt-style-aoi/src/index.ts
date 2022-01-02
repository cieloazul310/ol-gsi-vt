import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
// import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';

import { roadStyle } from './road';

/*
export default function AoiStyle(mode?: 'light' | 'dark') {
  if (mode === 'dark') return new Style();
  return new Style();
}
*/
export default function AoiStyle(feature: FeatureLike, resolution: number) {
  const properties = feature.getProperties();
  if (properties.layer === 'road')
    return roadStyle();
  if (properties.layer === 'contour')
    return new Style({
      stroke: new Stroke({
        width: 1,
        color: '#fdd',
      }),
    });
  return new Style();
}
