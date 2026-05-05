import rss from "@astrojs/rss";
import { getCollection, type CollectionKey } from "astro:content";

interface FeedOptions {
  context: { site?: URL };
  collection: CollectionKey;
  title: string;
  description: string;
  language: string;
  linkPrefix: string;
}

export async function buildInsightsFeed(opts: FeedOptions) {
  const items = (await getCollection(opts.collection))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: opts.title,
    description: opts.description,
    site: opts.context.site,
    customData: `<language>${opts.language}</language>`,
    items: items.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `${opts.linkPrefix}/${entry.id}/`,
      author: entry.data.author
    }))
  });
}
