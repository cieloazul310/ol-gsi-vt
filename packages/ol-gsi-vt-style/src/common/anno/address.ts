import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import {
  dspPosToPosition,
  zoomToResolution,
  type AnnoCodeAddress,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

function addressToOrder(code: AnnoCodeAddress) {
  if (code === 140) return 10;
  if ([346, 351, 850, 1301, 1401, 51301].includes(code)) return 8;
  if ([130, 352, 431, 1302, 1402, 51302].includes(code)) return 6;
  if ([110, 120, 1303, 1403, 51303].includes(code)) return 4;
  if ([210, 800, 432].includes(code)) return 2;
  return 0;
}
function orderToFontSize(order: 10 | 8 | 6 | 4 | 2 | 0, resolution: number) {
  if (resolution > zoomToResolution(8)) return order === 10 ? 'lg' : 'md';
  if (order === 10) return 'xl';
  if (order === 8) return 'lg';
  if (order === 0) return 'sm';
  return 'md';
}
function codeToBold(code: AnnoCodeAddress, resolution: number) {
  if (resolution < zoomToResolution(9) && code === 140) return true;
  if (resolution < zoomToResolution(11) && code === 110) return true;
  return false;
}

export default function addressCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeAddress>,
  resolution: number,
  { palette, zIndex, typography }: Theme
) {
  if (code === 800) return new Style();
  if (!text) return new Style();
  const order = addressToOrder(code);
  const zIdx = zIndex.label + order;
  const position = dspPosToPosition(dspPos, arrng);
  const fontSize = orderToFontSize(order, resolution);
  const bold = codeToBold(code, resolution);
  const color = [220, 1403].includes(code)
    ? palette.anno.text.light
    : palette.anno.text.main;

  return new Style({
    text: new Text({
      text: text,
      fill: new Fill({ color }),
      stroke: new Stroke({ width: 4, color: palette.contrast }),
      font: typography.toString(fontSize, { bold }),
      ...position,
    }),
    zIndex: zIdx + 10,
  });
}
