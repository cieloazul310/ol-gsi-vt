import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  AnnoCodeElevation,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { elevationCommonStyle } from '../../../common/';

export default function elevationStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, alti, altiDpth, dspPos, arrng } =
    feature.getProperties() as GsiVTFeatureProperties<
      {
        alti?: number | string;
        altiDpth?: number | string;
        dspPos?: string;
        arrng?: 1 | 2;
      },
      Extract<AnnoCodeElevation, 7201 | 7701 | 7221 | 7711 | 57221>
    >;
  const text = alti?.toString() ?? altiDpth?.toString();
  return elevationCommonStyle(
    { code: ftCode, text, dspPos, arrng },
    resolution,
    theme
  );
}
