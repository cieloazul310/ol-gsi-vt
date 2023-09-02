import { isAnnoCode } from "./utils";

/** 標高・電子基準点関連の地物コード
 * - `7101`: 電子基準点
 * - `7102`: 三角点
 * - `7103`: 水準点
 * - `7201`: 標高点（測点）
 * - `7221`: 標高（火山）
 * - `7701`: 水面標高
 * - `7711`: 水深
 * - `7352`: 等高線数値部
 * - `7372`: 等深線数値部
 * - `57221`: 標高点 (vtのみ)
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeElevation =
  | 7101
  | 7102
  | 7103
  | 7201
  | 7221
  | 7701
  | 7711
  | 7352
  | 7372
  | 57221;

export const annoCodeElevation: AnnoCodeElevation[] = [
  7101, 7102, 7103, 7201, 7221, 7701, 7711, 7352, 7372, 57221,
];

export const annoCodeIsElevation =
  isAnnoCode<AnnoCodeElevation>(annoCodeElevation);
