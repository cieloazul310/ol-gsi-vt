/** 地物のzIndex */
export type ZIndex = {
  /** 水域 (default to 0) */
  waterarea: number;
  /** 海岸線・水涯線 (default to 1) */
  waterline: number;
  /** 地形面 (default to 2) */
  tpgphArea: number;
  /** 等高線 (default to 3) */
  contour: number;
  /** 航路 (default to 4) */
  searoute: number;
  /** 道路の背景 (default to 100) */
  roadBg: number;
  /** 鉄道の背景 (default to 150) */
  railwayBg: number;
  /** 建物の基準面 (default to 150) (lvOrder属性に依存) */
  building: number;
  /** 道路の基準面 (default to 150) (lvOrder属性に依存) */
  road: number;
  /** 鉄道の基準面 (default to 160) (lvOrder属性に依存) */
  railway: number;
  /** 駅 (default to 200) */
  station: number;
  /** 送電線 (default to 250) */
  pwrTrnsmL: number;
  /** 境界線 (default to 500) */
  boundary: number;
  /** 標高点 (default to 600) */
  elevation: number;
  /** 国道番号・高速道路番号 (default to 700)「 */
  transp: number;
  /** 注記の基準 (default to 800) */
  label: number;
  /** 記号の基準 (default to 900) */
  symbol: number;
  /** 注記の最上位 (default to 1000) */
  highest: number;
};

/** @deprecated */
export const defaultZIndex: ZIndex = {
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
  pwrTrnsmL: 250,
  boundary: 500,
  elevation: 600,
  transp: 700,
  label: 800,
  symbol: 900,
  highest: 1000,
};

/** helper for defining zIndex */
export function defineZIndex(zIndex: Partial<ZIndex>): Partial<ZIndex> {
  return zIndex;
}

/**
 * @deprecated use `createDefaultZIndex()`
 * returns default zIndex
 */
export function useDefaultZIndex(): ZIndex {
  return {
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
    pwrTrnsmL: 250,
    boundary: 500,
    elevation: 600,
    transp: 700,
    label: 800,
    symbol: 900,
    highest: 1000,
  };
}

/**
 * returns default zIndex
 */
export function createDefaultZIndex(): ZIndex {
  return {
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
    pwrTrnsmL: 250,
    boundary: 500,
    elevation: 600,
    transp: 700,
    label: 800,
    symbol: 900,
    highest: 1000,
  };
}
