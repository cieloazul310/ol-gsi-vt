import type { FeatureLike } from 'ol/Feature';
import {
  isRdEdg,
  isRdCompt,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import {
  rdEdgComptStyle,
  rdCLCommonStyle,
  type GsiVtRdCLFeatureProperties,
} from '../../../common';

export default function roadStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { rnkWidth, rdCtg, ftCode, lvOrder, Width } =
    feature.getProperties() as GsiVtRdCLFeatureProperties;

  if (isRdEdg(ftCode) || isRdCompt(ftCode))
    return rdEdgComptStyle({ code: ftCode }, resolution, theme);
  const r_width = Width ? Width * 100 : undefined;
  return rdCLCommonStyle(
    { code: ftCode, rnkWidth, rdCtg, lvOrder, r_width },
    resolution,
    theme
  );
}
