import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import {
  railCLCommonStyle,
  parseRailState,
  parseSngDbl,
  type GsiOptVtRailwayFeatureProperties,
} from '../../../common';

export default function railwayStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { vt_code, vt_lvorder, vt_railstate, vt_sngldbl, vt_rtcode } =
    feature.getProperties() as GsiOptVtRailwayFeatureProperties;

  return railCLCommonStyle(
    {
      code: vt_code,
      lvOrder: vt_lvorder,
      snglDbl: parseSngDbl(vt_sngldbl),
      railState: parseRailState(vt_railstate),
      isJR: vt_rtcode === 'JR',
      isChikatetsu: vt_rtcode === '地下鉄',
    },
    resolution,
    theme
  );
}
