import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

export function searouteStyle() {
  return new Style({
    stroke: new Stroke({ color: '#bbbbd7', lineDash: [4, 4] }),
  });
}
