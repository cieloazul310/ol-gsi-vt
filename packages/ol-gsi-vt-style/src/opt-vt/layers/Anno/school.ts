import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  AnnoCodeSchool,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import schoolCommonStyle from '../../../common/anno/school';
import type { AnnoFeatureProperties } from './types';

export default function schoolStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_dsppos, vt_text, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<AnnoCodeSchool>;

  return schoolCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
