import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function riverStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { ftCode } = feature.getProperties();

  return new Style({
    stroke: new Stroke({
      color: palette.waterarea,
      width: 1,
      lineDash: ftCode === 5322 ? [4, 4] : undefined,
    }),
    zIndex: zIndex.river,
  });
}
