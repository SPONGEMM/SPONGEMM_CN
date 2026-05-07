import type { DocsHubData, DocsLandingData } from "./docs";

export const docsHubEn: DocsHubData = {
  htmlLang: "en",
  canonicalPath: "/en/docs",
  pageTitle: "SPONGEMM | Docs",
  pageDescription: "Choose the documentation for SPONGE 2.0 or SPONGE 1.4.",
  heroTitle: "SPONGE Docs",
  gridLabel: "SPONGE documentation version choices",
  itemListName: "SPONGE documentation versions",
  versions: [
    {
      version: "2.0",
      tone: "beta",
      href: "/en/docs/2p0",
      cta: "View Docs",
      ariaLabel: "View SPONGE 2.0 documentation",
      itemName: "SPONGE 2.0 Documentation"
    },
    {
      version: "1.4",
      tone: "stable",
      href: "/en/docs/1p4",
      cta: "View Docs",
      ariaLabel: "View SPONGE 1.4 documentation",
      itemName: "SPONGE 1.4 Documentation"
    }
  ]
};

export const docs1p4En: DocsLandingData = {
  htmlLang: "en",
  canonicalPath: "/en/docs/1p4",
  pageTitle: "SPONGEMM | SPONGE 1.4 Docs",
  pageDescription: "Documentation entry point for the stable SPONGE 1.4 release.",
  breadcrumbAriaLabel: "Breadcrumb",
  breadcrumb: { label: "Docs", href: "/en/docs", current: "SPONGE 1.4" },
  gridAriaLabel: "SPONGE 1.4 documentation sections",
  ctaAvailable: "View Docs",
  pendingLabel: "Coming Soon",
  sections: [
    { title: "Input Commands", href: "/en/docs/1p4/commands", state: "available" },
    { title: "Modules", href: "/en/docs/1p4/modules", state: "available" },
    { title: "File Formats", href: "/en/docs/1p4/file-formats", state: "available" },
    { title: "CV System", href: "/en/docs/1p4/cv", state: "available" },
    { title: "Tutorials", href: "/en/docs/1p4/tutorials", state: "available" },
    { title: "Version History", href: "/en/docs/1p4/changelog", state: "available" },
    { title: "Reference Manual", href: "/en/docs/1p4/reference", state: "available" },
    { title: "Xponge Docs", href: "/en/docs/1p4/xponge", state: "available" }
  ]
};

export const docs2p0En: DocsLandingData = {
  htmlLang: "en",
  canonicalPath: "/en/docs/2p0",
  pageTitle: "SPONGEMM | SPONGE 2.0 Docs",
  pageDescription: "Documentation entry point for the SPONGE 2.0 beta.",
  breadcrumbAriaLabel: "Breadcrumb",
  breadcrumb: { label: "Docs", href: "/en/docs", current: "SPONGE 2.0" },
  gridAriaLabel: "SPONGE 2.0 documentation sections",
  ctaAvailable: "View Docs",
  pendingLabel: "Coming Soon",
  sections: [
    { title: "Installation Guide", state: "pending" },
    { title: "Tutorials", state: "pending" }
  ]
};
