import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  BuildingCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { buildingCommonStyle } from '../../../common';

export default function buildingStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, lvOrder } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    BuildingCode
  >;
  return buildingCommonStyle({ code: ftCode, lvOrder }, resolution, theme);
}
