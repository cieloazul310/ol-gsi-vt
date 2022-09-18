import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';

export default function symbolStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, knj, name, dspPos, arrng } =
    feature.getProperties() as GsiVTFeatureProperties<
      number,
      {
        knj?: string;
        name?: string;
        dspPos?: string;
        arrng?: 1 | 2;
      }
    >;
  return annoCommonStyle(
    { code: ftCode, text: knj ?? name, dspPos, arrng },
    resolution,
    theme
  );
}
