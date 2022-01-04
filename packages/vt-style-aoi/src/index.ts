import Style from 'ol/style/Style';
import { FeatureLike } from 'ol/Feature';

import { boundaryStyle } from './boundary';
import { coastlineStyle } from './coastline';
import { contourStyle } from './contour';
import { elevationStyle } from './elevation';
import { lakeStyle } from './lake';
import { railwayStyle } from './railway';
import { riverStyle } from './river';
import { roadStyle } from './road';
import { searouteStyle } from './searoute';
import { symbolStyle } from './symbol';
import { waterareaStyle } from './waterarea';

/*
export default function AoiStyle(mode?: 'light' | 'dark') {
  if (mode === 'dark') return new Style();
  return new Style();
}
*/
export default function AoiStyle(feature: FeatureLike, resolution: number) {
  const properties = feature.getProperties();
  switch (properties.layer) {
    case 'boundary':
      return boundaryStyle(feature);
    case 'coastline':
      return coastlineStyle();
    case 'contour':
      return contourStyle(feature, resolution);
    case 'elevation':
      return elevationStyle(feature);
    case 'lake':
      return lakeStyle();
    // case 'railway':
      // return railwayStyle(feature, resolution);
    case 'river':
      return riverStyle(feature);
    // case 'road':
      // return roadStyle(feature, resolution);
    case 'searoute':
      return searouteStyle();
    case 'symbol':
      return symbolStyle(feature);
    case 'waterarea':
      return waterareaStyle();
    default:
      return new Style();
  }
  /*
  if (properties.layer === 'road')
    return roadStyle(feature, resolution);
  if (properties.layer === 'contour')
    return new Style({
      stroke: new Stroke({
        width: 1,
        color: '#fdd',
      }),
    });
  return new Style();
  */
}
