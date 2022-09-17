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
 */
export type AnnoCodeLandform =
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
export const annoCodeLandform: AnnoCodeLandform[] = [
  6311, 6312, 6313, 6314, 6321, 6322, 6323, 6324, 6325, 6326, 6327,
];
export const annoCodeIsLandform =
  isAnnoCode<AnnoCodeLandform>(annoCodeLandform);
