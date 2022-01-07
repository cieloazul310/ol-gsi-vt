import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import { isNumber, isString, dspPosToPosition } from '../../utils';

export default function labelStyle(feature: FeatureLike) {
  const { ftCode, knj, dspPos, annoCtg } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();
  if (!isNumber(annoCtg)) throw new Error();
  if (!isString(knj)) throw new Error();
  const { textAlign, textBaseline, offsetX, offsetY } =
    dspPosToPosition(dspPos);
  return new Style({
    text: new Text({
      text: knj,
      fill: new Fill({ color: '#777' }),
      textAlign,
      textBaseline,
      offsetX,
      offsetY,
    }),
    zIndex: 900,
  });
}
