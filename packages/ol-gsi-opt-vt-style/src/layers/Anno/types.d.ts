import type { OptVTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

export type AnnoFeatureProperties<vt_code extends number = number> =
  OptVTFeatureProperties<
    {
      vt_text?: string;
      vt_dsppos?: string;
      vt_arrng?: 1 | 2;
      vt_arrngagl?: number;
    },
    vt_code
  >;
