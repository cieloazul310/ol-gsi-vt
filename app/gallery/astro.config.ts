import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import pandacss from "@pandacss/astro";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "./src/utils/rehypeClassNamesOptions";

export default defineConfig({
  integrations: [
    pandacss(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    // @ts-ignore
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
