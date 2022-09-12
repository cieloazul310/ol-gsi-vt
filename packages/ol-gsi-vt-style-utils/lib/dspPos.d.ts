export declare function dspPosToAlignBaseline(dspPos?: string | undefined, arrng?: 1 | 2 | undefined): [CanvasTextAlign | undefined, CanvasTextBaseline | undefined];
export declare function dspPosToOffset(textAlign: CanvasTextAlign | undefined, textBaseline: CanvasTextBaseline | undefined, radius?: number): number[];
export declare function dspPosToPosition({ vt_arrng, vt_dsppos, }?: {
    vt_arrng?: 1 | 2 | undefined;
    vt_dsppos?: string | undefined;
}, radius?: number): {
    textAlign: CanvasTextAlign | undefined;
    textBaseline: CanvasTextBaseline | undefined;
    offsetX: number;
    offsetY: number;
};
//# sourceMappingURL=dspPos.d.ts.map