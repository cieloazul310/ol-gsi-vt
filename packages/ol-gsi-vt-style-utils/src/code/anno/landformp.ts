import { isAnnoCode } from './utils';

/** 地形(点)の地物コード
 * - `5801`: 滝（領域）
 * - `7601`: 砂礫地（領域が不明瞭な場合）
 * - `7621`: 雨裂（下部）
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type LandformPointCode = 5801 | 7601 | 7621;
export const landformPointCode: LandformPointCode[] = [5801, 7601, 7621];
export const annoCodeIsLandformPoint =
  isAnnoCode<LandformPointCode>(landformPointCode);
