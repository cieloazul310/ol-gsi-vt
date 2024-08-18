import deepmerge from "deepmerge";
import { useDefaultPalette, defaultPalette } from "./defaultPalette";
import { usePalePalette, palePalette } from "./pale";
import type { Palette, PaletteOptions } from "./types";

export {
  useDefaultPalette,
  usePalePalette,
  defaultPalette,
  palePalette,
  type Palette,
  type PaletteOptions,
};

/**
 * helper for defining palette
 */
export function definePalette(palette: PaletteOptions): PaletteOptions {
  return palette;
}

export function mergeDefaultPalette(
  palette?: PaletteOptions,
  paletteTheme?: Palette,
): Palette {
  const initialPalette = paletteTheme ?? useDefaultPalette();
  if (!palette) return initialPalette;

  return deepmerge(initialPalette, palette) as Palette;
}
