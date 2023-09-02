import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import {
  type Theme,
  type StructureLineCode,
  type WStructureLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function structureLineCommonStyle(
  { code }: { code: StructureLineCode | WStructureLineCode },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  if (code === 8202) {
    return new Style({
      stroke: new Stroke({ color: palette.structure, width: 1 }),
      zIndex: zIndex.pwrTrnsmL,
    });
  }
  return new Style({
    stroke: new Stroke({
      color: palette.structure,
      width: 3,
      lineCap: "square",
    }),
    zIndex: zIndex.building,
  });
}
