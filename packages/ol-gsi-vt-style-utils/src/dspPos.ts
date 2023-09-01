function parseTextAlign(arrng?: 1 | 2 | undefined) {
  if (arrng === 2)
    return (bl: string) => {
      if (bl === "T") return "right";
      if (bl === "B") return "left";
      return "center";
    };
  return (al: string) => {
    if (al === "L") return "left";
    if (al === "R") return "right";
    return "center";
  };
}
function parseTextBaseline(arrng?: 1 | 2 | undefined) {
  if (arrng === 2)
    return (al: string) => {
      if (al === "L") return "top";
      if (al === "R") return "bottom";
      return "middle";
    };
  return (bl: string) => {
    if (bl === "T") return "top";
    if (bl === "B") return "bottom";
    return "middle";
  };
}

export function dspPosToAlignBaseline(
  dspPos?: string | undefined,
  /** arrng: 1 は横書き、2は縦書きを示す */
  arrng?: 1 | 2 | undefined,
): [CanvasTextAlign | undefined, CanvasTextBaseline | undefined] {
  if (!dspPos && typeof dspPos !== "string") return [undefined, undefined];

  const al = dspPos.slice(0, 1);
  const bl = dspPos.slice(1, 2);
  if (arrng === 2) {
    const textAlignParser = parseTextAlign(arrng);
    const textAlign = textAlignParser(bl);
    const textBaselineParser = parseTextBaseline(arrng);
    const textBaseline = textBaselineParser(al);
    return [textAlign, textBaseline];
  }
  const textAlignParser = parseTextAlign(arrng);
  const textAlign = textAlignParser(al);
  const textBaselineParser = parseTextBaseline(arrng);
  const textBaseline = textBaselineParser(bl);

  return [textAlign, textBaseline];
}

function alignToOffsetDirection(textAlign: CanvasTextAlign | undefined) {
  if (textAlign === "right") return -1;
  if (textAlign === "left") return 1;
  return 0;
}
function baselineToOffsetDirection(
  textBaseline: CanvasTextBaseline | undefined,
) {
  if (textBaseline === "top") return 1;
  if (textBaseline === "bottom") return -1;
  return 0;
}

export function dspPosToOffset(
  textAlign: CanvasTextAlign | undefined,
  textBaseline: CanvasTextBaseline | undefined,
  radius?: number,
): number[] {
  if (textAlign !== "center" || textBaseline !== "middle") {
    const offsetX = alignToOffsetDirection(textAlign) * ((radius ?? 0) + 2);
    const offsetY = baselineToOffsetDirection(textBaseline) * (radius ?? 0);
    return [offsetX, offsetY];
  }
  return [0, 0];
}

/** 注記の表示位置から OpenLayers Text のオプションに変換する関数
 * dspPosは大文字2文字からなる
 *
 * 1文字目は textAlign (arrng === 2の場合は textBaseline)
 * - L: left
 * - C: center
 * - R: right
 *
 * 2文字目は textBaseline (arrng === 2の場合は textAlign)
 * - T: top
 * - C: center (middle)
 * - B: bottom
 */
export function dspPosToPosition(
  dspPos: string | undefined = undefined,
  arrng?: 1 | 2,
  radius?: number,
): {
  textAlign: CanvasTextAlign | undefined;
  textBaseline: CanvasTextBaseline | undefined;
  offsetX: number;
  offsetY: number;
} {
  const [textAlign, textBaseline] = dspPosToAlignBaseline(dspPos, arrng);
  const [offsetX, offsetY] = dspPosToOffset(textAlign, textBaseline, radius);

  return {
    textAlign,
    textBaseline,
    offsetX,
    offsetY,
  };
}
