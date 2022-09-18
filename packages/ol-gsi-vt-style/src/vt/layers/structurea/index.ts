import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  StructureAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { structureAreaCommonStyle } from '../../../common';

export default function structureaStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<StructureAreaCode>;

  return structureAreaCommonStyle({ code: ftCode }, resolution, theme);
}
