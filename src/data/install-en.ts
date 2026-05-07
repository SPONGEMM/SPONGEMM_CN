import type {
  InstallHubData,
  InstallDetailPageData,
  InstallLegacyPageData
} from "./install";

export const installHubEn: InstallHubData = {
  htmlLang: "en",
  canonicalPath: "/en/install",
  pageTitle: "SPONGEMM | Install SPONGE",
  pageDescription:
    "Choose the installation entry point for SPONGE 2.0 public beta, SPONGE 1.4 stable release, or SPONGE legacy resources.",
  hero: {
    titleHtml: { lead: "Install ", emphasis: "SPONGE" },
    lede:
      "Choose the version to install or obtain. SPONGE 2.0 is under active public-beta development, SPONGE 1.4 is the current stable release, and legacy keeps only historical releases and older modules."
  },
  gridLabel: "SPONGE installation version choices",
  options: [
    {
      index: "01",
      version: "2.0",
      title: "SPONGE 2.0",
      status: "Public Beta",
      tone: "beta",
      description:
        "The next-generation version under active development. Latest features and performance improvements; suitable for testing new features and providing feedback.",
      specs: ["Pre-built", "Source Build"],
      href: "/en/install/2p0",
      cta: "View Install"
    },
    {
      index: "02",
      version: "1.4",
      title: "SPONGE 1.4",
      status: "Stable",
      tone: "stable",
      description:
        "The current stable release for production research, teaching, and molecular simulation workflows that need stable, well-documented behavior.",
      specs: ["Source Build"],
      href: "/en/install/1p4",
      cta: "View Install"
    },
    {
      index: "03",
      version: "legacy",
      title: "SPONGE legacy",
      status: "Archive",
      tone: "legacy",
      description:
        "Historical releases and older modules retained for legacy project compatibility, reproducibility, and maintenance of past workflows.",
      specs: ["Historical Releases", "Older Modules", "Compatibility Notes"],
      href: "/en/install/legacy",
      cta: "Browse Archive"
    }
  ]
};

