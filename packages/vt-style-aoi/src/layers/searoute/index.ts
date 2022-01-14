import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

import { zIndex, palette } from '../../utils';

export default function searouteStyle() {
  return new Style({
    stroke: new Stroke({ color: palette.searoute, lineDash: [4, 4] }),
    zIndex: zIndex.searoute,
  });
}
