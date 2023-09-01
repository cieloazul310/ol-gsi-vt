import type { FeatureLike } from "ol/Feature";
import type {
  Theme,
  GsiVTFeatureProperties,
  AnnoCodeTransp,
} from "@cieloazul310/ol-gsi-vt-style-utils";
import { transpCommonStyle } from "../../../common";

function vtTranspText({
  ftCode,
  nRNo,
  uRNo,
  name,
}: GsiVTFeatureProperties<
  AnnoCodeTransp,
  {
    nRNo?: number | string;
    uRNo?: string;
    name?: string;
  }
>) {
  if (ftCode === 2901) return nRNo?.toString();
  if (ftCode === 2903 || ftCode === 2904) return nRNo?.toString() ?? uRNo;
  return name;
}

export default function transpStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
) {
  const { ftCode, ...props } =
    feature.getProperties() as GsiVTFeatureProperties<
      AnnoCodeTransp,
      {
        nRNo?: number | string;
        uRNo?: string;
        name?: string;
      }
    >;
  const text = vtTranspText({ ftCode, ...props });

  return transpCommonStyle({ code: ftCode, text }, resolution, theme);
}
