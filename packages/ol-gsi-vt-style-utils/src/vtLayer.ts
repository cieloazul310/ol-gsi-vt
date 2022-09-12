/** #### ベクトルタイルの属性
 *
 * #### 使用例
 * ```typescript
 * const { ftCode } = feature.getProperties() as OptVTFeatureProperties;
 * ```
 * https://github.com/gsi-cyberjapan/gsimaps-vector-experiment
 */
export type VTFeatureProperties<
  T extends Record<string, unknown> = Record<string, unknown>,
  FTCode extends number = number
> = {
  layer: VTLayerName;
  ftCode: FTCode;
  lvOrder?: 0 | 1 | 2 | 3 | 4;
} & T;

/** ベクトルタイルのレイヤ名
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
export type VTLayerName =
  | 'symbol'
  | 'boundary'
  | 'road'
  | 'railway'
  | 'searoute'
  | 'coastline'
  | 'river'
  | 'waterarea'
  | 'elevation'
  | 'transp'
  | 'wstructurea'
  | 'contour'
  | 'landforma'
  | 'label'
  | 'building'
  | 'structurel'
  | 'structurea'
  | 'lake'
  | 'landformp';
