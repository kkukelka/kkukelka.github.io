// content.config.ts
import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        author: z.string().default("Kilian Kukelka"),
        slug: z.string(),
        publishedDate: z.string(),
        updatedAt: z.string(),
        image: z.string().optional(),
        alt: z.string().optional(),
        attribution: z.string(),
        length: z.number(),
        wordCount: z.number(),
      }),
    }),

    publications: defineCollection({
      type: "page",
      source: "publications/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        image: z.string(),
        alt: z.string(),
        attribution: z.string(),
        publicationDate: z.string(),
        updatedAt: z.string().optional(),
        distributors: z.array(
          z.object({
            key: z.string(),
            alt: z.string(),
            format: z.string(),
            link: z.string().url(),
          }),
        ),
      }),
    }),
  },
});
