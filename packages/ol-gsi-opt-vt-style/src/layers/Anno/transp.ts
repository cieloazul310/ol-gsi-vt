import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { AnnoFeatureProperties } from './types';
import type { FeatureLike } from 'ol/Feature';

export default function transpStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex, fontSize }: Theme
) {
  const { vt_code, vt_text } = feature.getProperties() as AnnoFeatureProperties<
    2901 | 2903 | 2904
  >;
  if (vt_code === 2901) {
    const isMajor = parseInt(vt_text ?? '0', 10) < 100;
    const size = fontSize.xs - (isMajor ? 1 : 2);

    return new Style({
      text: new Text({
        text: vt_text,
        fill: new Fill({ color: palette.contrast }),
        font: `${size}px sans-serif`,
        padding: [0, 0, 0, 2],
        backgroundFill: new Fill({ color: palette.transp.national }),
        justify: 'center',
      }),
      zIndex: zIndex.transp - (isMajor ? 0 : 10),
    });
  }
  if (vt_code === 2903 || vt_code === 2904) {
    return new Style({
      text: new Text({
        text: vt_text,
        fill: new Fill({ color: palette.contrast }),
        stroke: new Stroke({ color: palette.transp.highway, width: 1 }),
        font: `${fontSize.xs + 1}px sans-serif`,
        padding: [0, 0, 0, 2],
        backgroundFill: new Fill({ color: palette.transp.highway }),
        justify: 'center',
      }),
      zIndex: zIndex.transp,
    });
  }

  return new Style();
}
