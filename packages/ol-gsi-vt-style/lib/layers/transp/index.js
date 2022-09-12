import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
export default function transpStyle(feature, resolution, { palette, zIndex, fontSize }) {
    var _a, _b;
    const { ftCode, nRNo, uRNo, name, ...props } = feature.getProperties();
    if (ftCode === 2901 && nRNo) {
        const isMajor = nRNo < 100;
        const size = fontSize.xs - (isMajor ? 1 : 2);
        return [
            new Style({
                text: new Text({
                    text: nRNo.toString(),
                    fill: new Fill({ color: palette.contrast }),
                    font: `${size}px sans-serif`,
                    padding: [0, 0, 0, 2],
                    backgroundFill: new Fill({ color: palette.transp.national }),
                    justify: 'center',
                }),
                zIndex: zIndex.transp - (isMajor ? 0 : 10),
            }),
        ];
    }
    if (ftCode === 2903 || ftCode === 2904) {
        console.log({ ftCode, nRNo, uRNo, name, ...props });
        const text = (_b = (_a = nRNo === null || nRNo === void 0 ? void 0 : nRNo.toString()) !== null && _a !== void 0 ? _a : uRNo) !== null && _b !== void 0 ? _b : '';
        return new Style({
            text: new Text({
                text,
                fill: new Fill({ color: palette.contrast }),
                stroke: new Stroke({ color: palette.transp.highway, width: 1 }),
                font: `${fontSize.xs + 1}px sans-serif`,
                padding: [0, 0, 0, 2],
                backgroundFill: new Fill({ color: palette.transp.highway }),
                justify: 'center',
            }),
            zIndex: zIndex.transp,
        });
    }
    if ([2941, 2942, 2943, 2944, 2945].includes(ftCode)) {
        return new Style({
            text: new Text({
                text: name !== null && name !== void 0 ? name : '',
                fill: new Fill({ color: palette.anno.transp }),
                stroke: new Stroke({ color: palette.contrast, width: 4 }),
                font: `${fontSize.sm}px sans-serif`,
            }),
            zIndex: zIndex.transp,
        });
    }
    return new Style();
}
//# sourceMappingURL=index.js.map