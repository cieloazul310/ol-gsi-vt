import VectorTileLayer from "ol/layer/VectorTile";
import { PMTilesVectorSource } from "ol-pmtiles";
import { gsiOptVtStyle } from "@cieloazul310/ol-gsi-vt-style";
import { defaultTheme, palePalette } from "@cieloazul310/ol-gsi-vt-style-utils";
import { optVtDefaultAttribution, type GsiOptVtLayerOptions } from "./types";

function gsiOptVtPaleLayer({
  layers,
  theme,
  styles,
  attribution,
  declutter,
  background,
  ...vectorTileOptions
}: GsiOptVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new PMTilesVectorSource({
      url: "https://cyberjapandata.gsi.go.jp/xyz/optimal_bvmap-v1/optimal_bvmap-v1.pmtiles",
      maxZoom: 16,
      minZoom: 4,
      attributions: attribution ?? optVtDefaultAttribution,
    }),
    style: gsiOptVtStyle(
      { theme, styles, layers },
      { ...defaultTheme, palette: palePalette },
    ),
    background:
      background === false
        ? undefined
        : theme?.palette?.background ?? palePalette.background,
    declutter: declutter ?? true,
    ...vectorTileOptions,
  });
}

export default gsiOptVtPaleLayer;
