import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function boundaryStyle(feature: FeatureLike) {
  const { vt_code } = feature.getProperties();

  return new Style({
    stroke: new Stroke({
      width: vt_code !== 6101 ? 2 : 1,
      color: vt_code !== 6101 ? palette.boundary.main : palette.boundary.light,
      lineDash: vt_code !== 6101 ? [4, 4] : [2, 2],
    }),
    zIndex: zIndex.boundary,
  });
}
