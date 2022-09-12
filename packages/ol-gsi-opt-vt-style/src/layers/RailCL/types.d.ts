import { OptVTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

export type RailwayProperties = OptVTFeatureProperties<
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
