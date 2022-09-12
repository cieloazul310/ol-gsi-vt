import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import {
  default as gsiOptVtStyle,
  type OptLayerStyleOptions,
} from '@cieloazul310/ol-gsi-opt-vt-style';
import type {
  ThemeOptions,
  OptVTLayerName,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export type GsiOptVtLayerOptions = {
  layers?: OptVTLayerName[];
  theme?: ThemeOptions;
  styles?: OptLayerStyleOptions;
};

function gsiOptVtLayer({ layers, theme, styles }: GsiOptVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf',
      maxZoom: 16,
      minZoom: 4,
      attributions:
        '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    }),
    style: gsiOptVtStyle({ theme, styles }),
    background: theme?.palette?.background ?? '#fcfcf7',
    declutter: true,
  });
}

export default gsiOptVtLayer;
