import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function boundaryStyle() {
  return new Style({
    stroke: new Stroke({
      width: 1,
      color: palette.boundary.light,
    }),
    zIndex: zIndex.boundary,
  });
}
