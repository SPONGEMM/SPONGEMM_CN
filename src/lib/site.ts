export function getSiteUrl(astroSite: URL | undefined): string {
  return (astroSite?.toString() ?? "https://spongemm.cn/").replace(/\/$/, "");
}

export function buildAlternates(canonicalPath: string) {
  const zhPath = canonicalPath.startsWith("/en/")
    ? canonicalPath.slice(3)
    : canonicalPath === "/en"
    ? "/"
    : canonicalPath;
  const enPath = zhPath === "/" ? "/en" : `/en${zhPath}`;
  return [
    { hreflang: "zh-CN", path: zhPath },
    { hreflang: "en", path: enPath },
    { hreflang: "x-default", path: zhPath }
  ];
}
