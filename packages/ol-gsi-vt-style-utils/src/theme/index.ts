import { defaultTheme } from '..';
import { default as defaultFontSize, type FontSize } from './fontSize';
import {
  default as defaultPalette,
  mergeDefaultPalette,
  type Palette,
  type PaletteOptions,
} from './palette';
import { default as defaultZIndex, type ZIndex } from './zIndex';

export {
  defaultFontSize,
  defaultPalette,
  defaultZIndex,
  mergeDefaultPalette,
  type FontSize,
  type Palette,
  type ZIndex,
  type PaletteOptions,
};

export type Theme = {
  palette: Palette;
  zIndex: ZIndex;
  fontSize: FontSize;
};

const theme: Theme = {
  fontSize: defaultFontSize,
  palette: defaultPalette,
  zIndex: defaultZIndex,
};

export default theme;

export type ThemeOptions = {
  fontSize?: Partial<FontSize>;
  palette?: PaletteOptions;
  zIndex?: Partial<ZIndex>;
};

export function mergeDefaultTheme(options?: ThemeOptions): Theme {
  if (!options) return defaultTheme;

  const palette = mergeDefaultPalette(options?.palette);
  const zIndex = Object.assign({}, defaultZIndex, options?.zIndex);
  const fontSize = Object.assign({}, defaultFontSize, options?.fontSize);

  return {
    palette,
    zIndex,
    fontSize,
  };
}
