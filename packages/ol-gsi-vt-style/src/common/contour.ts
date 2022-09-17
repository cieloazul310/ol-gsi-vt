import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import {
  zoomToResolution,
  type Theme,
  type ContourCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function contourStyle(
  {
    code,
    alti,
    altiDepth,
  }: {
    code: ContourCode;
    alti?: number;
    altiDepth?: number;
  },
  resolution: number,
  { palette, zIndex, typography }: Theme
) {
  if ([7351, 7353].includes(code)) {
    const color =
      resolution > zoomToResolution(13)
        ? palette.contour.main
        : palette.contour.light;
    const width =
      resolution > zoomToResolution(12) || (alti && alti % 50 !== 0) ? 1 : 2;

    return new Style({
      stroke: new Stroke({
        color,
        width,
      }),
      zIndex: zIndex.contour,
    });
  }
  if ([7371, 7373].includes(code)) {
    const width =
      resolution > zoomToResolution(12) || (altiDepth && altiDepth % 5 !== 0)
        ? 1
        : 2;

    return new Style({
      stroke: new Stroke({
        color: palette.isbt,
        width,
      }),
      zIndex: zIndex.contour,
    });
  }
  if ([7352, 7372].includes(code)) {
    const isIsbt = code === 7372;
    const text = isIsbt ? altiDepth?.toString() : alti?.toString();
    const color = isIsbt ? palette.anno.water : palette.anno.text.light;
    if (text) {
      return new Style({
        text: new Text({
          text,
          fill: new Fill({ color }),
          placement: 'line',
          font: typography.toString('xs', { fontFamily: 'Helvetica' }),
        }),
        zIndex: zIndex.contour + 1,
      });
    }
  }
  return new Style();
}
