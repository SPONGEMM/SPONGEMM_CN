const legacyMarkdownLoaders = {
  ...import.meta.glob("../../spongemm_cn_gitee/**/*.md"),
  ...import.meta.glob("../../legacy_content/**/*.md")
};

const LEGACY_ROOT = "../../spongemm_cn_gitee/";
const VERSIONED_ROOT = "../../legacy_content/";

export type LegacyMarkdownPage = {
  route: string;
  title: string;
  module: {
    default: any;
  };
};

function normalizeRoute(route: string) {
  return route.replace(/^\/+/, "").replace(/\/+$/, "").replace(/\.md$/, "");
}

function buildCandidates(route: string) {
  const normalized = normalizeRoute(route);
  const candidates = [
    `${VERSIONED_ROOT}${normalized}.md`,
    `${VERSIONED_ROOT}${normalized}/README.md`,
    `${LEGACY_ROOT}${normalized}.md`
  ];

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
  const routes = new Set<string>();

  for (const candidate of Object.keys(legacyMarkdownLoaders)) {
    if (candidate.startsWith(LEGACY_ROOT)) {
      const route = candidate.slice(LEGACY_ROOT.length).replace(/\.md$/, "");
      if (route !== "工作坊视频") {
        routes.add(route);
      }
      continue;
    }

    if (candidate.startsWith(VERSIONED_ROOT)) {
      const route = candidate
        .slice(VERSIONED_ROOT.length)
        .replace(/\/README\.md$/, "")
        .replace(/\.md$/, "");
      routes.add(route);
      continue;
    }
  }

  return [...routes];
}
