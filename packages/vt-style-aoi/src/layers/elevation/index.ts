import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import RegularShape from 'ol/style/RegularShape';
import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';
import { isNumber, altiToString, dspPosToPosition } from '../../utils';

export default function elevationStyle(feature: FeatureLike) {
  const { ftCode, alti, altiDpth, dspPos } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();
  const { textAlign, textBaseline, offsetX, offsetY } =
    dspPosToPosition(dspPos);

  return [
    ftCode === 7221
      ? new Style({
          image: new RegularShape({
            points: 3,
            radius: 4,
            fill: new Fill({ color: '#f33' }),
          }),
        })
      : new Style({
          image: new Circle({
            radius: 1,
            fill: new Fill({
              color: '#333',
            }),
          }),
        }),
    new Style({
      text: new Text({
        text: altiToString(alti || altiDpth),
        fill: new Fill({
          color: '#333',
        }),
        font: '9px Helvetica, sans-serif',
        textAlign,
        textBaseline,
        offsetX: ftCode === 7221 ? 0 : offsetX,
        offsetY: ftCode === 7221 ? 8 : offsetY,
      }),
    }),
  ];
}
