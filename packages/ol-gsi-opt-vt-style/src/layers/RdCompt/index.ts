import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function rdComptStyle() {
  return new Style({
    stroke: new Stroke({
      color: '#ccc',
      width: 2,
    }),
    zIndex: zIndex.road + 60,
  });
}
