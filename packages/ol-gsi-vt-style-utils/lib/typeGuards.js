export function isNumber(num) {
    return typeof num === 'number';
}
export function isString(str) {
    return typeof str === 'string';
}
export function altiToString(alti) {
    if (isNumber(alti))
        return alti.toString();
    if (isString(alti))
        return alti;
    throw new Error();
}
//# sourceMappingURL=typeGuards.js.map