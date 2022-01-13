import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import { altiToString, isNumber, zIndex } from '../../utils';

export default function transpStyle(feature: FeatureLike) {
  const { ftCode, nRNo, name } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  if (ftCode === 2901) {
    return [
      new Style({
        text: new Text({
          text: altiToString(nRNo),
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ color: '#66f', width: 3 }),
          font: '9px sans-serif',
          padding: [0, 0, 0, 1],
          backgroundFill: new Fill({ color: '#66f' }),
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
        fill: new Fill({ color: '#7a7' }),
        stroke: new Stroke({ color: '#fff', width: 4 }),
        font: '11px sans-serif',
      }),
      zIndex: zIndex.transp,
    });
  }

  return new Style();
}
