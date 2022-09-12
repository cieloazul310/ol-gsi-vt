import type { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import { type ThemeOptions, type Theme, type VTLayerName } from '@cieloazul310/ol-gsi-vt-style-utils';
export declare type VTLayerStyleOptions = {
    [key in VTLayerName]?: (feature: FeatureLike, resolution: number, theme: Theme) => Style | Style[];
};
export default function gsiVtStyle(options?: {
    theme?: ThemeOptions;
    styles?: VTLayerStyleOptions;
}): (feature: FeatureLike, resolution: number) => Style | Style[] | undefined;
//# sourceMappingURL=index.d.ts.map