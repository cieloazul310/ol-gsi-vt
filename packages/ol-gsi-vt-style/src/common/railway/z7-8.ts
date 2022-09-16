import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';
import type { RailCLCommonProperties } from './utils';

export default function lessThan9(
  { code }: Pick<RailCLCommonProperties, 'code'>,
  resolution: number,
  { palette, zIndex }: Theme
) {
  if (resolution > zoomToResolution(8)) return new Style();
  const isShinkansen = code === 58203 || code === 58204;
  const width = !isShinkansen ? 1 : 2;
  const color = !isShinkansen ? palette.rail.jr : palette.rail.shinkansen;
  const zIdx = zIndex.railway + (!isShinkansen ? 0 : 1);
  return new Style({
    stroke: new Stroke({
      width,
      color,
    }),
    zIndex: zIdx,
  });
}
