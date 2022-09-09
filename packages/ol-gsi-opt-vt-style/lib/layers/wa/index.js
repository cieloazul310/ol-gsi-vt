import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function waterareaStyle(feature) {
    const { vt_code } = feature.getProperties();
    return new Style({
        fill: new Fill({
            color: palette.waterarea,
        }),
        zIndex: zIndex.waterarea,
    });
}
//# sourceMappingURL=index.js.map