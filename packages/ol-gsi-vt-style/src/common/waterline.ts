import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import {
  zoomToResolution,
  type Theme,
  type WaterLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";

export default function waterlineCommonStyle(
  { code }: { code: WaterLineCode },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  if (resolution < zoomToResolution(9)) return new Style();
  return new Style({
    stroke: new Stroke({
      color: palette.waterline,
    }),
    zIndex: zIndex.waterline,
  });
}
