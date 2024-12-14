/* eslint-disable-next-line import/no-unresolved */
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const examples = defineCollection({
  loader: glob({
    base: "./src/content/examples",
    pattern: "**/*.mdx",
  }),
  schema: z.object({
    title: z.string(),
    layerId: z.string(),
    index: z.number(),
  }),
});

const api = defineCollection({
  loader: glob({
    base: "./src/content/api",
    pattern: "**/*.mdx",
  }),
  schema: z.object({
    title: z.string(),
    index: z.number(),
  }),
});

export const collections = {
  examples,
  api,
};
