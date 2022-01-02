import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';

export function roadStyle() {
  return [
    new Style({
      stroke: new Stroke({
        width: 1,
        color: '#ffd',
      }),
      zIndex: 2,
    }),
    new Style({
      stroke: new Stroke({
        width: 3,
        color: '#770'
      }),
      zIndex: 1,
    }),
  ];
}
