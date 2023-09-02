import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  WStructureAreaCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { wstructureAreaCommonStyle } from "../../../common";

export default function wstrAStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<WStructureAreaCode>;

  return wstructureAreaCommonStyle({ code: vt_code }, resolution, theme);
}
