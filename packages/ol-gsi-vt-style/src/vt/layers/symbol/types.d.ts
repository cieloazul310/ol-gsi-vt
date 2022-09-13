import { GsiVTFeatureProperties } from '@cieloazul310/ol-gsi-vt-style-utils';

export type SymbolFeatureProperties<FtCode extends number = number> =
  GsiVTFeatureProperties<
    {
      dspPos?: string;
      arrng?: 1 | 2;
      arrngAgl?: number;
      name?: string;
      alti?: number;
    },
    FtCode
  >;
