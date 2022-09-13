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
  const fontSize =
    code === 333
      ? theme.fontSize.lg
      : code === 314
      ? theme.fontSize.md
      : theme.fontSize.sm;
  const stroke = [311, 312, 314, 333].includes(code)
    ? new Stroke({ color: theme.palette.contrast, width: 4 })
    : undefined;
  const position = dspPosToPosition(dspPos, arrng);

  return new Style({
    text: new Text({
      text: text,
      fill: new Fill({ color }),
      font: `${fontSize}px sans-serif`,
      stroke,
      ...position,
    }),
    zIndex: theme.zIndex.label + mountainZIndex(code),
  });
}
