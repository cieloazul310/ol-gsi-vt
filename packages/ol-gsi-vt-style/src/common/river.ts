import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme, RiverCode } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function riverCommonStyle(
  { code }: { code: RiverCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const lineDash = [5302, 5322].includes(code) ? [4, 2] : undefined;
  const width = [55301, 55302].includes(code) ? 2 : 1;

  return new Style({
    stroke: new Stroke({
      color: palette.waterarea,
      width,
      lineDash,
    }),
    zIndex: zIndex.waterarea,
  });
}
