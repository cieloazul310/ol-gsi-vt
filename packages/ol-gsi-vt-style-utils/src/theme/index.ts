import {
  default as defaultPalette,
  mergeDefaultPalette,
  type Palette,
  type PaletteOptions,
} from './palette';
import {
  default as defaultTypography,
  mergeDefaultTypogrphy,
  type Typography,
  type TypographyOptions,
} from './typography';
import { default as defaultZIndex, type ZIndex } from './zIndex';

export {
  defaultPalette,
  defaultTypography,
  defaultZIndex,
  mergeDefaultPalette,
  mergeDefaultTypogrphy,
  type Palette,
  type Typography,
  type ZIndex,
  type PaletteOptions,
  type TypographyOptions,
};

export type Theme = {
  palette: Palette;
  typography: Typography;
  zIndex: ZIndex;
};

const defaultTheme: Theme = {
  palette: defaultPalette,
  typography: defaultTypography,
  zIndex: defaultZIndex,
};

export default defaultTheme;

export type ThemeOptions = {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  zIndex?: Partial<ZIndex>;
};

export function mergeDefaultTheme(options?: ThemeOptions): Theme {
  if (!options) return defaultTheme;

  const palette = mergeDefaultPalette(options?.palette);
  const typography = mergeDefaultTypogrphy(options?.typography);
  const zIndex = Object.assign({}, defaultZIndex, options?.zIndex);

  return {
    palette,
    typography,
    zIndex,
  };
}
