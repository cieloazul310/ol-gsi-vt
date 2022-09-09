import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { palette, zIndex } from '@cieloazul310/ol-gsi-vt-style-utils';
import { OptVTFeatureProperties } from '../../types';

export default function railwayStyle(feature: FeatureLike) {
  const { vt_code } = feature.getProperties() as OptVTFeatureProperties<
    Record<string, unknown>,
    | 2801
    | 2802
    | 2803
    | 2804
    | 2806
    | 2811
    | 2812
    | 2813
    | 2814
    | 2816
    | 2821
    | 2822
    | 2824
    | 2826
    | 2831
    | 2832
    | 2833
    | 2834
    | 2836
    | 2841
    | 2842
    | 2843
    | 2844
    | 2846
  >;

  if ([2804, 2814, 2824, 2834, 2844].includes(vt_code)) return new Style();

  return new Style({
    stroke: new Stroke({
      width: 1,
      color: '#333',
    }),
    zIndex: zIndex.railway,
  });
}
