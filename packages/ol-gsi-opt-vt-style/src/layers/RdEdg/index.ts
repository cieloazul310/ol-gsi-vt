import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import { zIndex } from '@cieloazul310/ol-gsi-vt-style-utils';
// import type { OptVTFeatureProperties } from '../../types';

export default function rdEdgStyle(feature: FeatureLike) {
  /*
  const { vt_code, vt_drworder, ...props } =
    feature.getProperties() as OptVTFeatureProperties<{
      vt_drworder: number;
    }>;
  */
  return new Style({
    stroke: new Stroke({
      color: '#ccc',
      width: 2,
    }),
    zIndex: zIndex.road + 60,
  });
}
