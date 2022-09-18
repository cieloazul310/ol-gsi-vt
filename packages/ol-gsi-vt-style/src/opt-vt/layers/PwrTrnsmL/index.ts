import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  StructureLineCode,
  GsiOptVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { structureLineCommonStyle } from '../../../common';

export default function PwrTrnsmL(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code } = feature.getProperties() as GsiOptVTFeatureProperties<
    Extract<StructureLineCode, 8202>
  >;
  return structureLineCommonStyle({ code: vt_code }, resolution, theme);
}
