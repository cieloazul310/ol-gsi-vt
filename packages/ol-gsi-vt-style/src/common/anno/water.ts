import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import {
  dspPosToPosition,
  type AnnoCodeWater,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

function waterZIndex(code: AnnoCodeWater) {
  if ([341, 344, 348, 840, 841].includes(code)) return 10;
  if ([321, 345, 820].includes(code)) return 5;
  return 0;
}

export default function waterLabelCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeWater>,
  resolution: number,
  theme: Theme
) {
  if (!text) return new Style();

  const color = theme.palette.anno.water;
  const fontSize = [341, 344, 348, 840, 841].includes(code)
    ? theme.fontSize.lg
    : [321, 345, 820].includes(code)
    ? theme.fontSize.md
    : theme.fontSize.sm;
  const position = dspPosToPosition(dspPos, arrng);

  return new Style({
    text: new Text({
      text: text,
      fill: new Fill({ color }),
      font: `${fontSize}px sans-serif`,
      ...position,
    }),
    zIndex: theme.zIndex.label + waterZIndex(code),
  });
}
