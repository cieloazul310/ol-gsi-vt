import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import RegularShape from 'ol/style/RegularShape';

export default function Icon({ text }: { text: string }) {
  const radius = 4;
  return [
    new Style({
      text: new Text({
        text,
        font: `14px sans-serif`,
        fill: new Fill({ color: '#666' }),
        stroke: new Stroke({ color: '#fff', width: 3 }),
        offsetY: -(radius * (3 / 2) + 2),
        textBaseline: 'bottom',
      }),
      zIndex: 1200,
    }),
    new Style({
      image: new RegularShape({
        points: 3,
        radius,
        rotation: Math.PI,
        displacement: [0, -radius],
        fill: new Fill({ color: '#666' }),
        stroke: new Stroke({ color: '#333', width: 1 }),
        declutterMode: 'obstacle',
      }),
    }),
  ];
}
