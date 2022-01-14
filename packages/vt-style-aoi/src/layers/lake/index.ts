import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

import { zIndex, palette } from '../../utils';

export default function lakeStyle() {
  return new Style({
    stroke: new Stroke({
      color: palette.waterarea,
      width: 1,
    }),
    zIndex: zIndex.lake,
  });
}
