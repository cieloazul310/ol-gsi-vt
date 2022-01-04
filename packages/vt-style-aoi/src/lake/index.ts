import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

export function lakeStyle() {
  return new Style({
    stroke: new Stroke({
      color: '#abd',
      width: 1,
    }),
  });
}
