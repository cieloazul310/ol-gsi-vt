export declare function isNumber(num: unknown): num is number;
export declare function isString(str: unknown): str is string;
export declare function altiToString(alti: unknown): string;
export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
//# sourceMappingURL=typeGuards.d.ts.map