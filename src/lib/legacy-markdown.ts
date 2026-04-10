const legacyMarkdownLoaders = import.meta.glob("../../spongemm_cn_gitee/**/*.md");

const LEGACY_ROOT = "../../spongemm_cn_gitee/";

export type LegacyMarkdownPage = {
  route: string;
  title: string;
  module: {
    default: any;
  };
};

function normalizeRoute(route: string) {
  return route.replace(/^\/+/, "").replace(/\/+$/, "");
}

function buildCandidates(route: string) {
  const normalized = normalizeRoute(route);
  const candidates = [`${LEGACY_ROOT}${normalized}.md`];

  if (normalized.length > 0) {
    candidates.push(`${LEGACY_ROOT}${normalized}/home.md`);
  }

  return candidates;
}

function titleFromRoute(route: string) {
  const normalized = normalizeRoute(route);
  const segments = normalized.split("/").filter(Boolean);
  return segments.at(-1) ?? "SPONGE";
}

export async function loadLegacyMarkdown(route: string): Promise<LegacyMarkdownPage | null> {
  for (const candidate of buildCandidates(route)) {
    const loader = legacyMarkdownLoaders[candidate];
    if (!loader) {
      continue;
    }

    const module = await loader();
    const frontmatter = (module as { frontmatter?: { title?: string } }).frontmatter;
    return {
      route: normalizeRoute(route),
      title: frontmatter?.title ?? titleFromRoute(route),
      module: module as LegacyMarkdownPage["module"]
    };
  }

  return null;
}

export function hasLegacyMarkdown(route: string) {
  return buildCandidates(route).some((candidate) => candidate in legacyMarkdownLoaders);
}

export function getLegacyMarkdownRoutes() {
  return Object.keys(legacyMarkdownLoaders)
    .map((candidate) => candidate.slice(LEGACY_ROOT.length).replace(/\.md$/, ""))
    .filter((route) => route !== "工作坊视频");
}
