import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import { altiToString } from '../../utils';

export default function transpStyle(feature: FeatureLike) {
  const { ftCode, nRNo } = feature.getProperties();

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
      }),
    ];
  }

  return new Style();
}
