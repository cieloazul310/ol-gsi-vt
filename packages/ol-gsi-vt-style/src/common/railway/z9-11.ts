import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import type { Theme } from '@cieloazul310/ol-gsi-vt-style-utils';
import type { RailCLCommonProperties } from './utils';

export default function lessThan12(
  { isJR, snglDbl }: Pick<RailCLCommonProperties, 'isJR' | 'snglDbl'>,
  resolution: number,
  { palette, zIndex }: Theme
) {
  if (snglDbl === 0) return new Style();
  const width = snglDbl === 2 ? 2 : 1;
  const color = isJR ? palette.rail.jr : palette.rail.shitetsu;
  const zIdx = zIndex.railway;

  return [
    new Style({
      stroke: new Stroke({
        width,
        color,
      }),
      zIndex: zIdx,
    }),
    new Style({
      stroke: new Stroke({
        width: width + 3,
        color: palette.contrast,
      }),
      zIndex: zIndex.railwayBg,
    }),
  ];
}
