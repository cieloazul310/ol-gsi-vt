import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { RailwayProperties } from './types';

export default function over12(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { ftCode, snglDbl, lvOrder, rtCode, rtCode1, railState, staCode } =
    feature.getProperties() as RailwayProperties;

  if (snglDbl === 0) return new Style();

  const rtCodeLeft5 = rtCode1?.slice(5) ?? rtCode?.slice(5);
  const isChikatetsu = rtCodeLeft5 === '40203';
  const isJR = rtCodeLeft5 === '40202' || rtCodeLeft5 === '40205';

  if (resolution > zoomToResolution(14) && isChikatetsu) return new Style();
  if (resolution < zoomToResolution(17) && snglDbl !== 4) {
    if ([2804, 2814, 2824, 2834, 2844].includes(ftCode)) return new Style();
    return new Style({
      stroke: new Stroke({
        width: 1,
        color: palette.rail.shitetsu,
      }),
      zIndex: zIndex.railway,
    });
  }

  if ((staCode && staCode !== '0') || snglDbl === 4) {
    const width =
      resolution > zoomToResolution(13)
        ? 2
        : resolution > zoomToResolution(15)
        ? 4
        : 8;
    if (railState === 0) {
      return new Style({
        stroke: new Stroke({
          width,
          color: palette.rail.station.main,
          lineCap: 'square',
        }),
        zIndex: zIndex.station,
      });
    }
    const isBrigdge = railState === 1;

    return [
      new Style({
        stroke: new Stroke({
          width,
          color: isBrigdge
            ? palette.rail.station.main
            : palette.rail.station.light,
          lineCap: 'square',
        }),
        zIndex: zIndex.station,
      }),
      new Style({
        stroke: new Stroke({
          width: width + 2,
          color: palette.rail.station.main,
          lineCap: 'square',
        }),
        zIndex: zIndex.station - 1,
      }),
    ];
  }

  const width = snglDbl === 1 ? 1 : snglDbl === 2 ? 2 : 1;
  const color = isJR ? palette.rail.jr : palette.rail.shitetsu;

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
