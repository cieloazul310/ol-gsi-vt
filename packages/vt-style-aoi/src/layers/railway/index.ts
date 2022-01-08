import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

import { isNumber } from '../../utils';

export default function railwayStyle(feature: FeatureLike, resolution: number) {
  const { ftCode, snglDbl, rtCode10, lvOrder } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  if ([58201, 58203, 58204].includes(ftCode)) {
    const width = ftCode === 58201 ? 1 : 2;
    const color =
      ftCode === 58201 ? '#666' : ftCode === 58203 ? '#66d' : '#88d';
    const zIndex = ftCode === 58201 ? 8 : 11;

    return [
      new Style({
        stroke: new Stroke({
          width,
          color,
        }),
        zIndex,
      }),
      new Style({
        stroke: new Stroke({
          width: width + 3,
          color: '#fff',
        }),
        zIndex: 7,
      }),
    ];
  }

  if (snglDbl === 0) return null;
  if (snglDbl === 4) {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: '#666',
      }),
      zIndex: 10,
    });
  } else {
    const width =
      resolution > 50
        ? 1
        : rtCode10 === '2'
        ? 4
        : snglDbl === 1
        ? 2
        : snglDbl === 2
        ? 3
        : 1;
    const color = rtCode10 === '2' ? '#666' : '#666';
    return new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: 150 + (lvOrder ?? 0) * 10,
    });
  }
}
