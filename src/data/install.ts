export type ModuleBandRow = {
  href?: string;
  download?: boolean;
  external?: boolean;
  title: string;
  subtitle: string;
  subtitleAsCode?: boolean;
  badge: string;
};

export type ModuleBand = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  rows: ModuleBandRow[];
};

export type InstallDetailPageData = {
  htmlLang: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  bands: ModuleBand[];
};

export type InstallLegacyDownload = {
  href: string;
  title: string;
  description: string;
  filename: string;
  size: string;
};

export type InstallLegacyModuleBand = {
  title: string;
  description: string;
  rows: { href: string; title: string; filename: string; size: string }[];
};

export type InstallLegacyPageData = {
  htmlLang: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  ledeHtml: string;
  notice: { strong: string; text: string };
  programs: { heading: string; downloads: InstallLegacyDownload[] };
  modules: {
    heading: string;
    description: string;
    bands: InstallLegacyModuleBand[];
  };
};

export type InstallTone = "beta" | "stable" | "legacy";

export type InstallOption = {
  index: string;
  version: string;
  title: string;
  status: string;
  tone: InstallTone;
  description: string;
  specs: string[];
  href: string;
  cta: string;
};

export type InstallHubData = {
  htmlLang: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  hero: {
    titleHtml: { lead: string; emphasis: string };
    lede: string;
  };
  gridLabel: string;
  options: InstallOption[];
};

export const installHubZh: InstallHubData = {
  htmlLang: "zh-CN",
  canonicalPath: "/install",
  pageTitle: "SPONGEMM | 安装 SPONGE",
  pageDescription:
    "选择 SPONGE 2.0 公开测试版、SPONGE 1.4 稳定版或 SPONGE legacy 历史资源的安装入口。",
  hero: {
    titleHtml: { lead: "安装 ", emphasis: "SPONGE" },
    lede:
      "选择要安装或获取的版本。SPONGE 2.0 是开发中的公开测试版本，SPONGE 1.4 是当前稳定版本，legacy 仅保留历史版本与旧模块资源。"
  },
  gridLabel: "SPONGE 安装版本选择",
  options: [
    {
      index: "01",
      version: "2.0",
      title: "SPONGE 2.0",
      status: "公开测试",
      tone: "beta",
      description:
        "开发中的下一代版本。包含最新功能与性能改进，适合关注新特性、参与测试与反馈的研究者。",
      specs: ["预编译包", "源码构建"],
      href: "/install/2p0",
      cta: "查看安装"
    },
    {
      index: "02",
      version: "1.4",
      title: "SPONGE 1.4",
      status: "稳定版本",
      tone: "stable",
      description:
        "面向正式研究、教学与生产工作流的稳定版本。行为可预测、文档完善、广泛验证。",
      specs: ["源码构建"],
      href: "/install/1p4",
      cta: "查看安装"
    },
    {
      index: "03",
      version: "legacy",
      title: "SPONGE legacy",
      status: "历史资源",
      tone: "legacy",
      description: "保留早期版本与旧模块资源。供已有项目兼容、复现实验、维护历史流程使用。",
      specs: ["历史版本", "旧模块", "兼容说明"],
      href: "/install/legacy",
      cta: "浏览资源"
    }
  ]
};

