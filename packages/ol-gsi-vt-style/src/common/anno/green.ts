import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Text from "ol/style/Text";
import {
  dspPosToPosition,
  type AnnoCodeGreen,
  type Theme,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import type { LabelCommonProperties } from "./types";

export default function greenCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeGreen>,
  resolution: number,
  theme: Theme,
) {
  if (!text) return new Style();
  const fontSize = code === 331 ? "lg" : "md";
  const position = dspPosToPosition(dspPos, arrng);
  return new Style({
    text: new Text({
      text,
      fill: new Fill({ color: theme.palette.anno.green }),
      font: theme.typography.toString(fontSize),
      stroke: new Stroke({ color: theme.palette.contrast, width: 4 }),
      ...position,
    }),
    zIndex: theme.zIndex.label,
  });
}
