import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  AnnoCodeSchool,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import schoolCommonStyle from '../../../common/label/school';
import type { SymbolFeatureProperties } from './types';

export default function schoolStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, dspPos, name, arrng } =
    feature.getProperties() as SymbolFeatureProperties<AnnoCodeSchool>;

  return schoolCommonStyle(
    { code: ftCode, text: name, dspPos, arrng },
    resolution,
    theme
  );
}
