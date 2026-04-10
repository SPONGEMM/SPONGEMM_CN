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
    title: "SPONGE2.0 文档",
    items: [
      {
        title: "快速开始",
        href: "/文档/SPONGE2.0/getting-started"
      },
      {
        title: "构建指南",
        href: "/文档/SPONGE2.0/build-guide"
      },
      {
        title: "输入参考",
        href: "/文档/SPONGE2.0/input-reference"
      },
      {
        title: "贡献指南",
        href: "/文档/SPONGE2.0/contributing"
      },
      {
        title: "SPONGE1.4 参考手册",
        note: "归档保留",
        href: "/文档/SPONGE1.4/reference_manual"
      }
    ]
  },
  {
    title: "SPONGE2.0 输入参考",
    items: [
      {
        title: "核心参数",
        href: "/文档/SPONGE2.0/input-reference/core"
      },
      {
        title: "输入输出",
        href: "/文档/SPONGE2.0/input-reference/io"
      },
      {
        title: "温控器",
        href: "/文档/SPONGE2.0/input-reference/thermostat"
      },
      {
        title: "压控器",
        href: "/文档/SPONGE2.0/input-reference/barostat"
      },
      {
        title: "原子位置约束",
        href: "/文档/SPONGE2.0/input-reference/restrain"
      },
      {
        title: "约束算法",
        href: "/文档/SPONGE2.0/input-reference/constraint"
      },
      {
        title: "邻居表",
        href: "/文档/SPONGE2.0/input-reference/neighbor-list"
      },
      {
        title: "PME 静电",
        href: "/文档/SPONGE2.0/input-reference/pme"
      },
      {
        title: "集体变量",
        href: "/文档/SPONGE2.0/input-reference/collective-variables"
      },
      {
        title: "增强采样",
        href: "/文档/SPONGE2.0/input-reference/enhanced-sampling"
      },
      {
        title: "SinkMeta",
        href: "/文档/SPONGE2.0/input-reference/sinkmeta"
      },
      {
        title: "高级参数",
        href: "/文档/SPONGE2.0/input-reference/advanced"
      }
    ]
  },
  {
    title: "SPONGE1.4 文档（归档）",
    items: [
      {
        title: "进入 SPONGE1.4 文档归档",
        note: "包含输入命令、模块功能、文件格式、CV 系统、版本迭代、参考手册",
        href: "/文档/SPONGE1.4"
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
    title: "SPONGE 程序",
    items: [
      {
        title: "SPONGE2.0 安装",
        href: "/下载/SPONGE2.0安装"
      },
      {
        title: "历史版本归档",
        note: "1.4 及更早版本",
        href: "/下载/历史版本归档"
      }
    ]
  },
  {
    title: "兼容资源",
    items: [
      {
        title: "SPONGE1.4 模块归档",
        href: "/下载/CudaSPONGE模块"
      }
    ]
  },
  {
    title: "工具与插件",
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

export function getLegacyTitleByHref(href: string) {
  const normalizedHref = href
    .replace(/\.md$/, "")
    .replace(/\/README$/, "")
    .replace(/\/+$/, "");

  const sections = [docsGroups, tutorialGroups, downloadGroups];
  for (const groups of sections) {
    for (const group of groups) {
      for (const item of group.items) {
        if (item.href === normalizedHref) {
          return item.title;
        }
      }
    }
  }

  if (normalizedHref === "/工作坊视频") {
    return "工作坊视频";
  }

  return null;
}
