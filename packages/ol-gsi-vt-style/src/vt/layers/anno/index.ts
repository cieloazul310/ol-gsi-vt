import Style from 'ol/style/Style';
import type { FeatureLike } from 'ol/Feature';
import {
  dspPosToPosition,
  zoomToResolution,
  annoCodeWater,
  annoCodeMountain,
  annoCodeSchool,
  type Theme,
  type GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import labelOrder from './labelOrder';
import mountainLabelStyle from './mountain';
import waterLabelStyle from './water';
import schoolLabelStyle from './school';
import { AnnoLayer, AnnoFeatureProperties } from './types';

export default function annoStyle(
  feature: FeatureLike,
  resolution: number,
  theme: Theme,
  layer: AnnoLayer
) {
  if (layer === 'symbol' && resolution < zoomToResolution(17))
    return new Style();

  const { ftCode, annoCtg } =
    feature.getProperties() as GsiVTFeatureProperties<{ annoCtg?: number }>;
  const code = annoCtg ?? ftCode;

  if (annoCodeWater.includes(code))
    return waterLabelStyle(feature, resolution, theme);
  if (annoCodeMountain.includes(code))
    return mountainLabelStyle(feature, resolution, theme);
  if (annoCodeSchool.includes(code))
    return schoolLabelStyle(feature, resolution, theme);

  return new Style();
}
