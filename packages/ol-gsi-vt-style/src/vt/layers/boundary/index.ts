import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiVTFeatureProperties,
  BoundaryCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { boundaryCommonStyle } from "../../../common";

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<BoundaryCode>;
  return boundaryCommonStyle({ code: ftCode }, resolution, theme);
}
