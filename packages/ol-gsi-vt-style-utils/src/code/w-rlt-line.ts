/** 水部表記線の地物コード
 * - `5901`: 水上・海上交通 船舶
 * - `5902`: 水上・海上交通 航路の軌跡
 * - `5911`: 流水方向
 * - `55902`: 航路 (vtのみ)
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type SeaRouteCode = 5901 | 5902 | 5911 | 55902;
