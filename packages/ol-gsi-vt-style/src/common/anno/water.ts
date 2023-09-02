import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import {
  zoomToResolution,
  dspPosToPosition,
  type AnnoCodeWater,
  type Theme,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import type { LabelCommonProperties } from "./types";

function waterZIndex(code: AnnoCodeWater) {
  if ([341, 344, 348, 840, 841].includes(code)) return 10;
  if ([321, 345, 820].includes(code)) return 5;
  return 0;
}

function waterFontSize(code: AnnoCodeWater, over13?: boolean) {
  if ([341, 344, 348, 840, 841].includes(code)) return "lg";
  if (over13 && [321, 322, 345, 820].includes(code)) return "lg";
  if ([321, 322, 345, 820].includes(code)) return "md";
  return "sm";
}

export default function waterLabelCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeWater>,
  resolution: number,
  theme: Theme,
) {
  if (!text) return new Style();

  const color = theme.palette.anno.water;
  const over13 = resolution < zoomToResolution(13);
  const fontSize = waterFontSize(code, over13);
  const position = dspPosToPosition(dspPos, arrng);
  const stroke =
    over13 && [321, 322].includes(code)
      ? new Stroke({ color: theme.palette.contrast, width: 4 })
      : undefined;

  return new Style({
    text: new Text({
      text,
      fill: new Fill({ color }),
      font: theme.typography.toString(fontSize),
      stroke,
      ...position,
    }),
    zIndex: theme.zIndex.label + waterZIndex(code),
  });
}
