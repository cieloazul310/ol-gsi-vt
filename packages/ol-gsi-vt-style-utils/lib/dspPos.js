import { isString } from './typeGuards';
export function dspPosToAlignBaseline(dspPos) {
    if (!isString(dspPos))
        return [undefined, undefined];
    const al = dspPos.slice(0, 1);
    const bl = dspPos.slice(1, 2);
    const textAlign = al === 'L' ? 'left' : al === 'R' ? 'right' : 'center';
    const textBaseline = bl === 'T' ? 'top' : bl === 'B' ? 'bottom' : 'middle';
    return [textAlign, textBaseline];
}
export function dspPosToOffset(textAlign, textBaseline, radius) {
    if (textAlign === 'center' || textBaseline === 'middle') {
        const offsetX = (textAlign === 'right' ? -1 : textAlign === 'left' ? 1 : 0) *
            ((radius !== null && radius !== void 0 ? radius : 0) + 2);
        const offsetY = (textBaseline === 'top' ? 1 : textBaseline === 'bottom' ? -1 : 0) *
            (radius !== null && radius !== void 0 ? radius : 0);
        return [offsetX, offsetY];
    }
    return [0, 0];
}
export function dspPosToPosition(dspPos, radius) {
    const [textAlign, textBaseline] = dspPosToAlignBaseline(dspPos);
    const [offsetX, offsetY] = dspPosToOffset(textAlign, textBaseline, radius);
    return {
        textAlign,
        textBaseline,
        offsetX,
        offsetY,
    };
}
//# sourceMappingURL=dspPos.js.map