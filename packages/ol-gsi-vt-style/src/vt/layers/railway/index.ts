import Style from 'ol/style/Style';
import type { FeatureLike } from 'ol/Feature';
import {
  GsiVTFeatureProperties,
  zoomToResolution,
  type Theme,
  type RailWayCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';
/*
import lessThan8 from './z7-8';
import lessThan12 from './z9-11';
import over12 from './z12';
*/
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
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    RailWayCode
  >;

  if (
    ftCode === 8201 ||
    ftCode === 58201 ||
    ftCode === 58203 ||
    ftCode === 58204
  ) {
    const { snglDbl, railState, rtCode1, rtCode } =
      feature.getProperties() as GsiVtRailwayFeatureProperties;

    const rtCodeLeft5 = rtCode1?.slice(5) ?? rtCode?.slice(5);
    const isJR =
      rtCodeLeft5 === '40202' ||
      rtCodeLeft5 === '40205' ||
      rtCodeLeft5 === '40201' ||
      rtCodeLeft5 === '40216';
    const isChikatetsu = rtCodeLeft5 === '40203';
    // const isJR = ;
    // const isJR = true;
    // const isChikatetsu = false;

    return railCLCommonStyle(
      { code: ftCode, snglDbl, railState, isJR, isChikatetsu },
      resolution,
      theme
    );
  }
  return railTrCLCommonStyle({ code: ftCode }, resolution, theme);

  /*
  if (resolution > zoomToResolution(9)) {
    return lessThan8(feature, resolution, theme);
  }
  if (resolution > zoomToResolution(12)) {
    return lessThan12(feature, resolution, theme);
  }
  if (resolution <= zoomToResolution(12)) {
    return over12(feature, resolution, theme);
  }
  return new Style();
  */
}
