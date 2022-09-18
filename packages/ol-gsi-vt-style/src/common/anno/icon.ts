import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { spotToIcon, codeToOrder } from './spotToIcon';

export default function iconCommonStyle(
  { text, code }: { text?: string; code: number },
  resolution: number,
  { palette, typography, zIndex }: Theme
) {
  if ([6301].includes(code)) return new Style();
  const isText = !!text;
  const icn = spotToIcon[code] ?? undefined;
  if (!text && !icn) return new Style();
  const order = codeToOrder(code);
  const zIdx = (isText ? 10 : 0) + codeToOrder(code);
  const iconFont = typography.toString(order === 10 ? 'lg' : '16px', {
    fontWeight: 900,
    fontFamily: '"Font Awesome 6 Free"',
  });

  if (!isText) {
    return new Style({
      text: new Text({
        text: icn,
        font: iconFont,
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast }),
      }),
      zIndex: zIndex.symbol + zIdx,
    });
  }
  const txt = ['\n', '', text, typography.toString('md')];
  const renderTxt = [icn ?? '\uf276', iconFont, ...txt];

  return [
    new Style({
      text: new Text({
        text: renderTxt,
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast, width: 3 }),
      }),
      zIndex: zIndex.symbol + zIdx,
    }),
  ];
}
