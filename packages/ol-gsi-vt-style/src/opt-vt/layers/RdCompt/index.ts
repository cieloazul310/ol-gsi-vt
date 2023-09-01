import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiOptVTFeatureProperties,
  RdComptCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { rdEdgComptStyle } from "../../../common/road";

export default function rdComptStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { vt_code } =
    feature.getProperties() as GsiOptVTFeatureProperties<RdComptCode>;
  return rdEdgComptStyle({ code: vt_code }, resolution, theme);
}
