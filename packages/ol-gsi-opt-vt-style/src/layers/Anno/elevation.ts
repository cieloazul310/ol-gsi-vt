import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import RegularShape from 'ol/style/RegularShape';
import Fill from 'ol/style/Fill';
import type { FeatureLike } from 'ol/Feature';
import {
  dspPosToPosition,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';

export default function elevationStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties;
  const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition({
    vt_dsppos,
    vt_arrng,
  });
  const color = vt_code === 7711 ? palette.anno.water : palette.anno.text.main;

  return [
    vt_code === 7221
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
        text: vt_text,
        fill: new Fill({
          color,
        }),
        font: '9px Helvetica, sans-serif',
        textAlign,
        textBaseline,
        offsetX: vt_code === 7221 ? 0 : offsetX,
        offsetY: [7101, 7102, 7103, 7201, 7221, 7701, 7711].includes(vt_code)
          ? 8
          : offsetY,
      }),
      zIndex: zIndex.elevation,
    }),
  ];
}
