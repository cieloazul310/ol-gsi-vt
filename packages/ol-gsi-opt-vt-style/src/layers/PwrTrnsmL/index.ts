import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function PwrTrnsmL(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  return new Style({
    stroke: new Stroke({ color: palette.structure, width: 1 }),
    zIndex: zIndex.pwrTrnsmL,
  });
}
