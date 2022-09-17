import { default as defaultPalette } from './defaultPalette';
import { default as palePalette } from './pale';
import type { Palette, PaletteOptions } from './types';

export { defaultPalette, palePalette, type Palette, type PaletteOptions };

export function mergeDefaultPalette(
  palette?: PaletteOptions,
  paletteTheme?: Palette
): Palette {
  const initialPalette = paletteTheme ?? defaultPalette;
  if (!palette) return initialPalette;
  const anno = {
    ...Object.assign({}, initialPalette.anno, palette.anno),
    text: {
      main: palette.anno?.text?.main ?? initialPalette.anno.text.main,
      light: palette.anno?.text?.light ?? initialPalette.anno.text.light,
    },
  };
  const boundary = {
    ...Object.assign({}, initialPalette.boundary, palette.boundary),
  };
  const building = {
    ...Object.assign({}, initialPalette.building, palette.building),
  };
  const contour = {
    ...Object.assign({}, initialPalette.contour, palette.contour),
  };
  const tpgphArea = {
    ...Object.assign({}, initialPalette.tpgphArea, palette.tpgphArea),
  };
  const road = {
    highway: {
      ...Object.assign({}, initialPalette.road.highway, palette.road?.highway),
    },
    national: {
      ...Object.assign(
        {},
        initialPalette.road.national,
        palette.road?.national
      ),
    },
    pref: {
      ...Object.assign({}, initialPalette.road.pref, palette.road?.pref),
    },
    basic: {
      ...Object.assign({}, initialPalette.road.basic, palette.road?.basic),
    },
    edge: palette.road?.edge ?? initialPalette.road.edge,
  };
  const rail = {
    ...Object.assign({}, initialPalette.rail, palette.rail),
    station: {
      ...Object.assign({}, initialPalette.rail.station, palette.rail?.station),
    },
  };
  const transp = {
    ...Object.assign({}, initialPalette.transp, palette.transp),
  };

  return {
    ...Object.assign({}, initialPalette, palette),
    anno,
    boundary,
    building,
    contour,
    tpgphArea,
    road,
    rail,
    transp,
  };
}
