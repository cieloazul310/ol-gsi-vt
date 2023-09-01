import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  WStructureLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { structureLineCommonStyle } from "../../../common";

export default function wstrLStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<WStructureLineCode>;

  return structureLineCommonStyle({ code: vt_code }, resolution, theme);
}
