import { isAnnoCode } from './utils';

/** 交通関連の名称の地物コード
 * - `411`: 道路名
 * - `412`: 道路施設（IC、PA、道の駅等）
 * - `413`: 道路構造物（橋、トンネル等）
 * - `421`: 鉄道路線名
 * - `422`: 鉄道駅名
 * - `423`: 鉄道構造物（橋、トンネル、操車場等）
 * - `860`: 道の駅
 * - `2901`: 国道番号
 * - `2903`: 都市高速道路番号
 * - `2904`: 高速道路番号
 * - `2941`: インターチェンジ
 * - `2942`: ジャンクション
 * - `2943`: サービスエリア
 * - `2944`: パーキングエリア
 * - `2945`: スマートインターチェンジ
 *
 * ベクトルタイルの地物コード (`ftCode` または `annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeTransp =
  | 411
  | 412
  | 413
  | 421
  | 422
  | 423
  | 860
  | 2901
  | 2903
  | 2904
  | 2941
  | 2942
  | 2943
  | 2944
  | 2945;

export const annoCodeTransp: AnnoCodeTransp[] = [
  411, 412, 413, 421, 422, 423, 860, 2901, 2903, 2904, 2941, 2942, 2943, 2944,
  2945,
];
export const annoCodeIsTransp = isAnnoCode<AnnoCodeTransp>(annoCodeTransp);
