import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { gsiOptVtStyle } from '@cieloazul310/ol-gsi-vt-style';
import { defaultTheme, palePalette } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { GsiOptVtLayerOptions } from './types';

function gsiOptVtPaleLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
  background,
}: GsiOptVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf',
      maxZoom: 16,
      minZoom: 4,
      attributions:
        attribution ??
        '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    }),
    style: gsiOptVtStyle(
      { theme, styles },
      { ...defaultTheme, palette: palePalette }
    ),
    background:
      background === false
        ? undefined
        : theme?.palette?.background ?? palePalette.background,
    declutter: declutter ?? true,
  });
}

export default gsiOptVtPaleLayer;
