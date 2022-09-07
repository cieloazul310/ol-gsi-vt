import type { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';

import {
  buildingStyle,
  boundaryStyle,
  coastlineStyle,
  contourStyle,
  elevationStyle,
  labelStyle,
  lakeStyle,
  landformaStyle,
  railwayStyle,
  riverStyle,
  roadStyle,
  searouteStyle,
  symbolStyle,
  transpStyle,
  waterareaStyle,
} from './layers';

/*
export default function AoiStyle(mode?: 'light' | 'dark') {
  if (mode === 'dark') return new Style();
  return new Style();
}
*/
export default function gsiOptVtStyle(
  feature: FeatureLike,
  resolution: number
) {
  const properties = feature.getProperties();
  switch (properties.layer) {
    /*
    case 'BldA':
      return buildingStyle(feature, resolution);
    case 'Cstline':
      return coastlineStyle();
    case 'Cntr':
      return contourStyle(feature, resolution);
    case 'elevation':
      return elevationStyle(feature);
    case 'Anno':
      return labelStyle(feature);
    case 'lake':
      return lakeStyle();
    case 'landforma':
      return landformaStyle(feature);
    case 'RailCL':
      return railwayStyle(feature, resolution);
    case 'RvrCL':
      return riverStyle(feature);
    case 'RdCL':
      return roadStyle(feature, resolution);
    case 'searoute':
      return searouteStyle();
    case 'symbol':
      return symbolStyle(feature, resolution);
    case 'transp':
      return transpStyle(feature);
    */
    case 'AdmBdry':
      return boundaryStyle(feature);
    case 'Cstline':
      return coastlineStyle();
    case 'RdCL':
      return roadStyle(feature, resolution);
    case 'WA':
      return waterareaStyle();
    default:
      return new Style();
  }
}
