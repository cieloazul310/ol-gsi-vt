import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import {
  zoomToResolution,
  type Theme,
  type BuildingCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';

export default function buildingCommonStyle(
  { code, lvOrder }: { code: BuildingCode; lvOrder?: number },
  resolution: number,
  { palette, zIndex }: Theme
) {
  if (resolution > zoomToResolution(15)) return new Style();
  const stroke =
    code === 3111
      ? undefined
      : new Stroke({
          color: palette.building.stroke,
          width: 1,
        });

  return new Style({
    fill: new Fill({
      color: palette.building.fill,
    }),
    stroke,
    zIndex: zIndex.building + (lvOrder ?? 0) * 10,
  });
}
