import type { RecursivePartial } from './types';

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
    mountain: string;
    /** 交通関連の文字色 */
    transp: string;
    /** 森林・緑地・公園関連の文字色 */
    green: string;
  };
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
  /** 道路の色
   * `main` は縁取り、`light`は線色
   */
  road: {
    /** 高速道路 */
    highway: {
      main: string;
      light: string;
    };
    /** 国道 */
    national: {
      main: string;
      light: string;
    };
    /** 都道府県道 */
    pref: {
      main: string;
      light: string;
    };
    /** 一般道 */
    basic: {
      main: string;
      light: string;
    };
    /** z16以上の道路縁 */
    edge: string;
  };
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
  /** 等深線 */
  isbt: string;
  /** 水域・河川 */
  waterarea: string;
  /** 海岸線・水涯線 */
  waterline: string;
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
  /** テキストの文字縁など */
  contrast: string;
  /** レイヤーの背景 */
  background: string;
};
export type PaletteOptions = RecursivePartial<Palette>;

const defaultPalette: Palette = {
  road: {
    highway: {
      main: '#aca',
      light: '#bdb',
    },
    national: {
      main: '#ec8',
      light: '#fda',
    },
    pref: {
      main: '#dd9',
      light: '#ffe',
    },
    basic: {
      main: '#ddd',
      light: '#fff',
    },
    edge: '#ccc',
  },
  rail: {
    station: {
      main: '#fac',
      light: '#fee',
    },
    shinkansen: '#44a',
    jr: '#666',
    shitetsu: '#888',
  },
  boundary: {
    main: '#a9b',
    light: '#ccc',
  },
  building: {
    stroke: '#ed9',
    fill: '#feb',
  },
  contour: {
    main: '#dcb',
    light: '#edc',
  },
  isbt: '#c5d6f9',
  waterarea: '#cdf',
  waterline: '#446',
  searoute: '#bbbbd7',
  structure: '#bbb',
  tpgphArea: {
    wetland: '#dfe',
    firn: '#eef',
    sand: '#ffd',
  },
  anno: {
    text: {
      main: '#333',
      light: '#666',
    },
    water: '#77d',
    mountain: '#744',
    transp: '#494',
    green: `#076`,
  },
  transp: {
    highway: '#696',
    national: '#66f',
  },
  contrast: '#fff',
  background: '#fcfcf7',
};

export default defaultPalette;

export function mergeDefaultPalette(palette?: PaletteOptions): Palette {
  if (!palette) return defaultPalette;
  const anno = {
    ...Object.assign({}, defaultPalette.anno, palette.anno),
    text: {
      main: palette.anno?.text?.main ?? defaultPalette.anno.text.main,
      light: palette.anno?.text?.light ?? defaultPalette.anno.text.light,
    },
  };
  const boundary = {
    ...Object.assign({}, defaultPalette.boundary, palette.boundary),
  };
  const building = {
    ...Object.assign({}, defaultPalette.building, palette.building),
  };
  const contour = {
    ...Object.assign({}, defaultPalette.contour, palette.contour),
  };
  const tpgphArea = {
    ...Object.assign({}, defaultPalette.tpgphArea, palette.tpgphArea),
  };
  const road = {
    highway: {
      ...Object.assign({}, defaultPalette.road.highway, palette.road?.highway),
    },
    national: {
      ...Object.assign(
        {},
        defaultPalette.road.national,
        palette.road?.national
      ),
    },
    pref: {
      ...Object.assign({}, defaultPalette.road.pref, palette.road?.pref),
    },
    basic: {
      ...Object.assign({}, defaultPalette.road.basic, palette.road?.basic),
    },
    edge: palette.road?.edge ?? defaultPalette.road.edge,
  };
  const rail = {
    ...Object.assign({}, defaultPalette.rail, palette.rail),
    station: {
      ...Object.assign({}, defaultPalette.rail.station, palette.rail?.station),
    },
  };
  const transp = {
    ...Object.assign({}, defaultPalette.transp, palette.transp),
  };

  return {
    ...Object.assign({}, defaultPalette, palette),
    anno,
    boundary,
    building,
    contour,
    tpgphArea,
    road,
    rail,
    transp,
  };
}
