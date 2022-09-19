import type { RecursivePartial } from '../types';

export type Palette = {
  /** 注記レイヤーの文字色 */
  anno: {
    /** テキスト */
    text: {
      main: string;
      light: string;
    };
    /** 水域関連の文字色 */
    water: string;
    /** 山岳関連の文字色 */
    terrain: string;
    /** 交通関連の文字色 */
    transp: string;
    /** 森林・緑地・公園関連の文字色 */
    green: string;
  };
  /** レイヤーの背景 */
  background: string;
  /** 境界の色 */
  boundary: {
    main: string;
    light: string;
  };
  /** 建物の色 */
  building: {
    stroke: string;
    fill: string;
  };
  /** 等高線の色 */
  contour: {
    main: string;
    light: string;
  };
  /** テキストの文字縁など */
  contrast: string;
  /** 等深線 */
  isbt: string;
  /** 鉄道関連 */
  rail: {
    /** 駅 */
    station: {
      main: string;
      light: string;
    };
    /** 新幹線 */
    shinkansen: string;
    /** JR */
    jr: string;
    /** JR以外 */
    shitetsu: string;
  };
  /** 道路の色
   * `main`は道路中心線、`edge` は道路縁
   */
  road: {
    /** 高速道路 */
    highway: {
      /** change from `light` */
      main: string;
      /** change from `main` */
      edge: string;
      /** @deprecated change to `main` */
      light?: string;
    };
    /** 国道 */
    national: {
      /** change from `light` */
      main: string;
      /** change from `main` */
      edge: string;
      /** @deprecated change to `main` */
      light?: string;
    };
    /** 都道府県道 */
    pref: {
      /** change from `light` */
      main: string;
      /** change from `main` */
      edge: string;
      /** @deprecated change to `main` */
      light?: string;
    };
    /** 一般道 */
    basic: {
      /** change from `light` */
      main: string;
      /** change from `main` */
      edge: string;
      /** @deprecated change to `main` */
      light?: string;
    };
    /** z16以上の道路縁 */
    edge: string;
  };
  /** 航路 */
  searoute: string;
  /** ダムなどの構造物 */
  structure: string;
  /** 地形面 */
  tpgphArea: {
    /** 湿地 */
    wetland: string;
    /** 万年雪 */
    firn: string;
    /** 砂礫地 */
    sand: string;
  };
  /** 国道番号・高速道路番号 */
  transp: {
    /** 高速道路番号の背景色 */
    highway: string;
    /** 国道番号の背景色 */
    national: string;
  };
  /** 火山 */
  volcano: string;
  /** 水域・河川 */
  waterarea: string;
  /** 海岸線・水涯線 */
  waterline: string;
};
export type PaletteOptions = RecursivePartial<Palette>;
