import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';

import { isNumber } from '../../utils';

export default function roadStyle(feature: FeatureLike, resolution: number) {
  const { rnkWidth, rdCtg, ftCode } = feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();

  if ([52701, 52703, 52704].includes(ftCode)) {
    const width = ftCode === 52701 ? 1 : 2;
    const color =
      ftCode === 52701 ? '#c93' : ftCode === 52703 ? '#7a7' : '#9b9';
    const zIndex = ftCode === 52701 ? 9 : 10;

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
        zIndex: 8,
      }),
    ];
  }

  if (resolution < 1.19 && ftCode > 2700) return null;

  const width =
    resolution > 50
      ? 1
      : rnkWidth === 0
      ? 0.5
      : rnkWidth === 1
      ? 1
      : rnkWidth === 2
      ? 2
      : rnkWidth === 3
      ? 3
      : rnkWidth === 4
      ? 3
      : 0;
  const color =
    resolution < 1.19
      ? '#ccc'
      : rdCtg === 0
      ? '#bbb'
      : rdCtg === 1
      ? '#ccc'
      : rdCtg === 2
      ? '#ddd'
      : rdCtg === 3
      ? '#aaa'
      : '#ddd';
  const zIndex =
    rdCtg === 0 ? 9 : rdCtg === 1 ? 8 : rdCtg === 2 ? 2 : rdCtg === 3 ? 10 : 1;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex,
    }),
  ];
}
