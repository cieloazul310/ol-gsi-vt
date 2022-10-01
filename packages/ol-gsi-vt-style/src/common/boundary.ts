import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  type Theme,
} from '@cieloazul310/ol-gsi-vt-style-utils';

function boundaryWidth(
  code: 1211 | 1212 | 1221 | 6101 | 51212 | 51221,
  resolution: number
) {
  if (resolution < zoomToResolution(11) && code === 1211) return 4;
  if (code !== 6101) return 2;
  return 1;
}

export default function boundaryCommonStyle(
  { code }: { code: 1211 | 1212 | 1221 | 6101 | 51212 | 51221 },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const width = boundaryWidth(code, resolution);
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
