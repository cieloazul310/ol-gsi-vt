import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
export default function buildingStyle(feature, resolution, { palette, zIndex }) {
    // if (resolution >= 2.39) return new Style();
    const { vt_code, vt_lvorder } = feature.getProperties();
    const stroke = vt_code === 3111
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
        zIndex: zIndex.building + (vt_lvorder !== null && vt_lvorder !== void 0 ? vt_lvorder : 0) * 10,
    });
}
//# sourceMappingURL=index.js.map