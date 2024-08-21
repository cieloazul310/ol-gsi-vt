import Style from "ol/style/Style";
import {
  gsiVtLayer,
  defineVtLayers,
  defineVtLayerStyle,
  annoCodeIsAddress,
  type GsiVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt";

const layers = defineVtLayers([
  "boundary",
  "coastline",
  "contour",
  "label",
  "lake",
  "landforma",
  "river",
  "symbol",
  "waterarea",
]);

const styles = defineVtLayerStyle({
  label: (feature) => {
    const { ftCode, annoCtg } =
      feature.getProperties() as GsiVTFeatureProperties<
        number,
        { annoCtg?: number }
      >;
    const code = annoCtg ?? ftCode;
    if (!annoCodeIsAddress(code)) return new Style();
    return undefined;
  },
  symbol: (feature) => {
    const { ftCode } = feature.getProperties() as GsiVTFeatureProperties;
    if (!annoCodeIsAddress(ftCode)) return new Style();
    return undefined;
  },
});

const layer = gsiVtLayer({ layers, styles });

export default layer;
