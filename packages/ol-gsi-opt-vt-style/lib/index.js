import Style from 'ol/style/Style';
import { buildingStyle, boundaryStyle, coastlineStyle, contourStyle, isbtStyle, labelStyle, railwayStyle, railTrCLStyle, riverStyle, roadStyle, rdEdgStyle, rdComptStyle, spcfAreaStyle, waterareaStyle, tpgphAreaStyle, } from './layers';
/*
export default function AoiStyle(mode?: 'light' | 'dark') {
  if (mode === 'dark') return new Style();
  return new Style();
}
*/
export default function gsiOptVtStyle(feature, resolution) {
    const properties = feature.getProperties();
    switch (properties.layer) {
        /*
        case 'Cstline':
          return coastlineStyle();
        case 'elevation':
          return elevationStyle(feature);
        case 'lake':
          return lakeStyle();
        case 'searoute':
          return searouteStyle();
        case 'symbol':
          return symbolStyle(feature, resolution);
        */
        case 'AdmBdry':
            return boundaryStyle(feature);
        case 'Anno':
            return labelStyle(feature, resolution);
        case 'BldA':
            return buildingStyle(feature, resolution);
        case 'Cntr':
            return contourStyle(feature, resolution);
        case 'Cstline':
            return coastlineStyle();
        case 'Isbt':
            return isbtStyle(feature, resolution);
        case 'RailCL':
            return railwayStyle(feature, resolution);
        case 'RailTrCL':
            return railTrCLStyle(feature);
        case 'RvrCL':
            return riverStyle(feature);
        case 'RdCL':
            return roadStyle(feature, resolution);
        case 'RdEdg':
            return rdEdgStyle(feature);
        case 'RdCompt':
            return rdComptStyle();
        case 'SpcfArea':
            return spcfAreaStyle();
        case 'TpgphArea':
            return tpgphAreaStyle(feature);
        case 'WA':
            return waterareaStyle(feature);
        default:
            return new Style();
    }
}
//# sourceMappingURL=index.js.map