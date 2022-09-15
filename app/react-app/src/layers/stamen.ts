import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import {
  gsiOptVtLayer,
  annoCodeAdress,
  type GsiOptVtLayerOptions,
  type PaletteOptions,
  type GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt';

const palette: PaletteOptions = {
  waterarea: '#000',
  waterline: '#000',
  road: {
    highway: {
      main: '#fff',
      light: '#000',
    },
    national: {
      main: '#fff',
      light: '#000',
    },
    pref: {
      main: '#fff',
      light: '#000',
    },
    basic: {
      main: '#fff',
      light: '#000',
    },
    edge: '#000',
  },
  rail: {
    shinkansen: '#000',
    jr: '#000',
    shitetsu: '#000',
    station: {
      main: '#000',
      light: '#000',
    },
  },
  background: '#fff',
};

const stamenOptionsForOptVt: GsiOptVtLayerOptions = {
  theme: {
    palette,
  },
  layers: [
    'WA',
    'RdCL',
    'RailCL',
    'RdCompt',
    'RdEdg',
    'RailTrCL',
    'Anno',
    'Cstline',
  ],
  styles: {
    Anno: (feature) => {
      const { vt_text, vt_code } =
        feature.getProperties() as GsiOptVTFeatureProperties<{
          vt_text?: string;
        }>;
      if (!vt_text) return new Style();
      if (
        ![
          ...annoCodeAdress,
          321,
          422,
          441,
          532,
          534,
          631,
          2941,
          3205,
          3206,
          6341,
          6371,
        ].includes(vt_code)
      )
        return new Style();

      return new Style({
        text: new Text({
          text: vt_text,
          stroke: new Stroke({ width: 4, color: '#fff' }),
          fill: new Fill({ color: '#000' }),
          font: 'italic bold 16px sans-serif',
        }),
      });
    },
  },
};

const stamenOptVt = gsiOptVtLayer(stamenOptionsForOptVt);

export default stamenOptVt;
