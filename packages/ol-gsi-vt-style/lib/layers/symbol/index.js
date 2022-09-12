import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { isNumber, dspPosToPosition, } from '@cieloazul310/ol-gsi-vt-style-utils';
export default function symbolStyle(feature, resolution, { palette, zIndex }) {
    const { ftCode, knj, name, dspPos } = feature.getProperties();
    if (!isNumber(ftCode))
        throw new Error();
    if ([51301, 51302, 51303].includes(ftCode)) {
        if (resolution > 2445.98 && ftCode !== 51301)
            return new Style();
        if (resolution > 1222.99 && ![51301, 51302].includes(ftCode))
            return new Style();
        const zIndex = ftCode === 51301 ? 1002 : ftCode === 51302 ? 1001 : 1000;
        const radius = ftCode === 51301 ? 4 : ftCode === 51302 ? 3 : 2;
        const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(dspPos, radius);
        return [
            new Style({
                text: new Text({
                    text: knj,
                    fill: new Fill({ color: palette.anno.text.main }),
                    stroke: new Stroke({ width: 2, color: palette.contrast }),
                    font: `bold ${radius + 10}px sans-serif`,
                    textAlign,
                    textBaseline,
                    offsetX,
                    offsetY,
                }),
                zIndex: zIndex + 10,
            }),
            new Style({
                image: new Circle({
                    radius,
                    fill: new Fill({ color: palette.contrast }),
                    stroke: new Stroke({ width: 1, color: palette.anno.text.main }),
                }),
                zIndex,
            }),
        ];
    }
    if ([1401, 1402, 1403].includes(ftCode)) {
        const zIndex = ftCode === 1401 ? 1002 : ftCode === 1402 ? 1001 : 1000;
        const radius = ftCode === 1401 ? 4 : ftCode === 1402 ? 3 : 2;
        const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(dspPos, radius);
        return [
            new Style({
                text: new Text({
                    text: name,
                    fill: new Fill({ color: palette.anno.text.light }),
                    stroke: new Stroke({ width: 2, color: palette.contrast }),
                    font: `${radius + 10}px sans-serif`,
                    textAlign,
                    textBaseline,
                    offsetX,
                    offsetY,
                }),
                zIndex: zIndex + 10,
            }),
            new Style({
                image: new Circle({
                    radius,
                    fill: new Fill({ color: palette.contrast }),
                    stroke: new Stroke({ width: 1, color: palette.anno.text.main }),
                }),
                zIndex,
            }),
        ];
    }
    return new Style();
}
//# sourceMappingURL=index.js.map