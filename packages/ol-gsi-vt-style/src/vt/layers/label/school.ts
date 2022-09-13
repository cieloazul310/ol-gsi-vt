import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  AnnoCodeSchool,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import schoolCommonStyle from '../../../common/anno/school';
import type { LabelFeatureProperties } from './types';

export default function schoolStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { annoCtg, knj, dspPos, arrng } =
    feature.getProperties() as LabelFeatureProperties<AnnoCodeSchool>;

  return schoolCommonStyle(
    { code: annoCtg, text: knj, dspPos, arrng },
    resolution,
    theme
  );
}
