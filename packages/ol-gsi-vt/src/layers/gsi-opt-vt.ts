import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { gsiOptVtStyle } from '@cieloazul310/ol-gsi-vt-style';
import { defaultPalette } from '@cieloazul310/ol-gsi-vt-style-utils';
import { optVtDefaultAttribution, type GsiOptVtLayerOptions } from './types';

function gsiOptVtLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
  background,
  ...vectorTileOptions
}: GsiOptVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap-v1/{z}/{x}/{y}.pbf',
      maxZoom: 16,
      minZoom: 4,
      attributions: attribution ?? optVtDefaultAttribution,
    }),
    style: gsiOptVtStyle({ theme, styles }),
    background:
      background === false
        ? undefined
        : theme?.palette?.background ?? defaultPalette.background,
    declutter: declutter ?? true,
    ...vectorTileOptions,
  });
}

export default gsiOptVtLayer;
