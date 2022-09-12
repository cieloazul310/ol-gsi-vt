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

export default function govStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { vt_code, vt_dsppos, vt_text, vt_arrng } =
    feature.getProperties() as AnnoFeatureProperties<
      | 531
      | 532
      | 534
      | 661
      | 662
      | 671
      | 673
      | 681
      | 870
      | 889
      | 899
      | 3216
      | 3231
      | 3232
      | 6341
      | 6342
    >;

  if (vt_text) {
    const radius = 3;
    const position = dspPosToPosition(
      { vt_dsppos: vt_dsppos ?? 'LC', vt_arrng },
      radius
    );

    return [
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: palette.anno.text.main }),
          declutterMode: 'obstacle',
        }),
        zIndex: zIndex.symbol,
      }),
      new Style({
        text: new Text({
          text: vt_text,
          font: `12px sans-serif`,
          fill: new Fill({ color: palette.anno.text.main }),
          stroke: new Stroke({ color: palette.contrast, width: 2 }),
          ...position,
        }),
        zIndex: zIndex.symbol + 2,
      }),
    ];
  }

  return new Style();
}
