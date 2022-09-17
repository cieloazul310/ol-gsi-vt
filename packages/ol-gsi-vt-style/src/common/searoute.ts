import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme, SeaRouteCode } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function searouteCommonStyle(
  { code }: { code: SeaRouteCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  return new Style({
    stroke: new Stroke({ color: palette.searoute, lineDash: [4, 4] }),
    zIndex: zIndex.searoute,
  });
}
