import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
export default function riverStyle(feature, resolution, { palette, zIndex }) {
    const { ftCode } = feature.getProperties();
    return new Style({
        stroke: new Stroke({
            color: palette.waterarea,
            width: 1,
            lineDash: ftCode === 5322 ? [4, 4] : undefined,
        }),
        zIndex: zIndex.river,
    });
}
//# sourceMappingURL=index.js.map