import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        sizes: {
          sidebar: { value: "420px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
