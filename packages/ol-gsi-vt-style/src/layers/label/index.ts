import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  isNumber,
  isString,
  dspPosToPosition,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import labelOrder from './labelOrder';

export default function labelStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex, ...theme }: Theme
) {
  const { ftCode, knj, dspPos, annoCtg, arrng, arrngAgl } =
    feature.getProperties();
  if (!isNumber(ftCode)) throw new Error();
  if (!isNumber(annoCtg)) throw new Error();
  if (!isString(knj)) throw new Error();
  // console.log(arrng, arrngAgl);

  if (annoCtg > 799) {
    /*
    return new Style({
      image: new Circle({ radius: 4, fill: new Fill({ color: '#f00' }) }),
    });
    */
    return new Style();
  }

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
    ? theme.fontSize.lg
    : [344, 345, 411, 421].includes(annoCtg)
    ? theme.fontSize.md
    : theme.fontSize.sm;
  const stroke = [110, 120, 140, 333, 411, 421, 422].includes(annoCtg)
    ? new Stroke({ color: palette.contrast, width: 4 })
    : undefined;

  return new Style({
    text: new Text({
      text: knj,
      fill: new Fill({ color }),
      font: `${fontSize}px sans-serif`,
      stroke,
      ...position,
    }),
    zIndex: labelOrder(annoCtg, { palette, zIndex, fontSize: theme.fontSize }),
  });
}
