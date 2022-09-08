export const palette = {
  road: {
    highway: {
      main: '#7a7',
      light: '#9b9',
    },
    national: {
      main: '#c93',
      light: '#eb5',
    },
    pref: {
      main: '#cc7',
      light: '#ee9',
    },
    basic: {
      main: '#ddd',
      light: '#fff',
    },
  },
  boundary: {
    main: '#a9b',
    light: '#ccc',
  },
  buiding: {
    stroke: '#ed9',
    fill: '#feb',
  },
  contour: {
    main: '#dcb',
    light: '#edc',
    depth: '#c5d6f9',
  },
  waterarea: '#cdf',
  searoute: '#bbbbd7',
  coastline: '#446',
  transp: {
    national: 'blue',
  },
  landforma: {
    wetland: '#dfe',
    firn: '#eef',
    sand: '#ffd',
  },
  label: {
    text: {
      main: '#333',
      light: '#666',
    },
    water: '#77d',
    mountain: '#744',
    transp: '#7a7',
  },
};

export const zIndex = {
  waterarea: 0,
  lake: 0,
  river: 0,
  coastline: 0,
  landforma: 1,
  contour: 2,
  searoute: 3,
  roadBg: 100,
  railwayBg: 150,
  building: 150, // 150-190 by lvOrder
  road: 150, // 150-190 by lvOrder
  railway: 160, // 160-200 by lvOrder
  station: 200,
  boundary: 500,
  elevation: 600,
  transp: 700,
  label: 900,
  symbol: 1000,
};

const theme = {
  palette,
  zIndex,
};

export default theme;
