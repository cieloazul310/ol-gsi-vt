import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import {
  type Theme,
  type StructureAreaCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function structureAreaCommonStyle(
  { code }: { code: StructureAreaCode },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  return new Style({
    fill: new Fill({
      color: palette.building.fill,
    }),
    stroke: new Stroke({
      color: palette.building.stroke,
      width: 2,
    }),
    zIndex: zIndex.building,
  });
}
