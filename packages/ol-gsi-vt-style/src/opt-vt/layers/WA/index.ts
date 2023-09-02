import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  WaterAreaCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { waterareaCommonStyle } from "../../../common";

export default function waterareaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Exclude<WaterAreaCode, 5000 | 55000>
  >;
  return waterareaCommonStyle({ code: vt_code }, resolution, theme);
}
