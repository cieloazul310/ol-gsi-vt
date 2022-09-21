import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import Icon from 'ol/style/Icon';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import {
  faMapPin,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { spotToIcon, codeToOrder } from './spotToIcon';

function parseSvgIcon(input: IconDefinition) {
  const [width, height, _ligatures, _unicode, path] = input.icon;
  return [
    'data:image/svg+xml;utf8',
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1"><path d="${path}" fill="white" /></svg>`
    ),
  ].join(',');
}

export default function iconCommonStyle(
  { text, code }: { text?: string; code: number },
  resolution: number,
  { palette, typography, zIndex }: Theme
) {
  // 墓地
  if ([6301].includes(code)) return new Style();

  const isText = !!text;
  const order = codeToOrder(code);
  const zIdx = (isText ? 10 : 0) + codeToOrder(code);

  // 寺院
  if ([662, 3232].includes(code)) {
    const renderText = isText
      ? [
          '卍',
          typography.toString('md', { bold: true }),
          '\n',
          '',
          text,
          typography.toString('md'),
        ]
      : '卍';
    return new Style({
      text: new Text({
        text: renderText,
        font: typography.toString('md', { bold: true }),
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast, width: 1 }),
      }),
      zIndex: zIndex.symbol + zIdx,
    });
  }
  const icn = spotToIcon[code] ?? undefined;
  if (!text && !icn) return new Style();
  const icon = parseSvgIcon(icn ?? faMapPin);
  const iconStyle = new Style({
    image: new Icon({
      src: icon,
      scale: 0.03,
      color: palette.anno.text.light,
      declutterMode: 'declutter',
    }),
    zIndex: zIndex.symbol + zIdx,
  });

  if (
    !isText ||
    (order < 2 && resolution > zoomToResolution(16)) ||
    (order < 6 && resolution > zoomToResolution(17))
  ) {
    return iconStyle;
  }

  return [
    new Style({
      text: new Text({
        text: text,
        font: typography.toString('md'),
        fill: new Fill({ color: palette.anno.text.light }),
        stroke: new Stroke({ color: palette.contrast, width: 3 }),
        offsetY: 20,
      }),
      zIndex: zIndex.symbol + zIdx - 1,
    }),
    iconStyle,
  ];
}