export const install1p4En: InstallDetailPageData = {
  htmlLang: "en",
  canonicalPath: "/en/install/1p4",
  pageTitle: "SPONGEMM | Install SPONGE 1.4",
  pageDescription:
    "Installation entry points for the stable SPONGE 1.4 release and its companion tools — Xponge, the VMD plugin, and prips.",
  heroTitle: "Install SPONGE 1.4",
  bands: [
    {
      id: "sponge-source",
      eyebrow: "01 · Core program",
      title: "SPONGE source download",
      description:
        "Stable source release of SPONGE 1.4, containing the standard MD program and the TI program.",
      rows: [
        {
          href: "/packages/programs/sponge_v1.4.zip",
          download: true,
          title: "sponge_v1.4.zip",
          subtitle: "Unzip and follow the bundled documentation to build.",
          badge: "4.5 MB ↓"
        }
      ]
    },
    {
      id: "xponge",
      eyebrow: "02 · Processing",
      title: "Install Xponge",
      description: "Xponge is a Python-based pre- and post-processing toolkit for SPONGE.",
      rows: [
        {
          title: "Install via PyPI",
          subtitle: "pip install Xponge",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    },
    {
      id: "vmd",
      eyebrow: "03 · Visualization",
      title: "Install the VMD plugin",
      description:
        "The plugin lets VMD read SPONGE trajectory and topology files directly. See the README inside the archive for usage.",
      rows: [
        {
          href: "/packages/tools/sponge_vmd_v1.4.3.zip",
          download: true,
          title: "sponge_vmd_v1.4.3.zip",
          subtitle: "VMD plugin package, README included.",
          badge: "376 KB ↓"
        }
      ]
    },
    {
      id: "prips",
      eyebrow: "04 · Runtime interface",
      title: "Install prips",
      description:
        "prips is the Python Runtime Interface Plugin of SPONGE, used together with the main SPONGE program.",
      rows: [
        {
          title: "Install via PyPI",
          subtitle: "pip install prips",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    }
  ]
};

export const install2p0En: InstallDetailPageData = {
  htmlLang: "en",
  canonicalPath: "/en/install/2p0",
  pageTitle: "SPONGEMM | Install SPONGE 2.0",
  pageDescription:
    "Installation entry points for SPONGE 2.0: conda pre-built packages, GitHub source, and the companion tools Xponge, the VMD plugin, and prips.",
  heroTitle: "Install SPONGE 2.0",
  bands: [
    {
      id: "conda",
      eyebrow: "01 · Pre-built",
      title: "Install via conda",
      description:
        "SPONGE 2.0 ships pre-built packages for CPU and CUDA. Pick the channel that matches your hardware.",
      rows: [
        {
          title: "CPU build",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CPU",
          subtitleAsCode: true,
          badge: "CPU"
        },
        {
          title: "CUDA 12 build",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CUDA12",
          subtitleAsCode: true,
          badge: "CUDA 12"
        },
        {
          title: "CUDA 13 build",
          subtitle: "conda install -c https://conda.spongemm.cn SPONGE-CUDA13",
          subtitleAsCode: true,
          badge: "CUDA 13"
        }
      ]
    },
    {
      id: "source",
      eyebrow: "02 · Source",
      title: "GitHub source",
      description: "Pull the latest SPONGE 2.0 source from GitHub and build it yourself.",
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
      eyebrow: "03 · Processing",
      title: "Install Xponge",
      description: "Xponge is a Python-based pre- and post-processing toolkit for SPONGE.",
      rows: [
        {
          title: "Install via PyPI",
          subtitle: "pip install Xponge",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    },
    {
      id: "vmd",
      eyebrow: "04 · Visualization",
      title: "Install the VMD plugin",
      description:
        "The plugin lets VMD read SPONGE trajectory and topology files directly. See the README inside the archive for usage.",
      rows: [
        {
          href: "/packages/tools/sponge_vmd_v1.4.3.zip",
          download: true,
          title: "sponge_vmd_v1.4.3.zip",
          subtitle: "VMD plugin package, README included.",
          badge: "376 KB ↓"
        }
      ]
    },
    {
      id: "prips",
      eyebrow: "05 · Runtime interface",
      title: "Install prips",
      description:
        "prips is the Python Runtime Interface Plugin of SPONGE, used together with the main SPONGE program.",
      rows: [
        {
          title: "Install via PyPI",
          subtitle: "pip install prips",
          subtitleAsCode: true,
          badge: "PyPI"
        }
      ]
    }
  ]
};

export const installLegacyEn: InstallLegacyPageData = {
  htmlLang: "en",
  canonicalPath: "/en/install/legacy",
  pageTitle: "SPONGEMM | SPONGE legacy",
  pageDescription: "Legacy SPONGE releases and older module resources.",
  heroTitle: "Legacy Resources",
  ledeHtml:
    'This page keeps unmaintained SPONGE releases and older module resources for compatibility, reproducibility, and maintenance of historical workflows. For new projects, use <a href="/en/install/2p0">SPONGE 2.0</a> or <a href="/en/install/1p4">SPONGE 1.4</a>.',
  notice: {
    strong: "Compatibility note",
    text:
      "These resources are not updated with the current stable release. Check old input files, module interfaces, and build environments before use."
  },
  programs: {
    heading: "Historical Program Releases",
    downloads: [
      {
        href: "/packages/programs/sponge_v1.3.zip",
        title: "SPONGE 1.3",
        description:
          "An unmaintained historical release kept for reproducing and maintaining older projects.",
        filename: "sponge_v1.3.zip",
        size: "4.6 MB"
      },
      {
        href: "/packages/programs/sponge_v1.2.6.zip",
        title: "SPONGE 1.2.6",
        description:
          "An unmaintained historical release that preserves an earlier feature set.",
        filename: "sponge_v1.2.6.zip",
        size: "4.5 MB"
      },
      {
        href: "/packages/programs/sponge_nmd_pure_v1.1.zip",
        title: "SPONGE 1.1",
        description:
          "An early NMD pure release, kept only for compatibility with historical workflows.",
        filename: "sponge_nmd_pure_v1.1.zip",
        size: "379 KB"
      }
    ]
  },
  modules: {
    heading: "Older Modules",
    description:
      "Module resources are grouped by compatibility status. Modules that have not been updated require review and adaptation; integrated modules are kept for older workflows.",
    bands: [
      {
        title: "Modules not updated",
        description:
          "These modules cannot be used directly with the latest stable SPONGE release and usually require modification.",
        rows: [
          {
            href: "/packages/modules/fgm_double_layer_mod_v2.zip",
            title: "FGM double layer slab",
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
        title: "Integrated modules",
        description:
          "These modules have been integrated into newer SPONGE versions. The links are retained for compatibility with older releases.",
        rows: [
          {
            href: "/packages/modules/exforce.zip",
            title: "External force",
            filename: "exforce.zip",
            size: "6.6 KB"
          },
          {
            href: "/packages/modules/meta1d_mod.zip",
            title: "1D metadynamics",
            filename: "meta1d_mod.zip",
            size: "14 KB"
          },
          {
            href: "/packages/modules/classic_sits_mod_v1p2p5.zip",
            title: "Classic SITS",
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
            title: "Python interface",
            filename: "pyplugin.zip",
            size: "4.5 KB"
          }
        ]
      }
    ]
  }
};
