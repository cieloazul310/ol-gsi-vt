import { isAnnoCode } from './utils';

/** 港湾関連の地物コード
 * - `533`: 漁港
 * - `3244`: 保健所
 * - `6361`: 港湾
 * - `6362`: 漁港
 * - `6367`: 特定重要港
 * - `6368`: 主要な港・重要港
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodePort = 533 | 3244 | 6361 | 6362 | 6367 | 6368;

export const annoCodePort: AnnoCodePort[] = [533, 3244, 6361, 6362, 6367, 6368];
export const annoIsPort = isAnnoCode<AnnoCodePort>(annoCodePort);