export const install1p4Zh: InstallDetailPageData = {
  htmlLang: "zh-CN",
  canonicalPath: "/install/1p4",
  pageTitle: "SPONGEMM | SPONGE 1.4 安装",
  pageDescription:
    "SPONGE 1.4 稳定版本及其配套工具 Xponge、VMD 插件、prips 的安装入口。",
  heroTitle: "SPONGE 1.4 安装",
  bands: [
    {
      id: "sponge-source",
      eyebrow: "01 · 主程序",
      title: "SPONGE 源码下载",
      description: "SPONGE 1.4 稳定版本的源码包，含标准 MD 与 TI 程序。",
      rows: [
        {
          href: "/packages/programs/sponge_v1.4.zip",
          download: true,
          title: "sponge_v1.4.zip",
          subtitle: "解压后参考源码包内文档构建",
          badge: "4.5 MB ↓"
        }
      ]
    },
    {
      id: "xponge",
      eyebrow: "02 · 前后处理",
      title: "Xponge 安装",
      description: "Xponge 是用 Python 编写的 SPONGE 前后处理工具。",
      rows: [
        {
          title: "通过 PyPI 安装",
          subtitle: "pip install Xponge",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    },
    {
      id: "vmd",
      eyebrow: "03 · 可视化",
      title: "VMD 可视化插件安装",
      description:
        "插件让 VMD 能直接读取 SPONGE 输出的轨迹与拓扑文件。使用方法见压缩包中的 README。",
      rows: [
        {
          href: "/packages/tools/sponge_vmd_v1.4.3.zip",
          download: true,
          title: "sponge_vmd_v1.4.3.zip",
          subtitle: "VMD 插件包，含 README 说明",
          badge: "376 KB ↓"
        }
      ]
    },
    {
      id: "prips",
      eyebrow: "04 · 运行时接口",
      title: "prips 安装",
      description:
        "prips 是 SPONGE 配套的 Python 运行时接口插件（Python Runtime Interface Plugin of SPONGE）。",
      rows: [
        {
          title: "通过 PyPI 安装",
          subtitle: "pip install prips",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    }
  ]
};

export const install2p0Zh: InstallDetailPageData = {
  htmlLang: "zh-CN",
  canonicalPath: "/install/2p0",
  pageTitle: "SPONGEMM | SPONGE 2.0 安装",
  pageDescription:
    "SPONGE 2.0 的安装入口：conda 预构建包、GitHub 源码，以及配套工具 Xponge、VMD 插件、prips。",
  heroTitle: "SPONGE 2.0 安装",
  bands: [
    {
      id: "conda",
      eyebrow: "01 · 预构建包",
      title: "conda 安装",
      description: "SPONGE 2.0 提供 CPU 与 CUDA 两类预构建包，按硬件选择对应安装通道。",
      rows: [
        {
          title: "CPU 版",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CPU",
          subtitleAsCode: true,
          badge: "CPU"
        },
        {
          title: "CUDA 12 版",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CUDA12",
          subtitleAsCode: true,
          badge: "CUDA 12"
        },
        {
          title: "CUDA 13 版",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CUDA13",
          subtitleAsCode: true,
          badge: "CUDA 13"
        }
      ]
    },
    {
      id: "source",
      eyebrow: "02 · 源码",
      title: "GitHub 源码",
      description: "从 GitHub 获取 SPONGE 2.0 的最新源码，自行构建。",
      rows: [
        {
          href: "https://github.com/SPONGEMM/SPONGE",
          external: true,
          title: "SPONGEMM/SPONGE",
          subtitle: "git clone https://github.com/SPONGEMM/SPONGE.git",
          subtitleAsCode: true,
          badge: "GitHub ↗"
        }
      ]
    },
    {
      id: "xponge",
      eyebrow: "03 · 前后处理",
      title: "Xponge 安装",
      description: "Xponge 是用 Python 编写的 SPONGE 前后处理工具。",
      rows: [
        {
          title: "通过 PyPI 安装",
          subtitle: "pip install Xponge",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    },
    {
      id: "vmd",
      eyebrow: "04 · 可视化",
      title: "VMD 可视化插件安装",
      description:
        "插件让 VMD 能直接读取 SPONGE 输出的轨迹与拓扑文件。使用方法见压缩包中的 README。",
      rows: [
        {
          href: "/packages/tools/sponge_vmd_v1.4.3.zip",
          download: true,
          title: "sponge_vmd_v1.4.3.zip",
          subtitle: "VMD 插件包,含 README 说明",
          badge: "376 KB ↓"
        }
      ]
    },
    {
      id: "prips",
      eyebrow: "05 · 运行时接口",
      title: "prips 安装",
      description:
        "prips 是 SPONGE 配套的 Python 运行时接口插件(Python Runtime Interface Plugin of SPONGE)。",
      rows: [
        {
          title: "通过 PyPI 安装",
          subtitle: "pip install prips",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    }
  ]
};

export const installLegacyZh: InstallLegacyPageData = {
  htmlLang: "zh-CN",
  canonicalPath: "/install/legacy",
  pageTitle: "SPONGEMM | SPONGE legacy",
  pageDescription: "SPONGE 历史版本与旧模块资源入口。",
  heroTitle: "历史资源",
  ledeHtml:
    '这里保留不再维护的 SPONGE 历史版本和旧模块资源，用于旧项目兼容、结果复现和历史工作流维护。新项目建议使用 <a href="/install/2p0">SPONGE 2.0</a> 或 <a href="/install/1p4">SPONGE 1.4</a>。',
  notice: {
    strong: "兼容性说明",
    text: "这些资源不会随当前稳定版本同步更新。使用前请确认旧输入文件、模块接口和编译环境是否匹配。"
  },
  programs: {
    heading: "历史程序版本",
    downloads: [
      {
        href: "/packages/programs/sponge_v1.3.zip",
        title: "SPONGE 1.3",
        description: "不再维护的历史版本，供旧项目复现和兼容使用。",
        filename: "sponge_v1.3.zip",
        size: "4.6 MB"
      },
      {
        href: "/packages/programs/sponge_v1.2.6.zip",
        title: "SPONGE 1.2.6",
        description: "不再维护的历史版本，包含早期功能状态。",
        filename: "sponge_v1.2.6.zip",
        size: "4.5 MB"
      },
      {
        href: "/packages/programs/sponge_nmd_pure_v1.1.zip",
        title: "SPONGE 1.1",
        description: "早期 NMD pure 版本，仅用于历史工作流兼容。",
        filename: "sponge_nmd_pure_v1.1.zip",
        size: "379 KB"
      }
    ]
  },
  modules: {
    heading: "旧模块",
    description:
      "模块资源按兼容状态分组。未更新模块需要自行检查和适配；已整合模块保留给旧版本工作流使用。",
    bands: [
      {
        title: "未更新的模块",
        description: "这些模块不能直接在最新稳定版本的 SPONGE 中使用，通常需要稍加修改。",
        rows: [
          {
            href: "/packages/modules/fgm_double_layer_mod_v2.zip",
            title: "FGM 双层平板",
            filename: "fgm_double_layer_mod_v2.zip",
            size: "177 KB"
          },
          {
            href: "/packages/modules/xrd3d_meta1d_mod.zip",
            title: "XRD3D",
            filename: "xrd3d_meta1d_mod.zip",
            size: "1.5 MB"
          },
          {
            href: "/packages/modules/dpd_and_spring_cuboid_mod.zip",
            title: "DPD",
            filename: "dpd_and_spring_cuboid_mod.zip",
            size: "285 KB"
          }
        ]
      },
      {
        title: "已整合的模块",
        description: "这些模块已整合至较新的 SPONGE 版本，这里保留链接以兼容老版本。",
        rows: [
          {
            href: "/packages/modules/exforce.zip",
            title: "外力",
            filename: "exforce.zip",
            size: "6.6 KB"
          },
          {
            href: "/packages/modules/meta1d_mod.zip",
            title: "1 维 metadynamics",
            filename: "meta1d_mod.zip",
            size: "14 KB"
          },
          {
            href: "/packages/modules/classic_sits_mod_v1p2p5.zip",
            title: "经典 SITS",
            filename: "classic_sits_mod_v1p2p5.zip",
            size: "100 KB"
          },
          {
            href: "/packages/modules/cmap_module.zip",
            title: "CMAP",
            filename: "cmap_module.zip",
            size: "12 KB"
          },
          {
            href: "/packages/modules/pyplugin.zip",
            title: "Python 接口",
            filename: "pyplugin.zip",
            size: "4.5 KB"
          }
        ]
      }
    ]
  }
};
