import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  dspPosToPosition,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';

export default function cityStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code, vt_dsppos, vt_text, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties;

  if ([1301, 1302, 1303, 1401, 1402, 1403].includes(vt_code)) {
    const zIdx =
      zIndex.symbol + (vt_code === 1301 ? 2 : vt_code === 1302 ? 1 : 0);
    const radius = vt_code === 1301 ? 4 : vt_code === 1302 ? 3 : 2;
    const position = dspPosToPosition(vt_dsppos, vt_arrng, radius);

    return [
      new Style({
        text: new Text({
          text: vt_text,
          fill: new Fill({ color: palette.anno.text.light }),
          stroke: new Stroke({ width: 2, color: palette.contrast }),
          font: `${radius + 10}px sans-serif`,
          ...position,
        }),
        zIndex: zIdx + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: palette.contrast }),
          stroke: new Stroke({ width: 1, color: palette.anno.text.main }),
          declutterMode: 'obstacle',
        }),
        zIndex: zIdx,
      }),
    ];
  }

  return new Style();
}
