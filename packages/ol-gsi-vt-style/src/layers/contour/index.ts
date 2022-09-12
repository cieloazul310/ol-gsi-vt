import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function contourStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { ftCode, altiFlag } = feature.getProperties();

  const isDepth = [7371, 7372, 7373].includes(ftCode as number);
  const color = isDepth
    ? palette.isbt
    : resolution > 19.11
    ? palette.contour.main
    : palette.contour.light;
  const width = resolution > 38.22 || altiFlag ? 1 : 2;

  return new Style({
    stroke: new Stroke({
      color,
      width,
    }),
    zIndex: zIndex.contour,
  });
}
