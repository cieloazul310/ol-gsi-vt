import type { FeatureLike } from 'ol/Feature';
import type { AnnoCodeWater, Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import waterLabelCommonStyle from '../../../common/anno/water';
import type { AnnoFeatureProperties } from './types';

export default function waterLabelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<AnnoCodeWater>;

  return waterLabelCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
