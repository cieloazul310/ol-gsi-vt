import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

export default function lakeStyle() {
  return new Style({
    stroke: new Stroke({
      color: '#abd',
      width: 1,
    }),
    zIndex: 1,
  });
}
