import { buildInsightsFeed } from "../lib/rss";

export const GET = (context) =>
  buildInsightsFeed({
    context,
    collection: "insights",
    title: "SPONGEMM 观点洞见",
    description: "SPONGE 分子模拟方法、经验与思考的笔记。",
    language: "zh-CN",
    linkPrefix: "/insights"
  });
