import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme, RailTrCLCode } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function railTrCLCommonStyle(
  { code }: { code: RailTrCLCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const lineDash = [
    2802, 2804, 2812, 2814, 2822, 2824, 2832, 2834, 2842, 2844,
  ].includes(code)
    ? [4, 4]
    : undefined;
  const bg = [2803, 2813, 2823, 2833, 2843].includes(code)
    ? new Style({
        stroke: new Stroke({
          width: 5,
          color: palette.contrast,
        }),
        zIndex: zIndex.railwayBg,
      })
    : new Style();

  return [
    new Style({
      stroke: new Stroke({
        width: 1,
        color: palette.rail.shitetsu,
        lineDash,
      }),
      zIndex: zIndex.railway,
    }),
    bg,
  ];
}
