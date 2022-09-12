import Style from 'ol/style/Style';
import type { FeatureLike } from 'ol/Feature';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import lessThan8 from './z7-8';
import lessThan12 from './z9-11';
import over12 from './z12';

export default function railwayStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  if (resolution > zoomToResolution(9)) {
    return lessThan8(feature, resolution, theme);
  }
  if (resolution > zoomToResolution(12)) {
    return lessThan12(feature, resolution, theme);
  }
  if (resolution <= zoomToResolution(12)) {
    return over12(feature, resolution, theme);
  }
  /*
  const { ftCode, snglDbl, rtCode, rtCode1, rtCode10, lvOrder, staCode } =
    feature.getProperties() as RailwayProperties;

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

  if (snglDbl === 0) return new Style();
  if (snglDbl === 4) {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: '#f69',
      }),
      zIndex: zIndex.station,
    });
  } else if (staCode && staCode !== '0') {
    return new Style({
      stroke: new Stroke({
        width: 4,
        color: '#666',
      }),
      zIndex: zIndex.station,
    });
  } else {
    const width =
      resolution > 152.87
        ? 1
        : rtCode10 === '1'
        ? 4
        : snglDbl === 1
        ? 1
        : snglDbl === 2
        ? 2
        : 1;
    const color = rtCode10 === '1' ? '#66d' : '#666';

    return [
      new Style({
        stroke: new Stroke({
          width,
          color,
        }),
        zIndex: zIndex.railway + (lvOrder ?? 0) * 10,
      }),
      new Style({
        stroke: new Stroke({
          width: width + 2,
          color: '#fff',
        }),
        zIndex: zIndex.railwayBg + (lvOrder ?? 0) * 10,
      }),
    ];
  }
  */
}
