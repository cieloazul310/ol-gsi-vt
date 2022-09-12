import VectorTileLayer from 'ol/layer/VectorTile';
import { type OptLayerStyleOptions } from '@cieloazul310/ol-gsi-opt-vt-style';
import type { ThemeOptions, OptVTLayerName } from '@cieloazul310/ol-gsi-vt-style-utils';
export declare type GsiOptVtLayerOptions = {
    layers?: OptVTLayerName[];
    theme?: ThemeOptions;
    styles?: OptLayerStyleOptions;
};
declare function gsiOptVtLayer({ layers, theme, styles }?: GsiOptVtLayerOptions): VectorTileLayer;
export default gsiOptVtLayer;
//# sourceMappingURL=gsi-opt-vt.d.ts.map