import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme, TpgphLineCode } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function tpgphLineCommonStyle(
  { code }: { code: TpgphLineCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  return new Style({
    stroke: new Stroke({
      color: palette.contour.main,
      width: 2,
    }),
    zIndex: zIndex.tpgphArea,
  });
}
