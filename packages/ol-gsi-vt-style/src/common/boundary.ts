import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function boundarCommonStyle(
  { code }: { code: 1211 | 1212 | 1221 | 6101 | 51212 | 51221 },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const width =
    resolution < zoomToResolution(11) && code === 1211
      ? 4
      : code !== 6101
      ? 2
      : 1;
  return new Style({
    stroke: new Stroke({
      width,
      color: code !== 6101 ? palette.boundary.main : palette.boundary.light,
      lineDash: [width * 2, width * 3],
      lineCap: 'square',
    }),
    zIndex: zIndex.boundary,
  });
}
