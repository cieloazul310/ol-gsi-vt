import type { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';

import {
  buildingStyle,
  boundaryStyle,
  coastlineStyle,
  contourStyle,
  isbtStyle,
  labelStyle,
  lakeStyle,
  landformaStyle,
  railwayStyle,
  riverStyle,
  roadStyle,
  searouteStyle,
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
    case 'elevation':
      return elevationStyle(feature);
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
    case 'Anno':
      return labelStyle(feature);
    case 'Cntr':
      return contourStyle(feature, resolution);
    case 'Cstline':
      return coastlineStyle();
    case 'Isbt':
      return isbtStyle(feature, resolution);
    case 'RdCL':
      return roadStyle(feature, resolution);
    case 'WA':
      return waterareaStyle();
    default:
      return new Style();
  }
}
