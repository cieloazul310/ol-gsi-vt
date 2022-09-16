import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import RegularShape from 'ol/style/RegularShape';
import { zoomToResolution } from '@cieloazul310/ol-gsi-vt-style-utils';
/*
export default function icon(
  { text, code }: { text?: string; code: number },
  resolution: number
) {
  const isText = !!text;
  if (!text && resolution < zoomToResolution(17)) return new Style();

  const radius = 4;
  return [
    new Style({
      text: new Text({
        text: [text, code.toString()].join('\n') ?? code.toString(),
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
        fill: new Fill({ color: isText ? '#666' : '#6af' }),
        stroke: new Stroke({ color: isText ? '#333' : '#36c', width: 1 }),
        declutterMode: 'obstacle',
      }),
    }),
  ];
}
*/
export default function icon(
  { text, code }: { text?: string; code: number },
  resolution: number
) {
  const isText = !!text;
  if (!text && resolution < zoomToResolution(17)) return new Style();

  const radius = 12;
  return [
    new Style({
      text: new Text({
        // text: [text, code.toString()].join('\n') ?? code.toString(),
        // text: text ?? code.toString(),
        text: text ?? '社',
        font: `14px sans-serif`,
        fill: new Fill({ color: isText ? '#666' : '#fff' }),
        stroke: isText ? new Stroke({ color: '#fff', width: 3 }) : undefined,
        offsetY: isText ? -(radius / Math.SQRT2 + 2) : undefined,
        textBaseline: isText ? 'bottom' : 'middle',
      }),
      zIndex: 1200,
    }),
    new Style({
      image: new RegularShape({
        points: 4,
        radius,
        rotation: Math.PI / 4,
        fill: new Fill({ color: isText ? '#666' : '#6af' }),
        stroke: new Stroke({ color: isText ? '#333' : '#6af', width: 2 }),
        declutterMode: 'obstacle',
      }),
    }),
  ];
}
