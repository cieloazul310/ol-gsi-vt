import type { GsiVTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

export type LabelFeatureProperties<AnnoCtg extends number = number> =
  GsiVTFeatureProperties<
    {
      annoCtg: AnnoCtg;
      knj?: string;
      dspPos?: string;
      arrng?: 1 | 2;
      arrngAgl?: number;
      annoChar?: string;
      kana?: string;
    },
    100 | 50100
  >;
