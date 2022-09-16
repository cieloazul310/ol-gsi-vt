import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiOptVTFeatureProperties,
  StructureLineCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { structureLineCommonStyle } from '../../../common';

export default function strctLineStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Record<string, unknown>,
    Exclude<StructureLineCode, 8202>
  >;

  return structureLineCommonStyle({ code: vt_code }, resolution, theme);
}
