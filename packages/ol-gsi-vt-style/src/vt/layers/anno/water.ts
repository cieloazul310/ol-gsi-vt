import type { FeatureLike } from 'ol/Feature';
import type { AnnoCodeWater, Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import waterLabelCommonStyle from '../../../common/anno/water';
import type { LabelFeatureProperties } from './types';

export default function waterLabelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { annoCtg, knj, dspPos, arrng } =
    feature.getProperties() as LabelFeatureProperties<AnnoCodeWater>;
  return waterLabelCommonStyle(
    { code: annoCtg, text: knj, dspPos, arrng },
    resolution,
    theme
  );
}
