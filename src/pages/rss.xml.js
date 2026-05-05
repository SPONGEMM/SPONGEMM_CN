import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const items = (await getCollection("insights"))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "SPONGEMM 观点洞见",
    description: "SPONGE 分子模拟方法、经验与思考的笔记。",
    site: context.site,
    customData: "<language>zh-CN</language>",
    items: items.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/insights/${entry.slug}/`,
      author: entry.data.author
    }))
  });
}
