import { isAnnoCode } from "./utils";

/** 学校の地物コード
 * - `631`: 大学・大学院
 * - `632`: 短期大学
 * - `633`: 高等専門学校
 * - `634`: 特殊学校
 * - `885`: 学校
 * - `3212`: 学校 高等学校・中等教育学校
 * - `3213`: 学校 中学校
 * - `3214`: 学校 小学校
 *
 * ベクトルタイルの地物コード (`annoCtg` 注記の分類コード)
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード (`vt_code`)
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type AnnoCodeSchool = 631 | 632 | 633 | 634 | 885 | 3212 | 3213 | 3214;

export const annoCodeSchool: AnnoCodeSchool[] = [
  631, 632, 633, 634, 885, 3212, 3213, 3214,
];
export const annoCodeIsSchool = isAnnoCode<AnnoCodeSchool>(annoCodeSchool);
