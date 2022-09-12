import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function lakeStyle(feature, resolution, { palette, zIndex }) {
    return new Style({
        stroke: new Stroke({
            color: palette.waterarea,
            width: 1,
        }),
        zIndex: zIndex.lake,
    });
}
//# sourceMappingURL=index.js.map