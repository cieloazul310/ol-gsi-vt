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
export type AnnoLayer = 'label' | 'symbol';
export type AnnoFeatureProperties<
  Layer extends AnnoLayer = unknown,
  Code extends number = number
> = Layer extends 'label'
  ? LabelFeatureProperties<Code>
  : Layer extends 'symbol'
  ? SymbolFeatureProperties<Code>
  : LabelFeatureProperties | SymbolFeatureProperties;
