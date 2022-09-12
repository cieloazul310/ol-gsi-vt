import type { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import { type ThemeOptions, type Theme, type OptVTLayerName } from '@cieloazul310/ol-gsi-vt-style-utils';
export declare type OptLayerStyleOptions = {
    [key in OptVTLayerName]?: (feature: FeatureLike, resolution: number, theme: Theme) => Style | Style[];
};
export default function gsiOptVtStyle(options?: {
    theme?: ThemeOptions;
    styles?: OptLayerStyleOptions;
}): (feature: FeatureLike, resolution: number) => Style | Style[] | undefined;
//# sourceMappingURL=index.d.ts.map