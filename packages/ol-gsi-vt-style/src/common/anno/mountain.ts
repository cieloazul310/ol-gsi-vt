import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import {
  dspPosToPosition,
  type AnnoCodeMountain,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

function mountainZIndex(code: AnnoCodeMountain) {
  if ([311, 314, 333, 810].includes(code)) return 10;
  if ([312, 315, 316].includes(code)) return 7;
  return 0;
}

export default function mountainLabelCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeMountain>,
  resolution: number,
  theme: Theme
) {
  if (!text) return new Style();

  const color = theme.palette.anno.mountain;
  const fontSize = [333, 346].includes(code)
    ? 'lg'
    : code === 314
    ? 'md'
    : 'sm';
  const bold = code === 333;
  const position = dspPosToPosition(dspPos, arrng);

  return new Style({
    text: new Text({
      text: text,
      fill: new Fill({ color }),
      font: theme.typography.toString(fontSize, { bold }),
      stroke: new Stroke({ color: theme.palette.contrast, width: 4 }),
      ...position,
    }),
    zIndex: theme.zIndex.label + mountainZIndex(code),
  });
}
