import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insightsSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string(),
  avatar: z.string().optional()
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: insightsSchema
});

const insightsEn = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights-en" }),
  schema: insightsSchema
});

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  version: z.string(),
  section: z.string(),
  order: z.number().optional()
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: docsSchema
});

const docsEn = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs-en" }),
  schema: docsSchema
});

export const collections = {
  insights,
  "insights-en": insightsEn,
  docs,
  "docs-en": docsEn
};
