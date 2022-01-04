import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

export function symbolStyle(feature: FeatureLike) {
  const { ftCode, knj } = feature.getProperties();

  if ([51301, 51302, 51303].includes(ftCode as number)) {
    const zIndex = ftCode === 51301 ? 1020 : ftCode === 51302 ? 1010 : 1000;
    return [
      new Style({
        text: new Text({
          text: knj as string,
          fill: new Fill({ color: '#777' }),
          stroke: new Stroke({ width: 2, color: '#fff' }),
          offsetY: -10
        }),
        zIndex,
      }),
      new Style({
        image: new Circle({
          radius: 3,
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ width: 1, color: '#777' }),
        }),
        zIndex,
      }),
    ];
  }

  return new Style();
}
