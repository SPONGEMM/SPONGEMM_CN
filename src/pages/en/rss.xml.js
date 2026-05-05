import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const items = (await getCollection("insights-en"))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "SPONGEMM Insights",
    description: "Notes on SPONGE molecular simulation methods, experiences and reflections.",
    site: context.site,
    customData: "<language>en</language>",
    items: items.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/en/insights/${entry.slug}/`,
      author: entry.data.author
    }))
  });
}
