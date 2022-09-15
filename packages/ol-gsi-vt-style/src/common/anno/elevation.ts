import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import RegularShape from 'ol/style/RegularShape';
import Fill from 'ol/style/Fill';
import {
  dspPosToPosition,
  type AnnoCodeElevation,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

export default function elevationCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeElevation>,
  resolution: number,
  { palette, zIndex, typography }: Theme
) {
  const { offsetX, offsetY, ...position } = dspPosToPosition(dspPos, arrng);
  const color = [7711, 7372].includes(code)
    ? palette.anno.water
    : palette.anno.text.main;

  return [
    code === 7221
      ? new Style({
          image: new RegularShape({
            points: 3,
            radius: 4,
            fill: new Fill({ color: '#f33' }),
          }),
          zIndex: zIndex.elevation + 1,
        })
      : new Style({
          image: new Circle({
            radius: 1,
            fill: new Fill({
              color,
            }),
          }),
          zIndex: zIndex.elevation,
        }),
    new Style({
      text: new Text({
        text: text,
        fill: new Fill({
          color,
        }),
        font: typography.toString('xs', { fontFamily: 'Helvetica' }),
        offsetX: code === 7221 ? 0 : offsetX,
        offsetY: [7101, 7102, 7103, 7201, 7221, 7701, 7711].includes(code)
          ? 8
          : offsetY,
        ...position,
      }),
      zIndex: zIndex.elevation,
    }),
  ];
}
