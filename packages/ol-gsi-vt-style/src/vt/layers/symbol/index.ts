import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';

export default function symbolStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, knj, name, dspPos, arrng } =
    feature.getProperties() as GsiVTFeatureProperties<{
      knj?: string;
      name?: string;
      dspPos?: string;
      arrng?: 1 | 2;
    }>;
  return annoCommonStyle(
    { code: ftCode, text: knj ?? name, dspPos, arrng },
    resolution,
    theme
  );
  /*
  if (resolution < zoomToResolution(17)) return new Style();
  if (annoCodeSchool.includes(ftCode))
    return schoolStyle(feature, resolution, theme);

  const { palette, zIndex } = theme;

  if ([51301, 51302, 51303].includes(ftCode)) {
    if (resolution > 2445.98 && ftCode !== 51301) return new Style();
    if (resolution > 1222.99 && ![51301, 51302].includes(ftCode))
      return new Style();

    const zIndex = ftCode === 51301 ? 1002 : ftCode === 51302 ? 1001 : 1000;
    const radius = ftCode === 51301 ? 4 : ftCode === 51302 ? 3 : 2;
    const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(
      dspPos,
      arrng,
      radius
    );
    return [
      new Style({
        text: new Text({
          text: knj as string,
          fill: new Fill({ color: palette.anno.text.main }),
          stroke: new Stroke({ width: 2, color: palette.contrast }),
          font: `bold ${radius + 10}px sans-serif`,
          textAlign,
          textBaseline,
          offsetX,
          offsetY,
        }),
        zIndex: zIndex + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: palette.contrast }),
          stroke: new Stroke({ width: 1, color: palette.anno.text.main }),
        }),
        zIndex,
      }),
    ];
  }

  if ([1401, 1402, 1403].includes(ftCode)) {
    const zIndex = ftCode === 1401 ? 1002 : ftCode === 1402 ? 1001 : 1000;
    const radius = ftCode === 1401 ? 4 : ftCode === 1402 ? 3 : 2;
    const { textAlign, textBaseline, offsetX, offsetY } = dspPosToPosition(
      dspPos,
      arrng,
      radius
    );

    return [
      new Style({
        text: new Text({
          text: name as string,
          fill: new Fill({ color: palette.anno.text.light }),
          stroke: new Stroke({ width: 2, color: palette.contrast }),
          font: `${radius + 10}px sans-serif`,
          textAlign,
          textBaseline,
          offsetX,
          offsetY,
        }),
        zIndex: zIndex + 10,
      }),
      new Style({
        image: new Circle({
          radius,
          fill: new Fill({ color: palette.contrast }),
          stroke: new Stroke({ width: 1, color: palette.anno.text.main }),
        }),
        zIndex,
      }),
    ];
  }

  return new Style();
  */
}
