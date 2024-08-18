import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
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
    // @ts-ignore
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
