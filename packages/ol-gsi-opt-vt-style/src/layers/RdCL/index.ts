import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { isNumber, zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { OptVTFeatureProperties } from '../../types';

type RdCLProperties = OptVTFeatureProperties<{
  vt_rdctg?:
    | '主要道路'
    | '高速自動車国道等'
    | '国道'
    | '都道府県道'
    | '市区町村道';
  vt_drworder: number;
  vt_rnkwidth?:
    | '3m未満'
    | '3m-5.5m未満'
    | '5.5m-13m未満'
    | '13m-19.5m未満'
    | '19.5m以上'
    | 'その他'
    | '不明';
  vt_width?: number;
  vt_tollSect?: '無料' | '有料' | '暫定無料' | '不明';
  vt_motorway?: 1 | 9;
}>;

export default function roadStyle(feature: FeatureLike, resolution: number) {
  const {
    vt_code,
    vt_lvorder,
    vt_flag17,
    vt_rdctg,
    vt_rnkwidth,
    vt_drworder,
    ...props
  } = feature.getProperties() as RdCLProperties;

  if (!isNumber(vt_code)) throw new Error();

  if (resolution > 305.75) {
    const width = vt_rdctg === '主要道路' ? 1 : 2;
    const color =
      vt_rdctg === '主要道路'
        ? palette.road.national.main
        : vt_rdctg === '高速自動車国道等'
        ? palette.road.highway.main
        : palette.road.highway.light;

    return [
      new Style({
        stroke: new Stroke({
          width,
          color,
        }),
        zIndex: vt_drworder + 6,
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
  if (resolution < 1.19 && vt_code <= 2700) {
    return new Style({
      stroke: new Stroke({
        color: '#ccc',
        width: 2,
      }),
    });
  }

  if (resolution < 1.19 && vt_code > 2700) return new Style();
  const width =
    resolution > 50
      ? 1
      : (vt_rnkwidth === '3m未満'
          ? 0.5
          : vt_rnkwidth === '3m-5.5m未満'
          ? 1
          : vt_rnkwidth === '5.5m-13m未満'
          ? 2
          : vt_rnkwidth === '13m-19.5m未満'
          ? 3
          : vt_rnkwidth === '19.5m以上'
          ? 3
          : 0) * Math.max(1, 4.78 / resolution);
  const color =
    vt_rdctg === '国道' || vt_rdctg === '主要道路'
      ? palette.road.national
      : vt_rdctg === '都道府県道'
      ? palette.road.pref
      : vt_rdctg === '市区町村道'
      ? palette.road.basic
      : vt_rdctg === '高速自動車国道等'
      ? palette.road.highway
      : palette.road.basic;

  const order =
    vt_rdctg === '国道'
      ? 9
      : vt_rdctg === '都道府県道'
      ? 8
      : vt_rdctg === '市区町村道'
      ? 2
      : vt_rdctg === '高速自動車国道等'
      ? 9
      : 1;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color: color.light,
      }),
      zIndex: zIndex.road + (vt_lvorder ?? 0) * 10 + order,
    }),
    new Style({
      stroke: new Stroke({
        width: width + 3,
        color: [2703, 2713, 2723, 2733].includes(vt_code) ? '#999' : color.main,
      }),
      zIndex: zIndex.roadBg + (vt_lvorder ?? 0) * 10,
    }),
  ];
}
