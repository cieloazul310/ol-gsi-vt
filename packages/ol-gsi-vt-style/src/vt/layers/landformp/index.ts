import Style from 'ol/style/Style';
import type { FeatureLike } from 'ol/Feature';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function landformpStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme
) {
  return new Style();
}
