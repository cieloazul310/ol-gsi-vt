import deepmerge from "deepmerge";
import {
  createDefaultPalette,
  useDefaultPalette,
  defaultPalette,
} from "./defaultPalette";
import { createPalePalette, usePalePalette, palePalette } from "./pale";
import type { Palette, PaletteOptions } from "./types";

export {
  createDefaultPalette,
  createPalePalette,
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
  const initialPalette = paletteTheme ?? createDefaultPalette();
  if (!palette) return initialPalette;

  return deepmerge(initialPalette, palette) as Palette;
}
