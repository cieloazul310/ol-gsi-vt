import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  AnnoCodeElevation,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import elevationCommonStyle from '../../../common/anno/elevation';
import type { AnnoFeatureProperties } from './types';

export default function elevationStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<AnnoCodeElevation>;
  return elevationCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
