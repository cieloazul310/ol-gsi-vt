import { extendTheme } from "@yamada-ui/react";

export const theme = extendTheme({
  globalStyle: {
    body: {
      colorScheme: "blue",
    },
  },
  semanticTokens: {
    colorSchemes: {
      primary: ["blue", "white"],
    },
  },
});
