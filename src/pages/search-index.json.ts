import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { docs1p4Zh, docs2p0Zh, docsHubZh } from "../data/docs";
import { docs1p4En, docs2p0En, docsHubEn } from "../data/docs-en";
import {
  install1p4Zh,
  install2p0Zh,
  installHubZh,
  installLegacyZh
} from "../data/install";
import { install1p4En, install2p0En, installHubEn, installLegacyEn } from "../data/install-en";

type SearchLang = "zh" | "en";
type SearchSection = "docs" | "insights" | "other";

type SearchEntry = {
  title: string;
  description: string;
  content: string;
  url: string;
  lang: SearchLang;
  section: SearchSection;
};

function plainText(input: string | undefined): string {
  return (input ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*`|{}[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function docsUrl(id: string, lang: SearchLang): string {
  const prefix = lang === "en" ? "/en/docs" : "/docs";
  return `${prefix}/${id}`.replace(/\/index$/, "");
}

function insightUrl(id: string, lang: SearchLang): string {
  const prefix = lang === "en" ? "/en/insights" : "/insights";
  return `${prefix}/${id}`.replace(/\/index$/, "");
}

type DocsHubLike = typeof docsHubZh;
type DocsLandingLike = typeof docs1p4Zh;
type InstallPageLike =
  | typeof installHubZh
  | typeof install1p4Zh
  | typeof installLegacyZh;

function docsHubEntry(page: DocsHubLike, lang: SearchLang): SearchEntry {
  return {
    title: page.heroTitle,
    description: page.pageDescription,
    content: page.versions.map((item) => `${item.itemName} ${item.cta}`).join(" "),
    url: page.canonicalPath,
    lang,
    section: "docs"
  };
}

function docsLandingEntry(page: DocsLandingLike, lang: SearchLang, title: string): SearchEntry {
  return {
    title,
    description: page.pageDescription,
    content: page.sections.map((item) => item.title).join(" "),
    url: page.canonicalPath,
    lang,
    section: "docs"
  };
}

function installEntry(page: InstallPageLike, lang: SearchLang): SearchEntry {
  return {
    title: page.pageTitle.replace(/^SPONGEMM \| /, ""),
    description: page.pageDescription,
    content: plainText("hero" in page ? page.hero.lede : `${page.heroTitle} ${"ledeHtml" in page ? page.ledeHtml : ""}`),
    url: page.canonicalPath,
    lang,
    section: "other"
  };
}

const staticPages: SearchEntry[] = [
  {
    title: "SPONGEMM",
    description: "SPONGE 分子动力学模拟软件主页。",
    content: "SPONGE 分子动力学 模拟 软件 主页 新闻 更新 组件 论文 引用",
    url: "/",
    lang: "zh",
    section: "other"
  },
  {
    title: "SPONGEMM",
    description: "Home page for the SPONGE molecular dynamics package.",
    content: "SPONGE molecular dynamics simulation software home updates components citations",
    url: "/en",
    lang: "en",
    section: "other"
  },
  docsHubEntry(docsHubZh, "zh"),
  docsHubEntry(docsHubEn, "en"),
  docsLandingEntry(docs1p4Zh, "zh", "SPONGE 1.4 文档"),
  docsLandingEntry(docs1p4En, "en", "SPONGE 1.4 Docs"),
  docsLandingEntry(docs2p0Zh, "zh", "SPONGE 2.0 文档"),
  docsLandingEntry(docs2p0En, "en", "SPONGE 2.0 Docs"),
  ...[installHubZh, install1p4Zh, install2p0Zh, installLegacyZh].map((page) => installEntry(page, "zh")),
  ...[installHubEn, install1p4En, install2p0En, installLegacyEn].map((page) => installEntry(page, "en")),
  {
    title: "联系",
    description: "联系 SPONGEMM 团队。",
    content: "联系 邮箱 GitHub 微信 二维码 SPONGEMM 团队",
    url: "/contact",
    lang: "zh",
    section: "other"
  },
  {
    title: "Contact",
    description: "Contact the SPONGEMM team.",
    content: "contact email GitHub WeChat SPONGEMM team",
    url: "/en/contact",
    lang: "en",
    section: "other"
  }
];

export const GET: APIRoute = async () => {
  const [docsZh, docsEn, insightsZh, insightsEn] = await Promise.all([
    getCollection("docs"),
    getCollection("docs-en"),
    getCollection("insights"),
    getCollection("insights-en")
  ]);

  const entries: SearchEntry[] = [
    ...staticPages,
    ...docsZh.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      content: plainText(entry.body),
      url: docsUrl(entry.id, "zh"),
      lang: "zh" as const,
      section: "docs" as const
    })),
    ...docsEn.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      content: plainText(entry.body),
      url: docsUrl(entry.id, "en"),
      lang: "en" as const,
      section: "docs" as const
    })),
    ...insightsZh.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      content: plainText(entry.body),
      url: insightUrl(entry.id, "zh"),
      lang: "zh" as const,
      section: "insights" as const
    })),
    ...insightsEn.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      content: plainText(entry.body),
      url: insightUrl(entry.id, "en"),
      lang: "en" as const,
      section: "insights" as const
    }))
  ];

  return new Response(JSON.stringify(entries), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-cache"
    }
  });
};
