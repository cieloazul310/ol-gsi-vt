import { isAnnoCode } from "./utils";

/** 山関連の地物コード
 * - `311`: 山の総称
 * - `312`: 山、岳、峰等
 * - `313`: 尖峰、丘、塚等
 * - `314`: 山、岳、峰等（3000ｍ以上）
 * - `315`: 山、岳、峰等（1000ｍ以上）
 * - `316`: 山、岳、峰等（1000ｍ未満）
 * - `332`: 岩、溶岩、崖、鍾乳洞、温泉、湧水、噴泉、噴火口、峠、坂等
 * - `333`: 山脈、山地、平原
 * - `334`: 平野、盆地
 * - `346`: 半島
 * - `810`: 山
 * - `832`: 峠
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeTerrain =
  | 311
  | 312
  | 313
  | 314
  | 315
  | 316
  | 332
  | 333
  | 334
  | 346
  | 810
  | 832;
export const annoCodeTerrain: AnnoCodeTerrain[] = [
  311, 312, 313, 314, 315, 316, 332, 333, 334, 346, 810, 832,
];
export const annoCodeIsTerrain = isAnnoCode<AnnoCodeTerrain>(annoCodeTerrain);
