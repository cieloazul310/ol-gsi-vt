import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';

import { zIndex } from '../../utils';

export default function waterareaStyle() {
  return new Style({
    fill: new Fill({
      color: '#cdf',
    }),
    zIndex: zIndex.waterarea,
  });
}
