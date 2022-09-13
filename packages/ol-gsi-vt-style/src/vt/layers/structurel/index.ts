import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { FeatureLike } from 'ol/Feature';
import type {
  Theme,
  GsiVTFeatureProperties,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function structurelStyle(
  feature: FeatureLike,
  resolution: number,
  { palette, zIndex }: Theme
) {
  const { ftCode } = feature.getProperties() as GsiVTFeatureProperties<
    Record<string, unknown>,
    5501 | 5511 | 5514 | 5515 | 5532 | 5551 | 8202
  >;
  const width = ftCode === 8202 ? 1 : 4;

  return new Style({
    stroke: new Stroke({
      color: palette.structure,
      width,
      lineCap: 'square',
    }),
    zIndex: ftCode === 8202 ? zIndex.pwrTrnsmL : zIndex.building,
  });
}
