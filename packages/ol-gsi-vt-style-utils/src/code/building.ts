/** 建物の地物コード
 * - `3101`: 普通建物
 * - `3102`: 堅ろう建物
 * - `3103`: 高層建物
 * - `3111`: 普通無壁舎
 * - `3112`: 堅ろう無壁舎
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type BuildingCode = 3101 | 3102 | 3103 | 3111 | 3112;
