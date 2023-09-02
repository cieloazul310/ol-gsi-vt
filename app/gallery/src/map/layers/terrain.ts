import Style from "ol/style/Style";
import {
  gsiVtLayer,
  annoCodeIsAddress,
  type GsiVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt";

const layer = gsiVtLayer({
  layers: [
    "boundary",
    "coastline",
    "contour",
    "label",
    "lake",
    "landforma",
    "river",
    "symbol",
    "waterarea",
  ],
  styles: {
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
  },
});

export default layer;
