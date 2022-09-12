import type { RecursivePartial } from '../typeGuards';

export type Palette = {
  anno: {
    text: {
      main: string;
      light: string;
    };
    water: string;
    mountain: string;
    transp: string;
  };
  boundary: {
    main: string;
    light: string;
  };
  building: {
    stroke: string;
    fill: string;
  };
  contour: {
    main: string;
    light: string;
  };
  road: {
    highway: {
      main: string;
      light: string;
    };
    national: {
      main: string;
      light: string;
    };
    pref: {
      main: string;
      light: string;
    };
    basic: {
      main: string;
      light: string;
    };
    edge: string;
  };
  rail: {
    station: {
      main: string;
      light: string;
    };
    shinkansen: string;
    jr: string;
    shitetsu: string;
  };
  isbt: string;
  waterarea: string;
  coastline: string;
  searoute: string;
  structure: string;
  tpgphArea: {
    wetland: string;
    firn: string;
    sand: string;
  };
  transp: {
    highway: string;
    national: string;
  };
  contrast: string;
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
    shinkansen: '#66d',
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
  coastline: '#446',
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
    transp: '#696',
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
