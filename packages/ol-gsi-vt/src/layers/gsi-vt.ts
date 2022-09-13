import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import type { AttributionLike } from 'ol/source/Source';
import {
  gsiVtStyle,
  type GsiVTLayerStyleOptions,
} from '@cieloazul310/ol-gsi-vt-style';
import {
  defaultPalette,
  type ThemeOptions,
  type GsiVTLayerName,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export type GsiVtLayerOptions = {
  layers?: GsiVTLayerName[];
  theme?: ThemeOptions;
  styles?: GsiVTLayerStyleOptions;
  attribution?: AttributionLike;
  declutter?: boolean;
};

function gsiVtLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
}: GsiVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
      attributions:
        attribution ??
        '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
    }),
    style: gsiVtStyle({ theme, styles }),
    background: theme?.palette?.background ?? defaultPalette.background,
    declutter: declutter ?? true,
  });
}

export default gsiVtLayer;
