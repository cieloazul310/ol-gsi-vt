import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import { spotToIcon, type Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function iconCommonStyle(
  { text, code }: { text?: string; code: number },
  resolution: number,
  { palette, typography, zIndex }: Theme
) {
  if ([6301].includes(code)) return new Style();
  const isText = !!text;
  const icn = spotToIcon[code] ?? undefined;
  if (!text && !icn) return new Style();

  const order = (isText ? 10 : 0) + (code < 1000 ? 5 : 0);

  if (!isText) {
    return new Style({
      text: new Text({
        text: icn,
        font: `900 16px "Font Awesome 6 Free"`,
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast }),
      }),
      zIndex: zIndex.symbol + order,
    });
  }
  const txt = ['\n', '', text, typography.toString('md')];
  const renderTxt = [icn ?? '\uf276', `900 16px "Font Awesome 6 Free"`, ...txt];

  return [
    new Style({
      text: new Text({
        text: renderTxt,
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast, width: 2 }),
      }),
      zIndex: zIndex.symbol + order,
    }),
  ];
}
