import { z, defineCollection } from "astro:content";

const exampleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    layerId: z.string(),
    index: z.number(),
  }),
});

const apiCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    index: z.number(),
  }),
});

export const collections = {
  examples: exampleCollection,
  api: apiCollection,
};
