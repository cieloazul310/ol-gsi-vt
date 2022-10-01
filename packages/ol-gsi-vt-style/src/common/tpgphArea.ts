import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import type {
  Theme,
  Palette,
  TpgphAreaCode,
} from '@cieloazul310/ol-gsi-vt-style-utils';

function tpgphAreaColor(code: TpgphAreaCode, palette: Palette) {
  if (code === 7401) return palette.tpgphArea.wetland;
  if (code === 7403) return palette.tpgphArea.sand;
  return palette.tpgphArea.firn;
}

export default function tpgphAreaCommonStyle(
  { code }: { code: TpgphAreaCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const color = tpgphAreaColor(code, palette);

  return new Style({
    fill: new Fill({
      color,
    }),
    zIndex: zIndex.tpgphArea,
  });
}
