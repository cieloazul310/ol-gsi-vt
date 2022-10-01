import {
  defaultPalette,
  mergeDefaultPalette,
  palePalette,
  type Palette,
  type PaletteOptions,
} from './palette';
import defaultTypography, {
  mergeDefaultTypogrphy,
  type Typography,
  type TypographyOptions,
} from './typography';
import defaultZIndex, { type ZIndex } from './zIndex';

export {
  defaultPalette,
  defaultTypography,
  defaultZIndex,
  palePalette,
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

export function mergeDefaultTheme(theme?: Theme) {
  const initialTheme = theme ?? defaultTheme;
  return (options?: ThemeOptions): Theme => {
    if (!options) return initialTheme;

    const palette = mergeDefaultPalette(options?.palette, initialTheme.palette);
    const typography = mergeDefaultTypogrphy(
      options?.typography,
      initialTheme.typography
    );
    const zIndex = Object.assign(initialTheme.zIndex, options?.zIndex);

    return {
      palette,
      typography,
      zIndex,
    };
  };
}
