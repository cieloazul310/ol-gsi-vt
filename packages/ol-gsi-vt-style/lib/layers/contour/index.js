import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function contourStyle(feature, resolution) {
    const { ftCode, altiFlag } = feature.getProperties();
    const isDepth = [7371, 7372, 7373].includes(ftCode);
    const color = isDepth
        ? palette.contour.depth
        : resolution > 19.11
            ? palette.contour.main
            : palette.contour.light;
    const width = resolution > 38.22 || altiFlag ? 1 : 2;
    return new Style({
        stroke: new Stroke({
            color,
            width,
        }),
        zIndex: zIndex.contour,
    });
}
//# sourceMappingURL=index.js.map