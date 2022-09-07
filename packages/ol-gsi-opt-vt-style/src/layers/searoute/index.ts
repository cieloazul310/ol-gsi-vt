import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex, palette } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function searouteStyle() {
  return new Style({
    stroke: new Stroke({ color: palette.searoute, lineDash: [4, 4] }),
    zIndex: zIndex.searoute,
  });
}
