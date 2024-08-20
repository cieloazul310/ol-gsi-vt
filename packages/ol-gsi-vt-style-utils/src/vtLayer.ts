/** ベクトルタイルのレイヤ名
 * - `boundary`: 境界
 * - `building`: 建物
 * - `coastline`: 海岸線
 * - `contour`: 等高線・等深線
 * - `elevation`: 標高
 * - `label`: 注記
 * - `lake`: 湖の外周
 * - `landforma`: 地形(面)
 * - `landformp`: 地形(点)
 * - `landforml`: 地形(線)
 * - `railway`: 鉄道
 * - `river`: 河川
 * - `road`: 道路
 * - `searoute`: 航路
 * - `structurea`: 構造物(面)
 * - `structurel`: 構造物(線)
 * - `symbol`: 記号
 * - `transp`: 交通構造物
 * - `waterarea`: 水域
 * - `wstructurea`: 水域関連の構造物
 */
export type GsiVTLayerName =
  | "boundary"
  | "building"
  | "coastline"
  | "contour"
  | "elevation"
  | "label"
  | "lake"
  | "landforma"
  | "landformp"
  | "landforml"
  | "railway"
  | "river"
  | "road"
  | "searoute"
  | "structurel"
  | "structurea"
  | "symbol"
  | "transp"
  | "waterarea"
  | "wstructurea";

/** ベクトルタイルのレイヤ名のコレクション */
export const gsiVtLayerNameCollection = [
  "boundary",
  "building",
  "coastline",
  "contour",
  "elevation",
  "label",
  "lake",
  "landforma",
  "landformp",
  "landforml",
  "railway",
  "river",
  "road",
  "searoute",
  "structurel",
  "structurea",
  "symbol",
  "transp",
  "waterarea",
  "wstructurea",
] as const;

export function defineVtLayers(layerNameCollection: GsiVTLayerName[]) {
  return layerNameCollection;
}

/** 除外するレイヤを選択するヘルパー関数 */
export function gsiVtLayerExclude(
  layerNameCollection: GsiVTLayerName[],
): GsiVTLayerName[] {
  return gsiVtLayerNameCollection.filter(
    (layerName) => !layerNameCollection.includes(layerName),
  );
}

/** #### ベクトルタイルの属性
 *
 * #### 使用例
 * ```typescript
 * const { ftCode } = feature.getProperties() as GsiOptVTFeatureProperties;
 * ```
 * https://github.com/gsi-cyberjapan/gsimaps-vector-experiment
 */
export type GsiVTFeatureProperties<
  FTCode extends number = number,
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  /** レイヤ名 */
  layer: GsiVTLayerName;
  /** 地物種別コード */
  ftCode: FTCode;
  /** 道路の階層順 */
  lvOrder?: 0 | 1 | 2 | 3 | 4;
  /** 出典地理情報レベル */
  orgGILvl: string;
} & T;
