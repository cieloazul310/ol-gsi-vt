/** 構造物線の地物コード
 * - `4201`: 高塔
 * - `4202`: 坑口
 * - `8202`: 送電線
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type StructureLineCode = 4201 | 4202 | 8202;

/**
 * - `5501`: ダム
 * - `5511`: 桟橋（鉄、コンクリート）
 * - `5514`: せき
 * - `5515`: 水門
 * - `5521`: 滝
 * - `5532`: 透過水制
 * - `5551`: 河川トンネル口
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type WStructureLineCode = 5501 | 5511 | 5514 | 5515 | 5521 | 5532;

/** 構造物面の地物コード
 * - `4301`: 巨大構造物
 * - `4302`: タンク
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type StructureAreaCode = 4301 | 4302;

/** 水部構造物面の地物コード
 * - `5401`: ダム
 * - `5411`: 桟橋（鉄、コンクリート）
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type WStructureAreaCode = 5401 | 5411;
