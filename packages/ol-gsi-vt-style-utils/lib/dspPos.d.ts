export declare function dspPosToAlignBaseline(dspPos: unknown): [CanvasTextAlign | undefined, CanvasTextBaseline | undefined];
export declare function dspPosToOffset(textAlign: CanvasTextAlign | undefined, textBaseline: CanvasTextBaseline | undefined, radius?: number): number[];
export declare function dspPosToPosition(dspPos: unknown, radius?: number): {
    textAlign: CanvasTextAlign | undefined;
    textBaseline: CanvasTextBaseline | undefined;
    offsetX: number;
    offsetY: number;
};
//# sourceMappingURL=dspPos.d.ts.map