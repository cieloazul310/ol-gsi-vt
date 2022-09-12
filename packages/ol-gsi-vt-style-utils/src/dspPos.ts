export function dspPosToAlignBaseline(
  dspPos?: string | undefined,
  arrng?: 1 | 2 | undefined
): [CanvasTextAlign | undefined, CanvasTextBaseline | undefined] {
  if (!dspPos && typeof dspPos !== 'string') return [undefined, undefined];

  const al = dspPos.slice(0, 1);
  const bl = dspPos.slice(1, 2);
  if (arrng === 2) {
    const textAlign = bl === 'T' ? 'left' : bl === 'B' ? 'right' : 'center';
    const textBaseline = al === 'L' ? 'top' : al === 'R' ? 'bottom' : 'middle';
    return [textAlign, textBaseline];
  }
  const textAlign = al === 'L' ? 'left' : al === 'R' ? 'right' : 'center';
  const textBaseline = bl === 'T' ? 'top' : bl === 'B' ? 'bottom' : 'middle';

  return [textAlign, textBaseline];
}

export function dspPosToOffset(
  textAlign: CanvasTextAlign | undefined,
  textBaseline: CanvasTextBaseline | undefined,
  radius?: number
): number[] {
  if (textAlign === 'center' || textBaseline === 'middle') {
    const offsetX =
      (textAlign === 'right' ? -1 : textAlign === 'left' ? 1 : 0) *
      ((radius ?? 0) + 2);
    const offsetY =
      (textBaseline === 'top' ? 1 : textBaseline === 'bottom' ? -1 : 0) *
      (radius ?? 0);
    return [offsetX, offsetY];
  }
  return [0, 0];
}

export function dspPosToPosition(
  {
    vt_arrng,
    vt_dsppos,
  }: { vt_arrng?: 1 | 2 | undefined; vt_dsppos?: string | undefined } = {
    vt_arrng: undefined,
    vt_dsppos: undefined,
  },
  radius?: number
): {
  textAlign: CanvasTextAlign | undefined;
  textBaseline: CanvasTextBaseline | undefined;
  offsetX: number;
  offsetY: number;
} {
  const [textAlign, textBaseline] = dspPosToAlignBaseline(vt_dsppos, vt_arrng);
  const [offsetX, offsetY] = dspPosToOffset(textAlign, textBaseline, radius);

  return {
    textAlign,
    textBaseline,
    offsetX,
    offsetY,
  };
}
