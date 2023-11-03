import { defineConfig } from "@pandacss/dev";

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type PandaPalette =
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "neutral"
  | "stone"
  | "zinc"
  | "gray"
  | "slate";

export type SarkaraPaletteOptions = {
  primary: PandaPalette;
  secondary: PandaPalette;
} & Record<string, PandaPalette>;

export function definePalette(props: SarkaraPaletteOptions) {
  return Object.entries(props).reduce<{
    [key: string]: {
      [key: string]: { value: string };
    };
  }>(
    (accum, [key, color]) => ({
      ...accum,
      [key]: shades.reduce<{
        [key: string]: { value: string };
      }>(
        (previousValue, curr) => ({
          ...previousValue,
          [curr]: { value: `{colors.${color}.${curr}}` },
        }),
        {},
      ),
    }),
    {},
  );
}

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,ts,astro,mdx}"],
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    extend: {
      tokens: {
        sizes: {
          headerHeight: { value: "56px" },
          contentMaxWidth: { value: "1280px" },
          sidebarWidth: { value: "240px" },
        },
        zIndex: {
          docked: { value: 7 },
          fab: { value: 100 },
          drawer: { value: 200 },
          drawerBackdrop: { value: 199 },
          header: { value: 10 },
        },
        fonts: {
          body: { value: "Roboto, Helvetica, Arial, sans-serif" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: "white" },
            dark: { value: "{colors.neutral.900}" },
          },
          ...definePalette({
            primary: "teal",
            secondary: "amber",
          }),
        },
        spacing: {
          xs: { value: "{spacing.1}" },
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.4}" },
          lg: { value: "{spacing.8}" },
          xl: { value: "{spacing.16} " },
        },
      },
      textStyles: {
        headings: {
          description: "Text style for heading.",
          value: {
            fontWeight: "bold",
          },
        },
      },
    },
  },
  globalCss: {
    ":root": {
      "--global-font-body": "token(fonts.body)",
    },
    body: {
      backgroundColor: { base: "bg", _dark: "bg.dark" },
      color: { base: "neutral.950", _dark: "neutral.50" },
      "&[data-drawer-open=true]": {
        overflowY: "hidden",
      },
    },
    ".astro-code": {
      p: 4,
      my: 4,
      rounded: "xl",
    },
  },
  patterns: {
    gradientBox: {
      description: "props for short-hand bgGradient",
      transform(props) {
        return {
          color: "white",
          bgGradient: "to-r",
          gradientFrom: { base: "primary.600", _dark: "primary.800" },
          gradientTo: { base: "secondary.100", _dark: "bg.dark" },
          ...props,
        };
      },
    },
    paper: {
      description: "Paper component with background and border-radius",
      properties: {
        hover: { type: "boolean" },
      },
      transform({ hover, ...props }) {
        return {
          bgct: {
            base: "colorPalette.600/92",
            _dark: "colorPalette.600/90",
            _hover: hover ? "colorPalette.600/84" : undefined,
          },
          "&[data-selected]": {
            bgct: { base: "colorPalette.600/84", _dark: "colorPalette.600/84" },
            color: { base: "colorPalette.800", _dark: "colorPalette.300" },
            pointerEvents: "none",
          },
          p: [4, 8],
          rounded: "xl",
          wordBreak: "break-all",
          transition: "background .25s",
          ...props,
        };
      },
    },
  },
  utilities: {
    backgroundTransparentize: {
      shorthand: ["bgct", "bgt"],
      property: "backgroundColor",
      className: "transparentize_bgc",
      values: { type: "string" },
      transform: (value: string, { token }) => {
        const lastIndex = value?.lastIndexOf("/");
        if (!lastIndex) {
          return {};
        }
        if (typeof value?.substring !== "function") {
          return {};
        }
        const color = value?.substring(0, lastIndex);
        if (!color) {
          return {};
        }
        const amount = value.split("/").at(-1);
        const colorValue = token(`colors.${color}`);

        const tokenOpacity = token(`opacity.${amount}`);
        const amountValue = tokenOpacity
          ? parseFloat(tokenOpacity) * 100
          : `${amount}%`;
        return {
          backgroundColor: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
        };
      },
    },
  },
});
