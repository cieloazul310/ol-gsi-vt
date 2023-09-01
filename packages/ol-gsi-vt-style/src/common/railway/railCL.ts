import Style from "ol/style/Style";
import {
  zoomToResolution,
  type Theme,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import lessThan9 from "./z7-8";
import lessThan12 from "./z9-11";
import over12 from "./z12";
import type { RailCLCommonProperties } from "./utils";

export default function railCLCommonStyle(
  {
    code,
    snglDbl,
    railState,
    isJR,
    isChikatetsu,
    isStation,
    lvOrder,
  }: RailCLCommonProperties,
  resolution: number,
  theme: Theme,
) {
  if (resolution > zoomToResolution(9))
    return lessThan9({ code }, resolution, theme);
  if (resolution > zoomToResolution(12))
    return lessThan12({ isJR, snglDbl }, resolution, theme);
  if (resolution <= zoomToResolution(12))
    return over12(
      { code, snglDbl, railState, isJR, isChikatetsu, isStation, lvOrder },
      resolution,
      theme,
    );
  return new Style();
}
