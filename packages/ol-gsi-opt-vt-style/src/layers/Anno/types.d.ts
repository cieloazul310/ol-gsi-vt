import type { OptVTFeatureProperties } from '../../types';

export type AnnoFeatureProperties = OptVTFeatureProperties<{
  vt_text?: string;
  vt_dsppos?: string;
  vt_arrng?: 1 | 2;
  vt_arrngagl?: number;
}>;
