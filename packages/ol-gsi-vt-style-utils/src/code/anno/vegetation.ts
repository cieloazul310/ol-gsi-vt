import { isAnnoCode } from './utils';

/** 土地利用関連の地物コード
 * - `6311`: 耕地植生 田
 * - `6312`: 耕地植生 畑
 * - `6313`: 耕地植生 茶畑
 * - `6314`: 耕地植生 果樹園
 * - `6321`: 未耕地植生 広葉樹林
 * - `6322`: 未耕地植生 針葉樹林
 * - `6323`: 未耕地植生 竹林
 * - `6324`: 未耕地植生 ヤシ科樹林
 * - `6325`: 未耕地植生 ハイマツ地
 * - `6326`: 未耕地植生 笹地
 * - `6327`: 未耕地植生 荒地
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeVegetation =
  | 6311
  | 6312
  | 6313
  | 6314
  | 6321
  | 6322
  | 6323
  | 6324
  | 6325
  | 6326
  | 6327;
export const annoCodeVegetation: AnnoCodeVegetation[] = [
  6311, 6312, 6313, 6314, 6321, 6322, 6323, 6324, 6325, 6326, 6327,
];
export const annoCodeIsVegetation =
  isAnnoCode<AnnoCodeVegetation>(annoCodeVegetation);
