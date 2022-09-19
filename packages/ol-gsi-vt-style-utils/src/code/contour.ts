/** 等高線・等深線の地物コード
 * - `7351`: 等高線-通常部
 * - `7353`: 等高線-通常部
 * - `7352`: 等高線-数値部
 * - `7371`: 等深線-通常部
 * - `7373`: 等深線-通常部
 * - `7372`: 等深線-数値部
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type ContourCode = 7351 | 7353 | 7352 | 7371 | 7372 | 7373;
