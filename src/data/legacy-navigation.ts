export type LegacyCard = {
  title: string;
  href: string;
  note?: string;
};

export type LegacyGroup = {
  title: string;
  items: LegacyCard[];
};

export type LegacySectionKey = "docs" | "tutorials" | "download";

export const docsGroups: LegacyGroup[] = [
  {
    title: "CudaSPONGE 文档",
    items: [
      {
        title: "输入命令",
        href: "/文档/CudaSPONGE文档/输入命令"
      },
      {
        title: "模块功能",
        href: "/文档/CudaSPONGE文档/模块功能"
      },
      {
        title: "文件格式",
        href: "/文档/CudaSPONGE文档/文件格式"
      },
      {
        title: "CV 系统",
        href: "/文档/CudaSPONGE文档/CV系统"
      },
      {
        title: "版本迭代",
        href: "/文档/CudaSPONGE文档/版本迭代"
      },
      {
        title: "参考手册",
        href: "/文档/CudaSPONGE文档/reference_manual"
      }
    ]
  },
  {
    title: "Xponge 文档",
    items: [
      {
        title: "Xponge 概览",
        href: "/文档/Xponge文档/Xponge"
      },
      {
        title: "加载与流程",
        href: "/文档/Xponge文档/Xponge/load"
      },
      {
        title: "分析工具",
        href: "/文档/Xponge文档/Xponge/analysis"
      },
      {
        title: "力场与修饰",
        href: "/文档/Xponge文档/Xponge/forcefield"
      }
    ]
  }
];

export const tutorialGroups: LegacyGroup[] = [
  {
    title: "安装",
    items: [
      {
        title: "Linux 下的安装",
        href: "/教程/Linux下的安装"
      },
      {
        title: "Windows 下的安装",
        href: "/教程/Windows下的安装"
      }
    ]
  },
  {
    title: "建模",
    items: [
      {
        title: "4B1Y 体系建模",
        href: "/教程/4B1Y体系建模"
      },
      {
        title: "聚乙二醇建模",
        href: "/教程/聚乙二醇建模"
      }
    ]
  },
  {
    title: "基础案例",
    items: [
      {
        title: "丙氨酸十二肽的折叠",
        href: "/教程/丙氨酸十二肽的折叠"
      },
      {
        title: "高压下氯化钠晶体的模拟",
        href: "/教程/高压下氯化钠晶体的模拟"
      },
      {
        title: "过氧化氢二面角的增强抽样",
        href: "/教程/过氧化氢二面角的增强抽样"
      }
    ]
  },
  {
    title: "工作坊视频",
    items: [
      {
        title: "工作坊视频",
        note: "2025 / 2023 / 2022 / 2021",
        href: "/工作坊视频"
      }
    ]
  }
];

export const downloadGroups: LegacyGroup[] = [
  {
    title: "程序包",
    items: [
      {
        title: "CudaSPONGE 程序",
        href: "/下载/CudaSPONGE程序"
      }
    ]
  },
  {
    title: "模块包",
    items: [
      {
        title: "CudaSPONGE 模块",
        href: "/下载/CudaSPONGE模块"
      }
    ]
  },
  {
    title: "工具包",
    items: [
      {
        title: "SPONGE 工具",
        href: "/下载/SPONGE工具"
      }
    ]
  }
];

export const legacySectionMeta: Record<
  LegacySectionKey,
  { title: string; homeHref: string; contentRoute: string; overviewTitle: string }
> = {
  docs: {
    title: "文档",
    homeHref: "/docs",
    contentRoute: "文档",
    overviewTitle: "文档总览"
  },
  tutorials: {
    title: "教程",
    homeHref: "/tutorials",
    contentRoute: "教程",
    overviewTitle: "教程总览"
  },
  download: {
    title: "下载",
    homeHref: "/download",
    contentRoute: "下载",
    overviewTitle: "下载总览"
  }
};

export const legacySectionGroups: Record<LegacySectionKey, LegacyGroup[]> = {
  docs: docsGroups,
  tutorials: tutorialGroups,
  download: downloadGroups
};

export function getLegacySection(route: string): LegacySectionKey {
  if (route.startsWith("教程") || route === "工作坊视频") {
    return "tutorials";
  }

  if (route.startsWith("下载")) {
    return "download";
  }

  return "docs";
}
