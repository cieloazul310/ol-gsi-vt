/** 地物のzIndex */
export type ZIndex = {
  /** 水域 */
  waterarea: number;
  /** 海岸線・水涯線 */
  waterline: number;
  /** 地形面 */
  tpgphArea: number;
  /** 等高線 */
  contour: number;
  /** 航路 */
  searoute: number;
  /** 道路の背景 */
  roadBg: number;
  /** 鉄道の背景 */
  railwayBg: number;
  /** 建物の基準面 (lvOrder属性に依存) */
  building: number;
  /** 道路の基準面 (lvOrder属性に依存) */
  road: number;
  /** 鉄道の基準面 (lvOrder属性に依存) */
  railway: number;
  /** 駅 */
  station: number;
  /** 送電線 */
  pwrTrnsmL: number;
  /** 境界線 */
  boundary: number;
  /** 標高点 */
  elevation: number;
  /** 国道番号・高速道路番号「 */
  transp: number;
  /** 注記の基準 */
  label: number;
  /** 記号の基準 */
  symbol: number;
};

const zIndex: ZIndex = {
  waterarea: 0,
  waterline: 1,
  tpgphArea: 2,
  contour: 3,
  searoute: 4,
  roadBg: 100,
  railwayBg: 150,
  building: 150,
  road: 150,
  railway: 160,
  station: 200,
  pwrTrnsmL: 210,
  boundary: 500,
  elevation: 600,
  transp: 700,
  label: 900,
  symbol: 1000,
};

export default zIndex;
