import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

export default function coastlineStyle() {
  return new Style({
    stroke: new Stroke({
      color: '#bbbbd7',
    }),
  });
}
