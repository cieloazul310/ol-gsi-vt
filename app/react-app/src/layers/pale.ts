import { gsiOptVtLayer } from '@cieloazul310/ol-gsi-vt';

const pale = gsiOptVtLayer({
  // layers: ['WA', 'RdCL', 'RdEdg', 'RdCompt', 'RvrCL', 'RailCL', 'RailTrCL', 'Cstline', 'BldA', 'Anno'],
  theme: {
    palette: {
      contour: { main: '#ddd', light: '#eee' },
      boundary: { main: '#777', light: '#999' },
      waterarea: '#ccc',
      waterline: '#aaa',
      road: {
        highway: { main: '#ccc', light: '#eee' },
        national: { main: '#ccc', light: '#eee' },
        pref: { main: '#ddd', light: '#fff' },
        basic: { main: '#ddd', light: '#fff' },
        edge: '#ddd',
      },
      rail: {
        station: {
          main: '#999',
          light: '#ccc',
        },
        jr: '#999',
        shitetsu: '#999',
        shinkansen: '#999',
      },
      anno: {
        transp: '#999',
        mountain: '#999',
        water: '#777',
        text: {
          main: '#777',
          light: '#999',
        },
      },
      transp: {
        national: '#aaa',
        highway: '#aaa',
      },
      building: {
        stroke: '#ccc',
        fill: '#eee',
      },
      background: '#fff',
    },
  },
});

export default pale;
