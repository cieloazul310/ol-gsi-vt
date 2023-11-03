import Tile from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import XYZ from "ol/source/XYZ";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import {
  gsiOptVtLayer,
  annoCodeIsElevation,
  annoCodeIsTerrain,
  annoCodeIsWater,
  zoomToResolution,
  type GsiOptVTFeatureProperties,
} from "@cieloazul310/ol-gsi-vt";

const relief = new Tile({
  source: new XYZ({
    url: "https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png",
    attributions:
      '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
    maxZoom: 15,
    minZoom: 5,
  }),
});
const slope = new Tile({
  className: "multiply",
  source: new XYZ({
    url: "https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png",
    attributions:
      '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
    maxZoom: 15,
    minZoom: 3,
  }),
});

function terrainOrder(vt_code: number) {
  if (vt_code === 333) return 3;
  if ([313, 316, 332, 832].includes(vt_code)) return 1;
  return 2;
}
function terrainFontSize(order: number) {
  if (order === 3) return "xl";
  if (order === 2) return "lg";
  return "md";
}
function waterOrder(vt_code: number) {
  if ([341, 344, 348, 840, 841].includes(vt_code)) return 2;
  if ([321, 322, 345, 347, 521, 820, 842].includes(vt_code)) return 1;
  return 0;
}
function waterFontSize(order: number) {
  if (order === 3) return "xl";
  if (order === 2) return "lg";
  return "md";
}
function municipalityOrder(vt_code: number) {
  if (vt_code === 140) return 4;
  if (vt_code === 110) return 2;
  return 0;
}
function municipalityFontSize(order: number, resolution: number) {
  if (order === 4 && resolution < zoomToResolution(9)) return "xl";
  if (order === 2) return "lg";
  return "md";
}

const anno = gsiOptVtLayer({
  layers: ["AdmBdry", "Anno", "WA", "RvrCL", "WRltLine"],
  background: false,
  theme: {
    palette: {
      boundary: { main: "#000" },
      searoute: "#02a",
    },
  },
  styles: {
    Anno: (feature, resolution, theme) => {
      const { vt_code, vt_text } =
        feature.getProperties() as GsiOptVTFeatureProperties<
          number,
          {
            vt_text?: string;
          }
        >;
      if (!vt_text) return new Style();
      if (annoCodeIsTerrain(vt_code)) {
        const order = terrainOrder(vt_code);
        const fontSize = terrainFontSize(order);
        return new Style({
          text: new Text({
            text: vt_text,
            font: theme.typography.toString(fontSize, { bold: true }),
            fill: new Fill({ color: theme.palette.contrast }),
            stroke: new Stroke({
              color: theme.palette.anno.terrain,
              width: 4,
            }),
          }),
          zIndex: theme.zIndex.label + order,
        });
      }
      if (annoCodeIsWater(vt_code)) {
        const order = waterOrder(vt_code);
        const fontSize = waterFontSize(order);
        return new Style({
          text: new Text({
            text: vt_text,
            font: theme.typography.toString(fontSize, { bold: true }),
            fill: new Fill({ color: theme.palette.contrast }),
            stroke: new Stroke({
              color: theme.palette.anno.water,
              width: 4,
            }),
          }),
          zIndex: theme.zIndex.label + order,
        });
      }
      if ([110, 140, 210].includes(vt_code)) {
        const order = municipalityOrder(vt_code);
        const fontSize = municipalityFontSize(order, resolution);
        return new Style({
          text: new Text({
            text: vt_text,
            font: theme.typography.toString(fontSize),
            fill: new Fill({ color: theme.palette.contrast }),
            stroke: new Stroke({
              color: theme.palette.anno.text.main,
              width: 4,
            }),
          }),
          zIndex: theme.zIndex.label + order,
        });
      }
      if (!annoCodeIsElevation(vt_code)) return new Style();
      return undefined;
    },
    WA: (feature) => {
      const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties;
      if ([5100, 5101, 5102, 5103, 5111, 5121].includes(vt_code))
        return new Style();
      return undefined;
    },
  },
});

const withRelief = new LayerGroup({
  layers: [relief, slope, anno],
  properties: {
    name: "地形",
  },
});

export default withRelief;
