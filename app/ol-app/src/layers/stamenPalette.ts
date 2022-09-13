import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import {
  type GsiVtLayerOptions,
  type GsiOptVtLayerOptions,
  type PaletteOptions,
  type GsiVTFeatureProperties,
  type GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt';

const palette: PaletteOptions = {
  waterarea: '#000',
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
    edge: '#fff',
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

export const stamenOptionsForVt: GsiVtLayerOptions = {
  theme: {
    palette,
  },
  layers: ['waterarea', 'road', 'railway', 'label'],
  styles: {
    label: (feature) => {
      const { knj } = feature.getProperties() as GsiVTFeatureProperties<{
        knj?: string;
      }>;
      if (!knj) return new Style();
      return new Style({
        text: new Text({
          text: knj,
          stroke: new Stroke({ width: 4, color: '#fff' }),
          fill: new Fill({ color: '#000' }),
          font: 'italic bold 16px sans-serif',
        }),
      });
    },
  },
};

export const stamenOptionsForOptVt: GsiOptVtLayerOptions = {
  theme: {
    palette,
  },
  layers: ['WA', 'RdCL', 'RailCL', 'RdCompt', 'RdEdg', 'RailTrCL', 'Anno'],
  styles: {
    Anno: (feature) => {
      const { vt_text } = feature.getProperties() as GsiOptVTFeatureProperties<{
        vt_text?: string;
      }>;
      if (!vt_text) return new Style();
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
