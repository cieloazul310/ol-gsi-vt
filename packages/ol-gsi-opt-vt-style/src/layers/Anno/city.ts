import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  isNumber,
  dspPosToPosition,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';

export default function cityStyle(
  {
    vt_code,
    vt_dsppos,
    vt_text,
  }: Pick<AnnoFeatureProperties, 'vt_code' | 'vt_text' | 'vt_dsppos'>,
  resolution: number
) {
  if ([51301, 51302, 51303].includes(vt_code)) {
    if (resolution > 2445.98 && vt_code !== 51301) return new Style();
    if (resolution > 1222.99 && ![51301, 51302].includes(vt_code))
      return new Style();

    const zIndex = vt_code === 51301 ? 1002 : vt_code === 51302 ? 1001 : 1000;
    const radius = vt_code === 51301 ? 4 : vt_code === 51302 ? 3 : 2;
    const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(
      vt_dsppos,
      radius
    );
    return [
      new Style({
        text: new Text({
          text: vt_text,
          fill: new Fill({ color: '#333' }),
          stroke: new Stroke({ width: 2, color: '#fff' }),
          font: `bold ${radius + 10}px sans-serif`,
          textAlign,
          textBaseline,
          offsetX,
          offsetY,
        }),
        zIndex: zIndex + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ width: 1, color: '#333' }),
        }),
        zIndex,
      }),
    ];
  }

  if ([1301, 1302, 1303, 1401, 1402, 1403].includes(vt_code)) {
    const zIndex = vt_code === 1301 ? 1002 : vt_code === 1302 ? 1001 : 1000;
    const radius = vt_code === 1301 ? 4 : vt_code === 1302 ? 3 : 2;
    const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(
      vt_dsppos,
      radius
    );

    return [
      new Style({
        text: new Text({
          text: vt_text,
          fill: new Fill({ color: '#666' }),
          stroke: new Stroke({ width: 2, color: '#fff' }),
          font: `${radius + 10}px sans-serif`,
          textAlign,
          textBaseline,
          offsetX,
          offsetY,
        }),
        zIndex: zIndex + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: '#fff' }),
          stroke: new Stroke({ width: 1, color: '#333' }),
          declutterMode: 'obstacle',
        }),
        zIndex,
      }),
    ];
  }

  return new Style();
}
