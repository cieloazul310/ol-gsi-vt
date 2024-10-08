import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import {
  gsiOptVtLayer,
  definePalette,
  defineOptVtLayers,
  defineOptVtLayerStyle,
  annoCodeAddress,
  type GsiOptVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt";

const palette = definePalette({
  waterarea: "#000",
  waterline: "#000",
  road: {
    highway: {
      edge: "#fff",
      main: "#333",
    },
    national: {
      edge: "#fff",
      main: "#333",
    },
    pref: {
      edge: "#fff",
      main: "#333",
    },
    basic: {
      edge: "#fff",
      main: "#333",
    },
    edge: "#000",
  },
  rail: {
    shinkansen: "#000",
    jr: "#333",
    shitetsu: "#333",
    station: {
      main: "#000",
      light: "#000",
    },
  },
  boundary: { main: "#000", light: "#000" },
  background: "#fff",
});

const layers = defineOptVtLayers([
  "WA",
  "RdCL",
  "RailCL",
  "RdCompt",
  "RdEdg",
  "RailTrCL",
  "Anno",
  "Cstline",
  "AdmBdry",
]);

const styles = defineOptVtLayerStyle({
  Anno: (feature, resolution, { typography, zIndex }) => {
    const { vt_text, vt_code } =
      feature.getProperties() as GsiOptVTFeatureProperties<
        number,
        {
          vt_text?: string;
        }
      >;
    if (!vt_text) return new Style();
    if (
      ![
        ...annoCodeAddress,
        321,
        411,
        412,
        422,
        441,
        532,
        534,
        631,
        2941,
        2942,
        2943,
        2944,
        2945,
        3205,
        3206,
        6341,
        6371,
      ].includes(vt_code)
    )
      return new Style();

    return new Style({
      text: new Text({
        text: vt_text,
        stroke: new Stroke({ width: 4, color: "#fff" }),
        fill: new Fill({ color: "#000" }),
        font: typography.toString("md", {
          bold: true,
          italic: true,
        }),
      }),
      zIndex: zIndex.label,
    });
  },
});

const layer = gsiOptVtLayer({
  theme: {
    palette,
  },
  layers,
  styles,
});

export default layer;
