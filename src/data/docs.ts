export type DocsHubVersion = {
  version: string;
  tone: "stable" | "beta";
  href: string;
  cta: string;
  ariaLabel: string;
  itemName: string;
};

export type DocsHubData = {
  htmlLang: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  gridLabel: string;
  itemListName: string;
  versions: DocsHubVersion[];
};

export type DocsSection = {
  title: string;
  href?: string;
  state: "available" | "pending";
};

export type DocsLandingData = {
  htmlLang: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  breadcrumbAriaLabel: string;
  breadcrumb: { label: string; href: string; current: string };
  gridAriaLabel: string;
  ctaAvailable: string;
  pendingLabel: string;
  sections: DocsSection[];
};

export const docsHubZh: DocsHubData = {
  htmlLang: "zh-CN",
  canonicalPath: "/docs",
  pageTitle: "SPONGEMM | 文档",
  pageDescription: "选择 SPONGE 2.0 或 SPONGE 1.4 的使用文档。",
  heroTitle: "SPONGE 文档",
  gridLabel: "SPONGE 文档版本选择",
  itemListName: "SPONGE 文档版本",
  versions: [
    {
      version: "2.0",
      tone: "beta",
      href: "/docs/2p0",
      cta: "查看文档",
      ariaLabel: "查看 SPONGE 2.0 文档",
      itemName: "SPONGE 2.0 文档"
    },
    {
      version: "1.4",
      tone: "stable",
      href: "/docs/1p4",
      cta: "查看文档",
      ariaLabel: "查看 SPONGE 1.4 文档",
      itemName: "SPONGE 1.4 文档"
    }
  ]
};

export const docs1p4Zh: DocsLandingData = {
  htmlLang: "zh-CN",
  canonicalPath: "/docs/1p4",
  pageTitle: "SPONGEMM | SPONGE 1.4 文档",
  pageDescription: "SPONGE 1.4 稳定版本使用文档入口。",
  breadcrumbAriaLabel: "面包屑导航",
  breadcrumb: { label: "文档", href: "/docs", current: "SPONGE 1.4" },
  gridAriaLabel: "SPONGE 1.4 文档目录",
  ctaAvailable: "查看文档",
  pendingLabel: "待补充",
  sections: [
    { title: "输入命令", href: "/docs/1p4/commands", state: "available" },
    { title: "模块功能", href: "/docs/1p4/modules", state: "available" },
    { title: "文件格式", href: "/docs/1p4/file-formats", state: "available" },
    { title: "CV 系统", href: "/docs/1p4/cv", state: "available" },
    { title: "教程", href: "/docs/1p4/tutorials", state: "available" },
    { title: "版本迭代", href: "/docs/1p4/changelog", state: "available" },
    { title: "参考手册", href: "/docs/1p4/reference", state: "available" },
    { title: "Xponge 文档", href: "/docs/1p4/xponge", state: "available" }
  ]
};

export const docs2p0Zh: DocsLandingData = {
  htmlLang: "zh-CN",
  canonicalPath: "/docs/2p0",
  pageTitle: "SPONGEMM | SPONGE 2.0 文档",
  pageDescription: "SPONGE 2.0 beta 使用文档入口。",
  breadcrumbAriaLabel: "面包屑导航",
  breadcrumb: { label: "文档", href: "/docs", current: "SPONGE 2.0" },
  gridAriaLabel: "SPONGE 2.0 文档目录",
  ctaAvailable: "查看文档",
  pendingLabel: "待补充",
  sections: [
    { title: "安装与快速开始", href: "/docs/2p0/getting-started", state: "available" },
    { title: "源码编译指南", href: "/docs/2p0/build-guide", state: "available" },
    { title: "开发与贡献指南", href: "/docs/2p0/contributing", state: "available" },
    { title: "输入参数索引", href: "/docs/2p0/input-reference", state: "available" },
    { title: "核心模拟参数", href: "/docs/2p0/input-reference/core", state: "available" },
    { title: "输入、输出与重启", href: "/docs/2p0/input-reference/io", state: "available" },
    { title: "恒温器", href: "/docs/2p0/input-reference/thermostat", state: "available" },
    { title: "恒压器", href: "/docs/2p0/input-reference/barostat", state: "available" },
    { title: "原子坐标限制", href: "/docs/2p0/input-reference/restrain", state: "available" },
    { title: "约束算法", href: "/docs/2p0/input-reference/constraint", state: "available" },
    { title: "邻居表", href: "/docs/2p0/input-reference/neighbor-list", state: "available" },
    { title: "PME 静电", href: "/docs/2p0/input-reference/pme", state: "available" },
    { title: "集体变量（CV）", href: "/docs/2p0/input-reference/collective-variables", state: "available" },
    { title: "增强采样", href: "/docs/2p0/input-reference/enhanced-sampling", state: "available" },
    { title: "SinkMeta", href: "/docs/2p0/input-reference/sinkmeta", state: "available" },
    { title: "高级参数", href: "/docs/2p0/input-reference/advanced", state: "available" }
  ]
};
