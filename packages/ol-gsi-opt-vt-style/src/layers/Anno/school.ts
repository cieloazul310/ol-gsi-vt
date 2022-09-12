import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  dspPosToPosition,
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';

export default function schoolStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code, vt_dsppos, vt_text, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<
      631 | 632 | 633 | 634 | 885 | 3212 | 3213 | 3214
    >;
  if (resolution > zoomToResolution(17)) {
    const bg = [631, 632, 633, 3212].includes(vt_code)
      ? new Style({
          image: new Circle({
            radius: 7,
            declutterMode: 'obstacle',
            stroke: new Stroke({ color: palette.anno.text.main, width: 1 }),
          }),
          zIndex: zIndex.symbol,
        })
      : new Style();
    return [
      new Style({
        text: new Text({
          text: '文',
          font: `11px bold sans-serif`,
          fill: new Fill({ color: palette.anno.text.main }),
        }),
        zIndex: zIndex.symbol + 1,
      }),
      bg,
    ];
  }
  if (vt_text) {
    const position = dspPosToPosition({ vt_dsppos, vt_arrng });
    return new Style({
      text: new Text({
        text: vt_text,
        fill: new Fill({ color: palette.anno.text.main }),
        font: `12px sans-serif`,
        ...position,
      }),
      zIndex: zIndex.symbol,
    });
  }

  return new Style();
}
