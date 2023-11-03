import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pandacss from "@pandacss/astro";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "./src/utils/rehypeClassNamesOptions";

export default defineConfig({
  integrations: [pandacss(), mdx()],
  markdown: {
    // @ts-ignore
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
