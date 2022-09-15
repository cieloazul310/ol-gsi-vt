import type {
  Theme,
  AnnoCodeTransp,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';
import type { FeatureLike } from 'ol/Feature';
import { transpCommonStyle } from '../../../common';

export default function transpStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<AnnoCodeTransp>;

  return transpCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
