import type { FeatureLike } from 'ol/Feature';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import lessThan8 from './z7-8';
import lessThan12 from './z9-11';
import over12 from './z12';

export default function railwayStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  if (resolution > zoomToResolution(9))
    return lessThan8(feature, resolution, theme);
  if (resolution > zoomToResolution(12))
    return lessThan12(feature, resolution, theme);
  if (resolution <= zoomToResolution(12))
    return over12(feature, resolution, theme);
}
