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
  const { vt_sngldbl, vt_lvorder, vt_rtcode, vt_railstate } =
    feature.getProperties() as RailwayProperties;

  if (vt_sngldbl === '非表示') return new Style();
  if (resolution > zoomToResolution(14) && vt_rtcode === '地下鉄')
    return new Style();
  if (resolution < zoomToResolution(17) && vt_sngldbl !== '駅部分')
    return new Style();

  if (vt_sngldbl === '駅部分') {
    const width = resolution > zoomToResolution(15) ? 4 : 8;
    if (vt_railstate === '地上' || vt_railstate === '通常部') {
      return new Style({
        stroke: new Stroke({
          width,
          color: palette.rail.station.main,
          lineCap: 'square',
        }),
        zIndex: zIndex.station,
      });
    }
    const isBrigdge = vt_railstate === '橋・高架';

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

  const width = vt_sngldbl === '単線' ? 1 : vt_sngldbl === '複線以上' ? 2 : 1;
  const color = vt_rtcode === 'JR' ? palette.rail.jr : palette.rail.shitetsu;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: zIndex.railway + (vt_lvorder ?? 0) * 10,
    }),
    new Style({
      stroke: new Stroke({
        width: width + 2,
        color: '#fff',
      }),
      zIndex: zIndex.railwayBg + (vt_lvorder ?? 0) * 10,
    }),
  ];
}
