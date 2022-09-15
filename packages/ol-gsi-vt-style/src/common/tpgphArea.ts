import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import type { Theme, TpgphAreaCode } from '@cieloazul310/ol-gsi-vt-style-utils';

export default function tpgphAreaCommonStyle(
  { code }: { code: TpgphAreaCode },
  resolution: number,
  { palette, zIndex }: Theme
) {
  const color =
    code === 7401
      ? palette.tpgphArea.wetland
      : code === 7403
      ? palette.tpgphArea.sand
      : palette.tpgphArea.firn;

  return new Style({
    fill: new Fill({
      color,
    }),
    zIndex: zIndex.tpgphArea,
  });
}
