import type { RecursivePartial } from "./types";

export type FontSizes = {
  /** default to '10px' */
  xs: string;
  /** default to '12px' */
  sm: string;
  /** default to '14px' */
  md: string;
  /** default to '18px' */
  lg: string;
  /** default to '24px' */
  xl: string;
};

function parseFontSize(
  fontSize: string | number | undefined,
  fontSizes: FontSizes,
) {
  if (!fontSize) return fontSizes.md;
  if (
    fontSize === "xs" ||
    fontSize === "sm" ||
    fontSize === "md" ||
    fontSize === "lg" ||
    fontSize === "xl"
  )
    return fontSizes[fontSize];
  if (typeof fontSize === "number" && fontSize < 0) return fontSizes.md;
  if (typeof fontSize === "number") return `${fontSize}px`;
  return fontSize;
}

export type Typography = {
  fontFamily: string;
  fontSize: FontSizes;
  /** Canvas フォント設定を生成
   * https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/font
   */
  toString: (
    fontSize?: keyof Typography["fontSize"] | string | number,
    option?: {
      italic?: boolean;
      bold?: boolean;
      fontFamily?: string;
      fontWeight?: string | number | number;
    },
  ) => string;
};

/** @deprecated */
export const defaultTypography: Typography = {
  fontFamily: ["system-ui", "-apple-system", "sans-serif"].join(", "),
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "18px",
    xl: "24px",
  },
  toString(fontSize, option) {
    const size = parseFontSize(fontSize, this.fontSize);
    return [
      option?.italic ? "italic" : null,
      option?.fontWeight ?? (option?.bold ? "bold" : null),
      size,
      option?.fontFamily
        ? [option?.fontFamily, this.fontFamily].join(", ")
        : this.fontFamily,
    ]
      .filter((value) => value !== null)
      .join(" ");
  },
};

export function useDefaultTypography(): Typography {
  return {
    fontFamily: ["system-ui", "-apple-system", "sans-serif"].join(", "),
    fontSize: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "18px",
      xl: "24px",
    },
    toString(fontSize, option) {
      const size = parseFontSize(fontSize, this.fontSize);
      return [
        option?.italic ? "italic" : null,
        option?.fontWeight ?? (option?.bold ? "bold" : null),
        size,
        option?.fontFamily
          ? [option?.fontFamily, this.fontFamily].join(", ")
          : this.fontFamily,
      ]
        .filter((value) => value !== null)
        .join(" ");
    },
  };
}

export type TypographyOptions = RecursivePartial<Omit<Typography, "toString">>;

export function mergeDefaultTypogrphy(
  typography?: TypographyOptions,
  typographyTheme?: Typography,
): Typography {
  const initialTypography = typographyTheme ?? useDefaultTypography();
  if (!typography) return initialTypography;
  const { fontFamily, fontSize } = typography;

  return {
    fontFamily: fontFamily ?? initialTypography.fontFamily,
    fontSize: fontSize
      ? {
          ...initialTypography.fontSize,
          ...fontSize,
        }
      : initialTypography.fontSize,
    toString: initialTypography.toString,
  };
}
