import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import {
  type Theme,
  type WStructureAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function wstructureAreaCommonStyle(
  { code }: { code: WStructureAreaCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  return new Style({
    fill: new Fill({
      color: palette.structure,
    }),
    zIndex: zIndex.building,
  });
}
