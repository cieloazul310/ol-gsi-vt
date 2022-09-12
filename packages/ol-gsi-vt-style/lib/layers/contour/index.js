import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function contourStyle(feature, resolution, { palette, zIndex }) {
    const { ftCode, altiFlag } = feature.getProperties();
    const isDepth = [7371, 7372, 7373].includes(ftCode);
    const color = isDepth
        ? palette.isbt
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