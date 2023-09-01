import { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiVTFeatureProperties,
  TpgphLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { tpgphLineCommonStyle } from "../../../common";

export default function landformlStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<TpgphLineCode>;

  return tpgphLineCommonStyle({ code: ftCode }, resolution, theme);
}
