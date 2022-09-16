import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  StructureLineCode,
  WStructureLineCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { structureLineCommonStyle } from '../../../common';

export default function structurelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    StructureLineCode | WStructureLineCode
  >;
  return structureLineCommonStyle({ code: ftCode }, resolution, theme);
}
