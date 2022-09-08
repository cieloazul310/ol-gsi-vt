import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function buildingStyle(feature, resolution) {
    if (resolution >= 2.39)
        return new Style();
    const { vt_code, vt_lvorder } = feature.getProperties();
    const stroke = vt_code === 3111
        ? undefined
        : new Stroke({
            color: palette.buiding.stroke,
            width: 1,
        });
    return new Style({
        fill: new Fill({
            color: palette.buiding.fill,
        }),
        stroke,
        zIndex: zIndex.building + (vt_lvorder !== null && vt_lvorder !== void 0 ? vt_lvorder : 0) * 10,
    });
}
//# sourceMappingURL=index.js.map