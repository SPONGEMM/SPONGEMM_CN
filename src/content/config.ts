import { defineCollection, z } from "astro:content";

const insightsSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string(),
  avatar: z.string().optional()
});

const insights = defineCollection({
  type: "content",
  schema: insightsSchema
});

const insightsEn = defineCollection({
  type: "content",
  schema: insightsSchema
});

export const collections = {
  insights,
  "insights-en": insightsEn
};
