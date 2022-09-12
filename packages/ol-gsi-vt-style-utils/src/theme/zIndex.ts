export type ZIndex = {
  waterarea: number;
  lake: number;
  river: number;
  coastline: number;
  tpgphArea: number;
  contour: number;
  searoute: number;
  roadBg: number;
  railwayBg: number;
  building: number; // 150-190 by lvOrder
  road: number; // 150-190 by lvOrder
  railway: number; // 160-200 by lvOrder
  station: number;
  pwrTrnsmL: number;
  boundary: number;
  elevation: number;
  transp: number;
  label: number;
  symbol: number;
};

const zIndex: ZIndex = {
  waterarea: 0,
  lake: 0,
  river: 0,
  coastline: 0,
  tpgphArea: 1,
  contour: 2,
  searoute: 3,
  roadBg: 100,
  railwayBg: 150,
  building: 150, // 150-190 by lvOrder
  road: 150, // 150-190 by lvOrder
  railway: 160, // 160-200 by lvOrder
  station: 200,
  pwrTrnsmL: 210,
  boundary: 500,
  elevation: 600,
  transp: 700,
  label: 900,
  symbol: 1000,
};

export default zIndex;
