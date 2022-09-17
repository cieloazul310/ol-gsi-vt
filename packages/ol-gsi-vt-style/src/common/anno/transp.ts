import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  dspPosToPosition,
  type Theme,
  type AnnoCodeTransp,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { LabelCommonProperties } from './types';

export default function transpCommonStyle(
  { code, text, dspPos, arrng }: LabelCommonProperties<AnnoCodeTransp>,
  resolution: number,
  { palette, zIndex, typography }: Theme
) {
  if (code === 2901) {
    const isMajor = parseInt(text ?? '0', 10) < 100;
    const fontSize = isMajor ? 'sm' : 'xs';

    return new Style({
      text: new Text({
        text: text,
        fill: new Fill({ color: palette.contrast }),
        font: typography.toString(fontSize),
        padding: [0, 0, 0, 2],
        backgroundFill: new Fill({ color: palette.transp.national }),
        justify: 'center',
      }),
      zIndex: zIndex.transp - (isMajor ? 0 : 10),
    });
  }
  if (code === 2903 || code === 2904) {
    return new Style({
      text: new Text({
        text: text,
        fill: new Fill({ color: palette.contrast }),
        stroke: new Stroke({ color: palette.transp.highway, width: 1 }),
        font: typography.toString('sm'),
        padding: [0, 0, 0, 2],
        backgroundFill: new Fill({ color: palette.transp.highway }),
        justify: 'center',
      }),
      zIndex: zIndex.transp,
    });
  }
  const over13 = resolution < zoomToResolution(13);
  if (!over13 && [2941, 2942, 2943, 2944, 2945].includes(code)) {
    if (code === 2942) return new Style();
    const position = dspPosToPosition(dspPos, arrng);
    const txt =
      code === 2941
        ? 'IC'
        : code === 2943
        ? 'SA'
        : code === 2944
        ? 'PA'
        : 'SIC';
    return new Style({
      text: new Text({
        text: txt,
        fill: new Fill({ color: palette.contrast }),
        stroke: new Stroke({ color: palette.transp.highway, width: 1 }),
        font: typography.toString('xs'),
        padding: [0, 0, 0, 2],
        backgroundFill: new Fill({ color: palette.transp.highway }),
        ...position,
      }),
      zIndex: zIndex.transp,
    });
  }
  if (text) {
    const position = dspPosToPosition(dspPos, arrng);
    const isName = [411, 421].includes(code);
    const isStation = code === 422;
    const fontSize = isStation && over13 ? 'lg' : 'md';

    return new Style({
      text: new Text({
        text: isStation ? text.slice(0, -1) : text,
        fill: new Fill({
          color: code !== 423 ? palette.anno.transp : palette.anno.text.main,
        }),
        stroke: new Stroke({
          color: palette.contrast,
          width: 4,
        }),
        font: typography.toString(fontSize, {
          bold: isName,
        }),
        ...position,
      }),
      zIndex: zIndex.label + (isName ? 9 : isStation ? 8 : 0),
    });
  }

  return new Style();
}
