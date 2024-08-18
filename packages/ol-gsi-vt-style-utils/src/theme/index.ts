import {
  useDefaultPalette,
  defaultPalette,
  mergeDefaultPalette,
  usePalePalette,
  palePalette,
  definePalette,
  type Palette,
  type PaletteOptions,
} from "./palette";
import {
  useDefaultTypography,
  defaultTypography,
  mergeDefaultTypogrphy,
  defineTypography,
  type Typography,
  type TypographyOptions,
} from "./typography";
import {
  useDefaultZIndex,
  defineZIndex,
  defaultZIndex,
  type ZIndex,
} from "./zIndex";

export {
  useDefaultPalette,
  definePalette,
  defaultPalette,
  useDefaultTypography,
  defineTypography,
  defaultTypography,
  useDefaultZIndex,
  defineZIndex,
  defaultZIndex,
  usePalePalette,
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

/** @deprecated */
export const defaultTheme: Theme = {
  palette: useDefaultPalette(),
  typography: useDefaultTypography(),
  zIndex: useDefaultZIndex(),
};

export function useDefaultTheme(): Theme {
  return {
    palette: useDefaultPalette(),
    typography: useDefaultTypography(),
    zIndex: useDefaultZIndex(),
  };
}

export type ThemeOptions = {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  zIndex?: Partial<ZIndex>;
};

/* helper for defining theme */
export function defineTheme(
  theme: Partial<ThemeOptions>,
): Partial<ThemeOptions> {
  return theme;
}

export function mergeDefaultTheme(theme?: Theme) {
  const initialTheme = theme ?? useDefaultTheme();
  return (options?: ThemeOptions): Theme => {
    if (!options) return initialTheme;

    const palette = mergeDefaultPalette(options?.palette, initialTheme.palette);
    const typography = mergeDefaultTypogrphy(
      options?.typography,
      initialTheme.typography,
    );
    const zIndex = Object.assign(initialTheme.zIndex, options?.zIndex);

    return {
      palette,
      typography,
      zIndex,
    };
  };
}
