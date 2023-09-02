/** 道路縁の地物コード
 * - `2201`: 道路縁 通常部 通常部
 * - `2203`: 道路縁 通常部 橋・高架
 * - `2204`: 道路縁 通常部 トンネル入り口線
 * - `2221`: 道路縁 庭園路 通常部
 * - `2223`: 道路縁 庭園路 橋・高架
 * - `2224`: 道路縁 庭園路 トンネル入り口線
 *
 * ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf
 *
 * 最適化ベクトルタイルの地物コード
 * https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
 */
export type RdEdgCode =
  | 2201
  | 2203
  | 2204
  | 2221
  | 2223
  | 2224
  | 2241
  | 2243
  | 2244
  | 2251;

export function isRdEdg(code: number): code is RdEdgCode {
  return [2201, 2203, 2204, 2221, 2223, 2224, 2241, 2243, 2244, 2251].includes(
    code,
  );
}

/** 道路構成線の地物コード
 * - `2401`: トンネル内の道路
 * - `2411`: 分離帯 通常部
 */
export type RdComptCode = 2401 | 2411;

export function isRdCompt(code: number): code is RdComptCode {
  return code === 2401 || code === 2411;
}

/** 道路中心線の地物コード
 * - `2701`: 主要道路
 * - `2701`: 道路中心線 通常部
 * - `2701`: 2条道路中心線 通常部 通常部
 * - `2702`: 2条道路中心線 通常部 雪覆い
 * - `2703`: 2条道路中心線 通常部 橋・高架
 * - `2704`: 道路中心線 トンネル
 * - `2704`: 2条道路中心線 通常部 トンネル
 * - `2711`: 2条道路中心線 庭園路 通常部
 * - `2712`: 2条道路中心線 庭園路 雪覆い
 * - `2713`: 2条道路中心線 庭園路 橋・高架
 * - `2714`: 2条道路中心線 庭園路 トンネル
 * - `2721`: 徒歩道 通常部 通常部
 * - `2722`: 徒歩道 通常部 雪覆い
 * - `2723`: 徒歩道 通常部 橋・高架
 * - `2724`: 徒歩道 通常部 トンネル
 * - `2731`: 石段 通常部
 * - `2732`: 石段 雪覆い
 * - `2733`: 石段 橋・高架
 * - `2734`: 石段 トンネル
 * - `52701`: 主要な道路 (vtのみ)
 * - `52703`: 高速自動車道 (vtのみ)
 * - `52704`: 高速自動車道トンネル (vtのみ)
 */
export type RdCLCode =
  | 2701
  | 2702
  | 2703
  | 2704
  | 2711
  | 2712
  | 2713
  | 2714
  | 2721
  | 2722
  | 2723
  | 2724
  | 2731
  | 2732
  | 2733
  | 2734
  | 52701
  | 52703
  | 52704;

export type RdCode = RdEdgCode | RdComptCode | RdCLCode;
