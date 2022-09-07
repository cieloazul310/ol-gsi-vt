import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function riverStyle(feature) {
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