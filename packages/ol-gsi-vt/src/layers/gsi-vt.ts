import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';

import {
  default as gsiVtStyle,
  type VTLayerStyleOptions,
} from '@cieloazul310/ol-gsi-vt-style';
import type {
  ThemeOptions,
  VTLayerName,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export type GsiVtLayerOptions = {
  layers?: VTLayerName[];
  theme?: ThemeOptions;
  styles?: VTLayerStyleOptions;
};

function gsiVtLayer({ layers, theme, styles }: GsiVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
      attributions:
        '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    }),
    style: gsiVtStyle({ theme, styles }),
    background: theme?.palette?.background ?? '#fcfcf3',
    declutter: true,
  });
}

export default gsiVtLayer;
