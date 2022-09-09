import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function boundaryStyle(feature) {
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