import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  RiverCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { riverCommonStyle } from "../../../common";

export default function riverStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<RiverCode, 5301 | 5302 | 5321 | 5322 | 5331>
  >;
  return riverCommonStyle({ code: vt_code }, resolution, theme);
}
