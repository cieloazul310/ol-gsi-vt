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
};

export type GsiVtLayerOptions = GsiLayerOptions<'vt'>;
export type GsiOptVtLayerOptions = GsiLayerOptions<'opt-vt'>;
