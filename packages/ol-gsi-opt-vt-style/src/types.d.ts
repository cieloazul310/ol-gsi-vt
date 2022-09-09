declare module '*.svg' {
  const content: any;
  export default content;
}

export type OptVTFeatureProperties<
  T extends Record<string, unknown> = Record<string, unknown>,
  VTCode extends number = number
> = {
  vt_code: VTCode;
  vt_lvorder?: 0 | 1 | 2 | 3 | 4;
  vt_flag17?: 0 | 1 | 2;
} & T;

export type OptVTLayerName = // 行政区画

    | 'AdmArea'
    // 行政区画界線
    | 'AdmBdry'
    // 道路縁
    | 'RdEdg'
    // 道路構成線
    | 'RdCompt'
    // 道路中心線
    | 'RdCL'
    // 軌道の中心線
    | 'RailTrCL'
    // 建築物
    | 'BldA'
    // 構造物線
    | 'StrctLine'
    // 構造物面
    | 'StrctArea'
    // 水域
    | 'WA'
    // 海岸線
    | 'Cstline'
    // 水涯線
    | 'WL'
    // 河川中心線
    | 'RvrCL'
    // 水部構造面
    | 'WStrA'
    // 水部構造物線
    | 'WStrL'
    // 水部表記線
    | 'WRltLine'
    // 特定地区界
    | 'SpcfArea'
    // 等高線
    | 'Cntr'
    // 等深線
    | 'Isbt'
    // 地形表記面
    | 'TpgphArea'
    // 地形表記線
    | 'TpgphLine'
    // 鉄道中心線
    | 'RailCL'
    // 送電線
    | 'PwrTrnsmL'
    // 注記
    | 'Anno';
