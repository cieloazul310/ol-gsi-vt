import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function waterlineCommonStyle(
  { code }: { code: 5101 | 5102 | 5103 | 55101 },
  resolution: number,
  { palette, zIndex }: Theme
) {
  return new Style({
    stroke: new Stroke({
      color: palette.coastline,
    }),
    zIndex: zIndex.coastline,
  });
}
