import gsiOptVt from "./gsiOptVt";
import gsiOptVtPale from "./gsiOptVtPale";
import gsiVt from "./gsiVt";
import gsiVtPale from "./gsiVtPale";
import palette from "./palette";
import stamen from "./stamen";
import stamenHighway from "./stamen-highway";
import terrain from "./terrain";
import withRelief from "./with-relief";
import withoutAnno from "./without-anno";

const layers = {
  gsiOptVt,
  gsiOptVtPale,
  gsiVt,
  gsiVtPale,
  palette,
  stamen,
  stamenHighway,
  terrain,
  withRelief,
  withoutAnno,
};
export type LayerNames = keyof typeof layers;
export default layers;
