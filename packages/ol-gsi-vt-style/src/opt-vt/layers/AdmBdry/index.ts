import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  BoundaryCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { boundaryCommonStyle } from "../../../common";

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<BoundaryCode, 1211 | 1212 | 1221>
  >;
  return boundaryCommonStyle({ code: vt_code }, resolution, theme);
}
