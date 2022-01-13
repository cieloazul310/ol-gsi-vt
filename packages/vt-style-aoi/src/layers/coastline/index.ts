import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { zIndex } from '../../utils';

export default function coastlineStyle() {
  return new Style({
    stroke: new Stroke({
      color: '#446',
    }),
    zIndex: zIndex.coastline,
  });
}
