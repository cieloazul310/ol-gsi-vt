import type { Options as VectorTileOptions } from 'ol/layer/VectorTile';
import type { AttributionLike } from 'ol/source/Source';
import type {
  GsiVTLayerStyleOptions,
  GsiOptLayerStyleOptions,
} from '@cieloazul310/ol-gsi-vt-style';
import type {
  ThemeOptions,
  GsiVTLayerName,
  GsiOptVTLayerName,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export type GsiLayerOptions<T extends 'vt' | 'opt-vt'> = {
  layers?: (T extends 'vt' ? GsiVTLayerName : GsiOptVTLayerName)[];
  styles?: T extends 'vt' ? GsiVTLayerStyleOptions : GsiOptLayerStyleOptions;
  theme?: ThemeOptions;
  attribution?: AttributionLike;
  declutter?: boolean;
  background?: boolean;
} & Omit<VectorTileOptions, 'declutter' | 'background' | 'style'>;

export type GsiVtLayerOptions = GsiLayerOptions<'vt'>;
export type GsiOptVtLayerOptions = GsiLayerOptions<'opt-vt'>;

export const vtDefaultAttribution =
  '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>';
export const optVtDefaultAttribution =
  '<a href="https://github.com/gsi-cyberjapan/optimal_bvmap" target="_blank" rel=”noopener noreferrer”>国土地理院</a>';
