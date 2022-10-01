import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';

type LabelFeatureProperties<AnnoCtg extends number = number> =
  GsiVTFeatureProperties<
    100 | 50100,
    {
      annoCtg: AnnoCtg;
      knj?: string;
      dspPos?: string;
      arrng?: 1 | 2;
      arrngAgl?: number;
      annoChar?: string;
      kana?: string;
    }
  >;

export default function labelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { knj, dspPos, annoCtg, arrng } =
    feature.getProperties() as LabelFeatureProperties;
  return annoCommonStyle(
    { code: annoCtg, text: knj, dspPos, arrng },
    resolution,
    theme
  );
}
