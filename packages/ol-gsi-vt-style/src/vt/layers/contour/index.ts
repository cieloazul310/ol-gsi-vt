import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiVTFeatureProperties,
  ContourCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { contourCommonStyle } from "../../../common";

export default function contourStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { ftCode, alti } = feature.getProperties() as GsiVTFeatureProperties<
    ContourCode,
    { alti?: number }
  >;
  return contourCommonStyle(
    { code: ftCode, alti, altiDepth: alti },
    resolution,
    theme,
  );
}
