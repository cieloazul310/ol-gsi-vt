/** #### 最適化ベクトルタイルの属性
 *
 * #### 使用例
 * ```typescript
 * const { vt_code } = feature.getProperties() as OptVTFeatureProperties;
 * ```
 * https://github.com/gsi-cyberjapan/optimal_bvmap
 */
export type OptVTFeatureProperties<
  T extends Record<string, unknown> = Record<string, unknown>,
  VTCode extends number = number
> = {
  layer: OptVTLayerName;
  vt_code: VTCode;
  vt_lvorder?: 0 | 1 | 2 | 3 | 4;
  vt_flag17?: 0 | 1 | 2;
} & T;

/** 最適化ベクトルタイルのレイヤ名
 * - `AdmArea`: 行政区画
 * - `AdmBdry`: 行政区画線
 * - `RdEdg`: 道路縁
 * - `RdCompt`: 道路構成線
 * - `RdCL`: 道路中心線
 * - `RailTrCL`: 軌道の中心線
 * - `BldA`: 建築物
 * - `StrctLine`: 構造物線
 * - `StrctArea`: 構造物面
 * - `WA`: 水域
 * - `Cstline`: 海岸線
 * - `WL`: 水涯線
 * - `RvrCL`: 河川中心線
 * - `WStrA`: 水部構造面
 * - `WStrL`: 水部構造物線
 * - `WRltLine`: 水部表記線
 * - `SpcfArea`: 特定地区界
 * - `Cntr`: 等高線
 * - `Isbt`: 等深線
 * - `TpgphArea`: 地形表記面
 * - `TpgphLine`: 地形表記線
 * - `RailCL`: 鉄道中心線
 * - `PwrTrnsmL`: 送電線
 * - `Anno`: 注記
 */
export type OptVTLayerName = // 行政区画

    | 'AdmArea'
    /* 行政区画界線 */
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
