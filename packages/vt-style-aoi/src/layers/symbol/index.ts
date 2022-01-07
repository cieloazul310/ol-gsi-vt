import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

import { isNumber, dspPosToPosition } from '../../utils';

export default function symbolStyle(feature: FeatureLike, resolution: number) {
  const { ftCode, knj, dspPos } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  if ([51301, 51302, 51303].includes(ftCode)) {
    if (resolution > 2445.98 && ftCode !== 51301) return null;
    if (resolution > 1222.99 && ![51301, 51302].includes(ftCode)) return null;

    const zIndex = ftCode === 51301 ? 1002 : ftCode === 51302 ? 1001 : 1000;
    const radius = ftCode === 51301 ? 4 : ftCode === 51302 ? 3 : 2;
    const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(
      dspPos,
      radius
    );
    return [
      new Style({
        text: new Text({
          text: knj as string,
          fill: new Fill({ color: '#333' }),
          stroke: new Stroke({ width: 2, color: '#fff' }),
          font: `bold ${radius + 10}px sans-serif`,
          textAlign,
          textBaseline,
          offsetX,
          offsetY,
        }),
        zIndex: zIndex + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ width: 1, color: '#333' }),
        }),
        zIndex,
      }),
    ];
  }

  return new Style();
}
