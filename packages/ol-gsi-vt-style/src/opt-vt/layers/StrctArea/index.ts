import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  StructureAreaCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { structureAreaCommonStyle } from "../../../common";

export default function strctAreaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<StructureAreaCode>;

  return structureAreaCommonStyle({ code: vt_code }, resolution, theme);
}
