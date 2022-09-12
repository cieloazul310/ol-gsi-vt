import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function boundaryStyle(feature, resolution, { palette, zIndex }) {
    const { vt_code } = feature.getProperties();
    return new Style({
        stroke: new Stroke({
            width: 2,
            color: palette.boundary.main,
            lineDash: [4, 4],
        }),
        zIndex: zIndex.boundary,
    });
}
//# sourceMappingURL=index.js.map