import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
export default function buildingStyle(feature, resolution, { palette, zIndex }) {
    if (resolution >= 2.39)
        return new Style();
    const { ftCode, lvOrder } = feature.getProperties();
    const stroke = ftCode === 3111
        ? undefined
        : new Stroke({
            color: palette.building.stroke,
            width: 1,
        });
    return new Style({
        fill: new Fill({
            color: palette.building.fill,
        }),
        stroke,
        zIndex: zIndex.building + (lvOrder !== null && lvOrder !== void 0 ? lvOrder : 0) * 10,
    });
}
//# sourceMappingURL=index.js.map