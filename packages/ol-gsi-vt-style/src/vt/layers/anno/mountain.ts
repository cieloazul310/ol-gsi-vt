import type { FeatureLike } from 'ol/Feature';
import type {
  AnnoCodeMountain,
  Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import mountainCommonStyle from '../../../common/anno/mountain';
import type { LabelFeatureProperties } from './types';

export default function mountainLabelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { annoCtg, knj, dspPos, arrng } =
    feature.getProperties() as LabelFeatureProperties<AnnoCodeMountain>;
  return mountainCommonStyle(
    { text: knj, code: annoCtg, dspPos, arrng },
    resolution,
    theme
  );
}
