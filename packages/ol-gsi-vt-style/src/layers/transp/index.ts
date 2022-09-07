import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  altiToString,
  isNumber,
  zIndex,
  palette,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function transpStyle(feature: FeatureLike) {
  const { ftCode, nRNo, name } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  if (ftCode === 2901) {
    return [
      new Style({
        text: new Text({
          text: altiToString(nRNo),
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ color: palette.transp.national, width: 3 }),
          font: '9px sans-serif',
          padding: [0, 0, 0, 1],
          backgroundFill: new Fill({ color: palette.transp.national }),
          backgroundStroke: new Stroke({
            color: '#fff',
            width: 2,
            lineCap: 'round',
            lineJoin: 'round',
          }),
        }),
        zIndex: zIndex.transp,
      }),
    ];
  }
  if ([2941, 2942, 2943, 2944, 2945].includes(ftCode)) {
    return new Style({
      text: new Text({
        text: name,
        fill: new Fill({ color: palette.road.highway.main }),
        stroke: new Stroke({ color: '#fff', width: 4 }),
        font: '11px sans-serif',
      }),
      zIndex: zIndex.transp,
    });
  }

  return new Style();
}
