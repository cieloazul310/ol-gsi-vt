import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Circle from 'ol/style/Circle';
import type { FeatureLike } from 'ol/Feature';
import { dspPosToPosition, palette } from '@cieloazul310/ol-gsi-vt-style-utils';
import cityStyle from './city';
import elevationStyle from './elevation';
import transpStyle from './transp';
import labelOrder from './labelOrder';

import type { AnnoFeatureProperties } from './types';

export default function labelStyle(feature: FeatureLike, resolution: number) {
  const { vt_code, vt_text, vt_dsppos, vt_arrng, vt_arrngagl } =
    feature.getProperties() as AnnoFeatureProperties;

  if ([1301, 1302, 1303, 1401, 1402, 1403].includes(vt_code))
    return cityStyle({ vt_code, vt_dsppos, vt_text }, resolution);

  if ([7101, 7102, 7103, 7201, 7221, 7701, 7711].includes(vt_code))
    return elevationStyle({ vt_code, vt_text, vt_dsppos });

  if ([2901, 2903, 2904, 2941, 2942, 2943, 2944, 2945].includes(vt_code))
    return new Style();
  // return transpStyle({ vt_code, vt_text });

  const position = dspPosToPosition(vt_dsppos);
  const color = [110, 120, 130, 140, 210, 220].includes(vt_code)
    ? palette.label.text.main
    : [321, 322, 323, 344, 345, 347, 348, 521].includes(vt_code)
    ? palette.label.water
    : [311, 312, 314, 315, 316, 331, 332, 333].includes(vt_code)
    ? palette.label.mountain
    : [411, 412, 421, 422].includes(vt_code)
    ? palette.label.transp
    : palette.label.text.light;
  const fontSize = [110, 140, 333].includes(vt_code)
    ? 18
    : [344, 345, 411, 421].includes(vt_code)
    ? 14
    : 12;
  const stroke = [110, 120, 140, 333, 411, 421, 422].includes(vt_code)
    ? new Stroke({ color: '#fff', width: 4 })
    : undefined;

  return new Style({
    text: new Text({
      text: vt_text ?? '',
      fill: new Fill({ color }),
      font: `${fontSize}px sans-serif`,
      stroke,
      ...position,
    }),
    zIndex: labelOrder(vt_code),
  });
}
