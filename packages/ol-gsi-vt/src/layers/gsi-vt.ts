import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVTFormat from "ol/format/MVT";
import { gsiVtStyle } from "@cieloazul310/ol-gsi-vt-style";
import { defaultPalette } from "@cieloazul310/ol-gsi-vt-style-utils";
import { vtDefaultAttribution, type GsiVtLayerOptions } from "./types";

function gsiVtLayer({
  layers,
  theme,
  styles,
  attribution = vtDefaultAttribution,
  declutter = true,
  background,
  ...vectorTileOptions
}: GsiVtLayerOptions = {}) {
  return new VectorTileLayer({
    source: new VectorTileSource({
      format: new MVTFormat({
        layers,
      }),
      url: "https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",
      attributions: attribution,
    }),
    style: gsiVtStyle({ theme, styles }),
    background:
      background === false
        ? undefined
        : theme?.palette?.background ?? defaultPalette.background,
    declutter,
    ...vectorTileOptions,
  });
}

export default gsiVtLayer;
