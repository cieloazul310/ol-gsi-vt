import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import pandacss from "@pandacss/vite";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "./src/utils/rehypeClassNamesOptions";

export default defineConfig({
  integrations: [
    icon(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
    }),
  },
  vite: {
    plugins: [pandacss()],
  },
});
