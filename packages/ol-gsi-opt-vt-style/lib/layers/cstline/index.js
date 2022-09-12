import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function coastlineStyle(feature, resolution, { palette, zIndex }) {
    return new Style({
        stroke: new Stroke({
            color: palette.coastline,
        }),
        zIndex: zIndex.coastline,
    });
}
//# sourceMappingURL=index.js.map