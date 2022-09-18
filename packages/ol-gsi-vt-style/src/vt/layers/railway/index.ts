import type { FeatureLike } from 'ol/Feature';
import {
  GsiVTFeatureProperties,
  type Theme,
  type RailWayCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import {
  railCLCommonStyle,
  railTrCLCommonStyle,
  type GsiVtRailwayFeatureProperties,
} from '../../../common';

export default function railwayStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode } =
    feature.getProperties() as GsiVTFeatureProperties<RailWayCode>;

  if (
    ftCode === 8201 ||
    ftCode === 58201 ||
    ftCode === 58203 ||
    ftCode === 58204
  ) {
    const { snglDbl, railState, rtCode1, rtCode, staCode, lvOrder } =
      feature.getProperties() as GsiVtRailwayFeatureProperties;

    const rtCodeLeft5 = rtCode1?.slice(0, 5) ?? rtCode?.slice(0, 5);
    const isJR =
      rtCodeLeft5 === '40202' ||
      rtCodeLeft5 === '40205' ||
      rtCodeLeft5 === '40201' ||
      rtCodeLeft5 === '40216';
    const isChikatetsu = rtCodeLeft5 === '40203';
    const isStation = (staCode && staCode !== '0') || snglDbl === 4;

    return railCLCommonStyle(
      {
        code: ftCode,
        snglDbl,
        railState,
        isJR,
        isChikatetsu,
        isStation,
        lvOrder,
      },
      resolution,
      theme
    );
  }
  return railTrCLCommonStyle({ code: ftCode }, resolution, theme);
}
