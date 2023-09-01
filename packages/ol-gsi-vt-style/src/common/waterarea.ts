import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import type { Theme, WaterAreaCode } from "@cieloazul310/ol-gsi-vt-style-utils";

export default function waterareaCommonStyle(
  {
    code,
  }: {
    code: WaterAreaCode;
  },
  resolution: number,
  { palette, zIndex }: Theme,
) {
  return new Style({
    fill: new Fill({
      color: palette.waterarea,
    }),
    zIndex: zIndex.waterarea,
  });
}
