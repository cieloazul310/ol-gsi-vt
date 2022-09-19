import { isAnnoCode } from './utils';

/** 空港関連の地物コード
 * - `441`: 空港名
 * - `6371`: 空港
 * - `6373`: 自衛隊等の飛行場
 * - `6375`: 国際空港
 * - `6376`: 主要な空港・国際空港以外の拠点空港等
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeAirport = 441 | 6371 | 6373 | 6375 | 6376;

export const annoCodeAirport: AnnoCodeAirport[] = [
  441, 6371, 6373, 6375, 6375, 6376,
];
export const annoIsAirport = isAnnoCode<AnnoCodeAirport>(annoCodeAirport);
