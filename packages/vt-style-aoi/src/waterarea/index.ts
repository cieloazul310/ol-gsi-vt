import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';

export function waterareaStyle() {
  return new Style({
    fill: new Fill({
      color: '#cdf',
    }),
    zIndex: 0,
  });
}
