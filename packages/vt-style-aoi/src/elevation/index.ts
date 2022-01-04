import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import { FeatureLike } from 'ol/Feature';

export function elevationStyle(feature: FeatureLike) {
  const { alti } = feature.getProperties();

  return [
    new Style({
      image: new Circle({
        radius: 1,
        fill: new Fill({
          color: '#333',
        }),
      }),
    }),
    new Style({
      text: new Text({
        text: (alti as number).toString(),
        fill: new Fill({
          color: '#333',
        }),
        offsetY: 6,
        font: '8px  sans-serif',
      }),
    }),
  ];
}
