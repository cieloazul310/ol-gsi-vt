import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import {
  annoCodeMountain,
  annoCodeWater,
  annoCodeSchool,
  annoCodeElevation,
  annoCodeTransp,
  dspPosToPosition,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import cityStyle from './city';
import elevationStyle from './elevation';
import schoolStyle from './school';
import govStyle from './gov';
import spotStyle from './spot';
import transpStyle from './transp';
import labelOrder from './labelOrder';

import mountainLabelStyle from './mountain';
import type { AnnoFeatureProperties } from './types';
import waterLabelStyle from './water';

export default function labelStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng, vt_arrngagl } =
    feature.getProperties() as AnnoFeatureProperties;

  if (annoCodeMountain.includes(vt_code))
    return mountainLabelStyle(feature, resolution, theme);
  if (annoCodeWater.includes(vt_code))
    return waterLabelStyle(feature, resolution, theme);
  if (annoCodeElevation.includes(vt_code))
    return elevationStyle(feature, resolution, theme);
  if (annoCodeSchool.includes(vt_code))
    return schoolStyle(feature, resolution, theme);
  if (annoCodeTransp.includes(vt_code))
    return transpStyle(feature, resolution, theme);

  if ([1301, 1302, 1303, 1401, 1402, 1403].includes(vt_code))
    return cityStyle(feature, resolution, theme);

  if (
    [
      611, 612, 621, 880, 881, 882, 883, 884, 888, 1401, 1402, 1403, 3201, 3202,
      3203, 3204, 3205, 3206, 3211, 3241, 3242, 3244,
    ].includes(vt_code)
  )
    return govStyle(feature, resolution, theme);

  if (
    [
      531, 532, 534, 613, 653, 651, 661, 662, 671, 673, 681, 870, 889, 899,
      3216, 3217, 3218, 3221, 3231, 3232, 6341, 6342,
    ].includes(vt_code)
  )
    return spotStyle(feature, resolution, theme);

  /*
  if ([2901, 2903, 2904].includes(vt_code))
    return transpStyle(feature, resolution, theme);
  */

  const position = dspPosToPosition(vt_dsppos, vt_arrng);
  const { palette } = theme;

  const color = [110, 120, 130, 140].includes(vt_code)
    ? palette.anno.text.main
    : [321, 322, 323, 344, 345, 347, 348, 521].includes(vt_code)
    ? palette.anno.water
    : [311, 312, 314, 315, 316, 331, 332, 333].includes(vt_code)
    ? palette.anno.mountain
    : [411, 412, 421, 422, 2941, 2942, 2943, 2944, 2945].includes(vt_code)
    ? palette.anno.transp
    : palette.anno.text.light;
  const fontSize = [110, 140, 333].includes(vt_code)
    ? 'lg'
    : [344, 345, 411, 421].includes(vt_code)
    ? 'md'
    : 'sm';
  const stroke = [
    110, 120, 140, 333, 411, 412, 421, 422, 2941, 2942, 2943, 2944, 2945,
  ].includes(vt_code)
    ? new Stroke({ color: palette.contrast, width: 4 })
    : undefined;

  if (vt_text) {
    return new Style({
      text: new Text({
        text: vt_text,
        // text: [vt_text, vt_code.toString()].join('\n'),
        fill: new Fill({ color }),
        font: theme.typography.toString(fontSize),
        stroke,
        ...position,
      }),
      zIndex: labelOrder(vt_code, theme),
    });
  }
  return new Style();
}
