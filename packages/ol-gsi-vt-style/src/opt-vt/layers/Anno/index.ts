import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';
import type { GsiOptVTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

type AnnoFeatureProperties<vt_code extends number = number> =
  GsiOptVTFeatureProperties<
    vt_code,
    {
      vt_text?: string;
      vt_dsppos?: string;
      vt_arrng?: 1 | 2;
      vt_arrngagl?: number;
    }
  >;

export default function annoStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties;

  return annoCommonStyle(
    { code: vt_code, text: vt_text, dspPos: vt_dsppos, arrng: vt_arrng },
    resolution,
    theme
  );
}
