import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import type { AttributionLike } from 'ol/source/Source';
import {
  gsiOptVtStyle,
  type GsiOptLayerStyleOptions,
} from '@cieloazul310/ol-gsi-vt-style';
import {
  defaultPalette,
  type ThemeOptions,
  type GsiOptVTLayerName,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export type GsiOptVtLayerOptions = {
  layers?: GsiOptVTLayerName[];
  theme?: ThemeOptions;
  styles?: GsiOptLayerStyleOptions;
  attribution?: AttributionLike;
  declutter?: boolean;
};

function gsiOptVtLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
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
    style: gsiOptVtStyle({ theme, styles }),
    background: theme?.palette?.background ?? defaultPalette.background,
    declutter: declutter ?? true,
  });
}

export default gsiOptVtLayer;
