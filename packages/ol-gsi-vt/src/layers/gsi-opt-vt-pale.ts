import VectorTileLayer from "ol/layer/VectorTile";
import { PMTilesVectorSource } from "ol-pmtiles";
import { gsiOptVtStyle } from "@cieloazul310/ol-gsi-vt-style";
import {
  useDefaultTheme,
  usePalePalette,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { optVtDefaultAttribution, type GsiOptVtLayerOptions } from "./types";

function gsiOptVtPaleLayer({
  layers,
  theme,
  styles,
  sourceOptions = {},
  attribution = optVtDefaultAttribution,
  declutter = true,
  background,
  ...vectorTileOptions
}: GsiOptVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new PMTilesVectorSource({
      ...sourceOptions,
      url: "https://cyberjapandata.gsi.go.jp/xyz/optimal_bvmap-v1/optimal_bvmap-v1.pmtiles",
      maxZoom: sourceOptions.maxZoom ?? 16,
      minZoom: sourceOptions.minZoom ?? 4,
      attributions: attribution,
    }),
    style: gsiOptVtStyle(
      { theme, styles, layers },
      { ...useDefaultTheme(), palette: usePalePalette() },
    ),
    background:
      background === false
        ? undefined
        : (theme?.palette?.background ?? usePalePalette().background),
    declutter,
    ...vectorTileOptions,
  });
}

export default gsiOptVtPaleLayer;
