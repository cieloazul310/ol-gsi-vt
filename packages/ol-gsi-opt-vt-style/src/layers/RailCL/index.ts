import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { zIndex } from '@cieloazul310/ol-gsi-vt-style-utils';
import { OptVTFeatureProperties } from '../../types';

type RailwayProperties = OptVTFeatureProperties<
  {
    vt_sngldbl?: '非表示' | '単線' | '複線以上' | '側線' | '駅部分';
    vt_railstate?:
      | '通常部'
      | 'トンネル'
      | '地上'
      | '雪覆い'
      | '地下'
      | '橋・高架'
      | '不明'
      | 'その他';
    vt_rtcode?:
      | '主要鉄道'
      | 'JR'
      | '新幹線'
      | 'JR以外'
      | '地下鉄'
      | '路面'
      | '索道'
      | '特殊鉄道'
      | '側線';
    vt_flag17?: 0 | 1 | 2;
  },
  8201
>;

export default function railwayStyle(feature: FeatureLike, resolution: number) {
  const { vt_sngldbl, vt_lvorder, vt_rtcode, vt_railstate } =
    feature.getProperties() as RailwayProperties;

  if (resolution < 1.1943 && vt_sngldbl !== '駅部分') return new Style();
  if (resolution > 305.75) {
    const isShinkansen = vt_rtcode === '新幹線';
    const width = !isShinkansen ? 1 : 2;
    const color = !isShinkansen ? '#666' : '#66d';
    const zIndex = !isShinkansen ? 8 : 11;

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
  if (resolution > 9.555 && vt_railstate === '地下') return new Style();

  if (vt_sngldbl === '非表示') return new Style();
  if (vt_sngldbl === '駅部分') {
    if (vt_railstate === '地上' || vt_railstate === '通常部') {
      return new Style({
        stroke: new Stroke({
          width: 4,
          color: '#fac',
        }),
        zIndex: zIndex.station,
      });
    }

    const isBrigdge = vt_railstate === '橋・高架';

    return [
      new Style({
        stroke: new Stroke({
          width: 4,
          color: isBrigdge ? '#fac' : '#fee',
          lineCap: 'square',
        }),
        zIndex: zIndex.station,
      }),
      new Style({
        stroke: new Stroke({
          width: 6,
          color: '#fac',
          lineCap: 'square',
        }),
        zIndex: zIndex.station - 1,
      }),
    ];
  }
  const width =
    resolution > 152.87
      ? 1
      : vt_rtcode === '新幹線'
      ? 4
      : vt_sngldbl === '単線'
      ? 1
      : vt_sngldbl === '複線以上'
      ? 2
      : 1;
  const color = vt_rtcode === '新幹線' ? '#66d' : '#666';

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
