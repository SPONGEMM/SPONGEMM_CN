export function getSiteUrl(astroSite: URL | undefined): string {
  return (astroSite?.toString() ?? "https://spongemm.cn/").replace(/\/$/, "");
}
