import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { isNumber } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function landformaStyle(feature, resolution, { palette, zIndex }) {
    const { ftCode } = feature.getProperties();
    if (!isNumber(ftCode))
        throw new Error();
    const color = ftCode === 7401
        ? palette.tpgphArea.wetland
        : ftCode === 7403
            ? palette.tpgphArea.sand
            : palette.tpgphArea.firn;
    return new Style({
        fill: new Fill({
            color,
        }),
        zIndex: zIndex.tpgphArea,
    });
}
//# sourceMappingURL=index.js.map