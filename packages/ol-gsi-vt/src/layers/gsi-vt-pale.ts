import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';
import { gsiVtStyle } from '@cieloazul310/ol-gsi-vt-style';
import { defaultTheme, palePalette } from '@cieloazul310/ol-gsi-vt-style-utils';
import { vtDefaultAttribution, type GsiVtLayerOptions } from './types';

function gsiVtPaleLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
  background,
  ...vectorTileOptions
}: GsiVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
      attributions: attribution ?? vtDefaultAttribution,
    }),
    style: gsiVtStyle(
      { theme, styles },
      { ...defaultTheme, palette: palePalette }
    ),
    background:
      background === false
        ? undefined
        : theme?.palette?.background ?? palePalette.background,
    declutter: declutter ?? true,
    ...vectorTileOptions,
  });
}

export default gsiVtPaleLayer;
