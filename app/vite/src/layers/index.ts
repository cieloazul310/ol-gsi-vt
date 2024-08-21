import LayerBase from "ol/layer/Base";
import { gsiVtLayer, gsiOptVtLayer } from "@cieloazul310/ol-gsi-vt";
import cjstd from "./gsi";
// import stamen from "./stamen";
import withRelief from "./with-relief";
import pale from "./pale";
import withoutAnno from "./without-anno";

export const vt = gsiVtLayer({
  properties: {
    name: "ベクトルタイル",
  },
});
export const optVt = gsiOptVtLayer({
  properties: {
    name: "最適化ベクトルタイル",
  },
});

const layers: LayerBase[] = [
  optVt,
  vt,
  cjstd,
  pale,
  // stamen,
  withRelief,
  withoutAnno,
];

export default layers;
