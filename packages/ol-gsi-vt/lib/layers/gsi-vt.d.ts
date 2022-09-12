import VectorTileLayer from 'ol/layer/VectorTile';
import { type VTLayerStyleOptions } from '@cieloazul310/ol-gsi-vt-style';
import type { ThemeOptions, VTLayerName } from '@cieloazul310/ol-gsi-vt-style-utils';
export declare type GsiVtLayerOptions = {
    layers?: VTLayerName[];
    theme?: ThemeOptions;
    styles?: VTLayerStyleOptions;
};
declare function gsiVtLayer({ layers, theme, styles }?: GsiVtLayerOptions): VectorTileLayer;
export default gsiVtLayer;
//# sourceMappingURL=gsi-vt.d.ts.map