import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function boundaryStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { ftCode } = feature.getProperties();

  return new Style({
    stroke: new Stroke({
      width: ftCode !== 6101 ? 2 : 1,
      color: ftCode !== 6101 ? palette.boundary.main : palette.boundary.light,
      lineDash: ftCode !== 6101 ? [4, 4] : [2, 2],
    }),
    zIndex: zIndex.boundary,
  });
}
