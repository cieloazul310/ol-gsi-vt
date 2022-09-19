/** 境界の地物コード
 * - `1211`: 都府県界及び北海道総合振興局・振興局界
 * - `1212`: 市区町村界
 * - `1221`: 所属界 (所属を明示する境界線)
 * - `6101`: 特定地区界
 * - `51212`: 地方界 (vtのみ)
 * - `51221`: 国の所属界 (vtのみ)
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type BoundaryCode = 1211 | 1212 | 1221 | 6101 | 51212 | 51221;
