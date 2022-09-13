import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import {
  dspPosToPosition,
  zoomToResolution,
  type Theme,
  type AnnoCodeSchool,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

function schoolZIndex(code: number) {
  if (code === 631) return 2;
  if ([632, 633, 3212].includes(code)) return 1;
  return 0;
}

export default function schoolCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeSchool>,
  resolution: number,
  { palette, ...theme }: Theme
) {
  const zIndex = schoolZIndex(code) + theme.zIndex.symbol;
  if (resolution > zoomToResolution(17) && ![631, 885].includes(code)) {
    const bg =
      code === 3212
        ? new Style({
            image: new Circle({
              radius: 7,
              declutterMode: 'obstacle',
              stroke: new Stroke({ color: palette.anno.text.main, width: 1 }),
            }),
            zIndex,
          })
        : new Style();
    return [
      new Style({
        text: new Text({
          text: '文',
          font: `11px bold sans-serif`,
          fill: new Fill({ color: palette.anno.text.main }),
        }),
        zIndex: zIndex + 1,
      }),
      bg,
    ];
  }
  if (text) {
    const em = [631, 632].includes(code);
    const stroke = em
      ? new Stroke({
          color: palette.contrast,
          width: 3,
        })
      : undefined;
    const position = dspPosToPosition(dspPos, arrng);
    return new Style({
      text: new Text({
        text: text,
        fill: new Fill({
          color: em ? palette.anno.text.main : palette.anno.text.light,
        }),
        font: `12px sans-serif`,
        stroke,
        ...position,
      }),
      zIndex: zIndex,
    });
  }

  return new Style();
}
