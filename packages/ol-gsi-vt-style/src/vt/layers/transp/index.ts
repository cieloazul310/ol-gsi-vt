import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
  AnnoCodeTransp,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import { transpCommonStyle } from '../../../common';

export default function transpStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  const { ftCode, nRNo, uRNo, name } =
    feature.getProperties() as GsiVTFeatureProperties<
      AnnoCodeTransp,
      {
        nRNo?: number | string;
        uRNo?: string;
        name?: string;
      }
    >;
  const text =
    ftCode === 2901
      ? nRNo?.toString()
      : ftCode === 2903 || ftCode === 2904
      ? nRNo?.toString() ?? uRNo
      : name;

  return transpCommonStyle({ code: ftCode, text }, resolution, theme);
}
