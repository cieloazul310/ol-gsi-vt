import type { FeatureLike } from 'ol/Feature';
import { type Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import {
  rdCLCommonStyle,
  parseOptVtRdCtg,
  parseOptVtRnkWidth,
  type GsiOptVtRdCLFeatureProperties,
} from '../../../common';

export default function roadStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_lvorder, vt_rdctg, vt_rnkwidth, vt_width, vt_motorway } =
    feature.getProperties() as GsiOptVtRdCLFeatureProperties;

  return rdCLCommonStyle(
    {
      code: vt_code,
      rnkWidth: parseOptVtRnkWidth(vt_rnkwidth),
      rdCtg: parseOptVtRdCtg(vt_rdctg),
      lvOrder: vt_lvorder,
      r_width: vt_width,
      motorway: vt_motorway,
    },
    resolution,
    theme
  );
}
