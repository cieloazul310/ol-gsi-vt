import { VTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

export type RailwayProperties = VTFeatureProperties<{
  snglDbl?: 0 | 1 | 2 | 3 | 4;
  opeState?: 0 | 1;
  railState?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 100 | 200 | 300 | 400 | 500;
  rtCode1?: string;
  rtCode10?: '0' | '1' | '2';
  rtCode?: string;
  staCode?: string;
}>;
