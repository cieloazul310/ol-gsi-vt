import type { RecursivePartial } from './types';

export type Typography = {
  fontFamily: string;
  fontSize: {
    /** default to '0.6em' */
    xs: string;
    /** default to '0.8em' */
    sm: string;
    /** default to '1em' */
    md: string;
    /** default to '1.2em' */
    lg: string;
    /** default to '1.8em' */
    xl: string;
  };
  toString: (
    fontSize?: keyof Typography['fontSize'],
    option?: { italic?: boolean; bold?: boolean; fontFamily?: string }
  ) => string;
};

const defaultTypography: Typography = {
  fontFamily: ['system-ui', '-apple-system', 'sans-serif'].join(', '),
  fontSize: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '20px',
  },
  toString(fontSize, option) {
    return [
      option?.italic ? 'italic' : null,
      option?.bold ? 'bold' : null,
      this.fontSize[fontSize ?? 'md'],
      option?.fontFamily
        ? [option?.fontFamily, this.fontFamily].join(', ')
        : this.fontFamily,
    ]
      .filter((value) => value !== null)
      .join(' ');
  },
};

export default defaultTypography;

export type TypographyOptions = RecursivePartial<Omit<Typography, 'toString'>>;

export function mergeDefaultTypogrphy(
  typography?: TypographyOptions
): Typography {
  if (!typography) return defaultTypography;
  const { fontFamily, fontSize } = typography;

  return {
    fontFamily: fontFamily ?? defaultTypography.fontFamily,
    fontSize: fontSize
      ? {
          ...defaultTypography.fontSize,
          ...fontSize,
        }
      : defaultTypography.fontSize,
    toString: defaultTypography.toString,
  };
}
