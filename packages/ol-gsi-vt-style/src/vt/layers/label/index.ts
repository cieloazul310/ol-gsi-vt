import type { FeatureLike } from 'ol/Feature';
import { type Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import { annoCommonStyle } from '../../../common';
import type { LabelFeatureProperties } from './types';

export default function labelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { knj, dspPos, annoCtg, arrng, arrngAgl } =
    feature.getProperties() as LabelFeatureProperties;
  return annoCommonStyle(
    { code: annoCtg, text: knj, dspPos, arrng },
    resolution,
    theme
  );
  /*
  const { palette, zIndex } = theme;

  if (annoCodeWater.includes(annoCtg))
    return waterLabelStyle(feature, resolution, theme);
  if (annoCodeMountain.includes(annoCtg))
    return mountainLabelStyle(feature, resolution, theme);
  if (annoCodeSchool.includes(annoCtg))
    return schoolLabelStyle(feature, resolution, theme);
  if (!isString(knj)) throw new Error();
  // console.log(arrng, arrngAgl);
  */
  /*
  if (annoCtg > 799) {
    return new Style();
  }
  */
  /*
  const position = dspPosToPosition(dspPos);

  const color = [110, 120, 130, 140, 210, 220].includes(annoCtg)
    ? palette.anno.text.main
    : [321, 322, 323, 344, 345, 347, 348, 521].includes(annoCtg)
    ? palette.anno.water
    : [311, 312, 314, 315, 316, 331, 332, 333].includes(annoCtg)
    ? palette.anno.mountain
    : [411, 412, 421, 422].includes(annoCtg)
    ? palette.anno.transp
    : palette.anno.text.light;
  const fontSize = [110, 140, 333].includes(annoCtg)
    ? 'lg'
    : [344, 345, 411, 421].includes(annoCtg)
    ? 'md'
    : 'sm';
  const stroke = [110, 120, 140, 333, 411, 421, 422].includes(annoCtg)
    ? new Stroke({ color: palette.contrast, width: 4 })
    : undefined;

  return new Style({
    text: new Text({
      text: knj,
      fill: new Fill({ color }),
      font: theme.typography.toString(fontSize),
      stroke,
      ...position,
    }),
    zIndex: labelOrder(annoCtg, theme),
  });
  */
}
