import { buildInsightsFeed } from "../../lib/rss";

export const GET = (context) =>
  buildInsightsFeed({
    context,
    collection: "insights-en",
    title: "SPONGEMM Insights",
    description: "Notes on SPONGE molecular simulation methods, experiences and reflections.",
    language: "en",
    linkPrefix: "/en/insights"
  });
