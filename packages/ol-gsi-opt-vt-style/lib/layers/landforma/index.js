import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { isNumber, zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function landformaStyle(feature) {
    const { ftCode } = feature.getProperties();
    if (!isNumber(ftCode))
        throw new Error();
    const color = ftCode === 7401
        ? palette.landforma.wetland
        : ftCode === 7403
            ? palette.landforma.sand
            : palette.landforma.firn;
    return new Style({
        fill: new Fill({
            color,
        }),
        zIndex: zIndex.landforma,
    });
}
//# sourceMappingURL=index.js.map