import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  BuildingCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { buildingCommonStyle } from '../../../common';

export default function buildingStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_lvorder } =
    feature.getProperties() as GsiOptVTFeatureProperties<
      Record<string, unknown>,
      BuildingCode
    >;
  return buildingCommonStyle(
    { code: vt_code, lvOrder: vt_lvorder },
    resolution,
    theme
  );
}
