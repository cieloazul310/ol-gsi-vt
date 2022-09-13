import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function transpStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex, fontSize }: Theme
) {
  const { ftCode, nRNo, uRNo, name } =
    feature.getProperties() as GsiVTFeatureProperties<{
      nRNo?: number | string;
      uRNo?: string;
      name?: string;
    }>;

  if (ftCode === 2901 && nRNo) {
    const isMajor = nRNo < 100;
    const size = fontSize.xs - (isMajor ? 1 : 2);

    return [
      new Style({
        text: new Text({
          text: nRNo.toString(),
          fill: new Fill({ color: palette.contrast }),
          font: `${size}px sans-serif`,
          padding: [0, 0, 0, 2],
          backgroundFill: new Fill({ color: palette.transp.national }),
          justify: 'center',
        }),
        zIndex: zIndex.transp - (isMajor ? 0 : 10),
      }),
    ];
  }

  if (ftCode === 2903 || ftCode === 2904) {
    const text = nRNo?.toString() ?? uRNo ?? '';
    return new Style({
      text: new Text({
        text,
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

  if ([2941, 2942, 2943, 2944, 2945].includes(ftCode)) {
    return new Style({
      text: new Text({
        text: name ?? '',
        fill: new Fill({ color: palette.anno.transp }),
        stroke: new Stroke({ color: palette.contrast, width: 4 }),
        font: `${fontSize.sm}px sans-serif`,
      }),
      zIndex: zIndex.transp,
    });
  }

  return new Style();
}
