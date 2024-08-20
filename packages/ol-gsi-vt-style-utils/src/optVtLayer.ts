/** 最適化ベクトルタイルのレイヤ名
 * - `AdmArea`: 行政区画
 * - `AdmBdry`: 行政区画線
 * - `Anno`: 注記
 * - `BldA`: 建築物
 * - `Cntr`: 等高線
 * - `Cstline`: 海岸線
 * - `Isbt`: 等深線
 * - `PwrTrnsmL`: 送電線
 * - `RailCL`: 鉄道中心線
 * - `RailTrCL`: 軌道の中心線
 * - `RdEdg`: 道路縁
 * - `RdCompt`: 道路構成線
 * - `RdCL`: 道路中心線
 * - `RvrCL`: 河川中心線
 * - `SpcfArea`: 特定地区界
 * - `StrctLine`: 構造物線
 * - `StrctArea`: 構造物面
 * - `TpgphArea`: 地形表記面
 * - `TpgphLine`: 地形表記線
 * - `WA`: 水域
 * - `WL`: 水涯線
 * - `WRltLine`: 水部表記線
 * - `WStrA`: 水部構造面
 * - `WStrL`: 水部構造物線
 */
export type GsiOptVTLayerName =
  | "AdmArea"
  | "AdmBdry"
  | "Anno"
  | "BldA"
  | "Cntr"
  | "Cstline"
  | "Isbt"
  | "PwrTrnsmL"
  | "RailCL"
  | "RailTrCL"
  | "RdEdg"
  | "RdCompt"
  | "RdCL"
  | "RvrCL"
  | "SpcfArea"
  | "StrctLine"
  | "StrctArea"
  | "TpgphArea"
  | "TpgphLine"
  | "WA"
  | "WL"
  | "WStrA"
  | "WStrL"
  | "WRltLine";

/** 最適化ベクトルタイルのレイヤ名のコレクション */
export const gsiOptVtLayerNameCollection = [
  "AdmArea",
  "AdmBdry",
  "Anno",
  "BldA",
  "Cntr",
  "Cstline",
  "Isbt",
  "PwrTrnsmL",
  "RailCL",
  "RailTrCL",
  "RdEdg",
  "RdCompt",
  "RdCL",
  "RvrCL",
  "SpcfArea",
  "StrctLine",
  "StrctArea",
  "TpgphArea",
  "TpgphLine",
  "WA",
  "WL",
  "WStrA",
  "WStrL",
  "WRltLine",
] as const;

export function defineOptVtLayers(layerNameCollection: GsiOptVTLayerName[]) {
  return layerNameCollection;
}

/** 除外するレイヤを選択するヘルパー関数 */
export function gsiOptVtLayerExclude(
  layerNameCollection: GsiOptVTLayerName[],
): GsiOptVTLayerName[] {
  return gsiOptVtLayerNameCollection.filter(
    (layerName) => !layerNameCollection.includes(layerName),
  );
}

/** 最適化ベクトルタイルの属性
 *
 * 使用例
 * ```typescript
 * const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties;
 * ```
 * https://github.com/gsi-cyberjapan/optimal_bvmap
 */
export type GsiOptVTFeatureProperties<
  VTCode extends number = number,
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  /** レイヤ名 */
  layer: GsiOptVTLayerName;
  /** 地物種別コード */
  vt_code: VTCode;
  /** 階層順 (z11-17) */
  vt_lvorder?: 0 | 1 | 2 | 3 | 4;
  /** ズームレベル17の表示フラグ (z16-17)
   * `0`: ズームレベル16を表示
   * `1`: ズームレベル16,17ともに表示
   * `2`: ズームレベル17を表示
   */
  vt_flag17?: 0 | 1 | 2;
} & T;
