import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiVTFeatureProperties,
  RiverCode,
  WaterLineCode,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { riverCommonStyle, waterlineCommonStyle } from "../../../common";

export default function riverStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    | Extract<
        RiverCode,
        5301 | 5302 | 5321 | 5322 | 55301 | 55302 | 55303 | 55304
      >
    | Extract<WaterLineCode, 5201 | 5202 | 5203>
  >;
  if (ftCode === 5201 || ftCode === 5202 || ftCode === 5203)
    return waterlineCommonStyle({ code: ftCode }, resolution, theme);

  return riverCommonStyle({ code: ftCode }, resolution, theme);
}
