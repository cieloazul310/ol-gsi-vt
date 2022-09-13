import type { FeatureLike } from 'ol/Feature';
import type {
  AnnoCodeMountain,
  Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import mountainCommonStyle from '../../../common/anno/mountain';
import type { AnnoFeatureProperties } from './types';

export default function mountainLabelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<AnnoCodeMountain>;
  return mountainCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
