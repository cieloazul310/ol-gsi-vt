/** 水域の地物コード
 * - `5000`: 水域 (vtのみ)
 * - `5100`: 海
 * - `5101`: 海岸線 通常部
 * - `5102`: 海岸線 岩等に接する部分
 * - `5103`: 海岸線 堤防等に接する部分
 * - `5111`: 海岸線 河口部（海側）
 * - `5121`: 海岸線 露岩
 * - `5200`: 河川・湖池
 * - `5201`: 河川 通常部
 * - `5202`: 河川 岩等に接する部分
 * - `5203`: 河川 堤防等に接する部分
 * - `5211`: 河川 河口部（河川側）
 * - `5212`: 河川 湖池界線（河川側）
 * - `5221`: 河川 露岩
 * - `5231`: 湖池 通常部
 * - `5232`: 湖池 岩等に接する部分
 * - `5233`: 湖池 堤防等に接する部分
 * - `5242`: 湖池 湖池界線（湖池側）
 * - `5251`: 湖池 露岩
 * - `55000`: 水域 (vtのみ)
 */
export type WaterAreaCode =
  | 5000
  | 5100
  | 5101
  | 5102
  | 5103
  | 5111
  | 5121
  | 5200
  | 5201
  | 5202
  | 5203
  | 5211
  | 5212
  | 5221
  | 5231
  | 5232
  | 5233
  | 5242
  | 5242
  | 5251
  | 55000;
