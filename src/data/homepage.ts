export const siteNav = [
  { label: "首页", href: "/home" },
  { label: "文档", href: "/docs" },
  { label: "安装", href: "/install" },
  { label: "洞见", href: "/insights" },
  { label: "联络", href: "/contact" },
  { label: "GitHub", href: "https://github.com/SPONGEMM/SPONGE", icon: "github" }
];

export const hero = {
  title: "SPONGE: 面向下一代分子科学的分子模拟软件",
  intro:
    "SPONGE 由北京大学高毅勤课题组开发，在高性能分子动力学、增强采样、自由能计算与 AI 增强分子模拟等方向持续推进。"
};

export const announcements = [
  {
    type: "版本测试",
    date: "2026/05",
    title: "SPONGE 2.0 正在进行 beta 测试",
    description:
      "SPONGE 2.0 面向新一代分子模拟工作流持续完善核心功能与文档。欢迎关注测试进展。",
    href: "/docs",
    action: "查看文档"
  }
];

export const citations = [
  {
    name: "SPONGE",
    role: "核心分子动力学软件",
    citation:
      "SPONGE: A GPU-Accelerated Molecular Dynamics Package with Enhanced Sampling and AI-Driven Algorithms",
    venue: "Chinese Journal of Chemistry",
    doi: "https://doi.org/10.1002/cjoc.202100456",
    bibtex: `@article{sponge2021,
  title = {SPONGE: A GPU-Accelerated Molecular Dynamics Package with Enhanced Sampling and AI-Driven Algorithms},
  journal = {Chinese Journal of Chemistry},
  doi = {10.1002/cjoc.202100456}
}`
  },
  {
    name: "MindSPONGE",
    role: "AI 增强分子模拟方法",
    citation: "Artificial Intelligence Enhanced Molecular Simulations",
    venue: "Journal of Chemical Theory and Computation",
    doi: "https://doi.org/10.1021/acs.jctc.3c00214",
    bibtex: `@article{mindsponge2023,
  title = {Artificial Intelligence Enhanced Molecular Simulations},
  journal = {Journal of Chemical Theory and Computation},
  doi = {10.1021/acs.jctc.3c00214}
}`
  },
  {
    name: "Xponge",
    role: "分子模拟前后处理工具",
    citation: "Xponge: A Python package to perform pre- and post-processing of molecular simulations",
    venue: "Journal of Open Source Software",
    doi: "https://doi.org/10.21105/joss.04467",
    bibtex: `@article{xponge2022,
  title = {Xponge: A Python package to perform pre- and post-processing of molecular simulations},
  journal = {Journal of Open Source Software},
  doi = {10.21105/joss.04467}
}`
  }
];

export const components = [
  {
    name: "SPONGE",
    description: "SPONGE 是面向高性能分子模拟的核心程序，支持分子动力学、增强采样、自由能计算以及多硬件平台加速。",
    citation:
      "SPONGE: A GPU-Accelerated Molecular Dynamics Package with Enhanced Sampling and AI-Driven Algorithms",
    doi: "https://doi.org/10.1002/cjoc.202100456"
  },
  {
    name: "MindSPONGE",
    description: "MindSPONGE是通过Mindspore神经网络框架编写的AI增强的SPONGE分支。",
    citation: "Artificial Intelligence Enhanced Molecular Simulations",
    doi: "https://doi.org/10.1021/acs.jctc.3c00214"
  },
  {
    name: "Xponge",
    description: "使用 Python 编写的分子动力学模拟前后处理工具。",
    citation: "Xponge: A Python package to perform pre- and post-processing of molecular simulations",
    doi: "https://doi.org/10.21105/joss.04467"
  }
];

export const highlights = [
  {
    year: "2025",
    title: "Effective Nucleation Size for Ice Crystallization",
    image: "/assets/home/2025-1.webp",
    alt: "Ice crystallization research visualization",
    doi: "https://doi.org/10.1021/acs.jctc.4c01588"
  },
  {
    year: "2025",
    title: "A Sinking Approach to Explore Arbitrary Areas in Free Energy Landscapes",
    image: "/assets/home/2025-2.webp",
    alt: "Free energy landscape research visualization",
    doi: "https://doi.org/10.1021/jacsau.5c00460"
  },
  {
    year: "2024",
    title: "Integrating Epigenetics, Proteomics, and Metabolomics to Reveal the Involvement of Wnt/β-Catenin Signaling Pathway in Oridonin-Induced Reproductive Toxicity",
    image: "/assets/home/2024-2.webp",
    alt: "Multi-omics and Wnt beta-catenin signaling research visualization",
    doi: "https://doi.org/10.3390/toxics12050339"
  },
  {
    year: "2024",
    title: "PMC-IZ: Electrostatics Calculation in Slab Geometric Molecular Dynamics Simulations",
    image: "/assets/home/2024-1.webp",
    alt: "Electrostatics simulation visualization",
    doi: "https://doi.org/10.1021/acs.jctc.3c01124"
  },
  {
    year: "2023",
    title: "Nanoscale one-dimensional close packing of interfacial alkali ions",
    image: "/assets/home/2023-4.webp",
    alt: "Interfacial alkali ion research visualization",
    doi: "https://doi.org/10.1038/s41565-023-01550-9"
  },
  {
    year: "2023",
    title: "Investigating the Activation Mechanism Differences between Human and Mouse cGAS",
    image: "/assets/home/2023-3.gif",
    alt: "cGAS molecular dynamics animation",
    doi: "https://doi.org/10.1021/acs.jpcb.3c02377"
  },
  {
    year: "2023",
    title: "High Li+ coordinated solvation sheaths enable high-quality Li metal anode",
    image: "/assets/home/2023-2.webp",
    alt: "Li metal anode research visualization",
    doi: "https://doi.org/10.1002/inf2.12411"
  },
  {
    year: "2023",
    title: "Effect of stereoregularity on excitation-dependent fluorescence and room-temperature phosphorescence of poly(2-vinylpyridine)",
    image: "/assets/home/2023-1.webp",
    alt: "Poly(vinylpyridine) research visualization",
    doi: "https://doi.org/10.1002/agt2.276"
  },
  {
    year: "2023",
    title: "Action at a distance: organic cation induced long range organization of interfacial water enhances hydrogen evolution and oxidation kinetics",
    image: "/assets/home/2023-5.gif",
    alt: "Interfacial water research animation",
    doi: "https://doi.org/10.1039/D3SC03300G"
  },
  {
    year: "2022",
    title: "Accelerating supramolecular aggregation by molecular sliding",
    image: "/assets/home/2022-1.gif",
    alt: "Supramolecular aggregation animation",
    doi: "https://doi.org/10.1039/D2CP04064F"
  }
];


export const updates = [
  { date: "2026", title: "SPONGE 2.0 进入 beta 测试，面向新一代分子模拟工作流持续完善" },
  { date: "2024", title: "发布 SPONGE 1.4 正式版本，继续扩展模拟功能与文档体系" },
  { date: "2023", title: "发布 SPONGE 1.3，推进增强采样、自由能计算与应用示例建设" },
  { date: "2021", title: "SPONGE 软件论文发表，系统介绍 GPU 加速分子动力学、增强采样与 AI 驱动算法" }
];

export const friendLinks = [
  {
    name: "AsterFire Go",
    description:
      "AsterFire Go 是北京星使智算科技有限公司开发的科学智算平台，支持用自然语言描述科研问题并自动执行计算任务。",
    href: "https://sidereus-ai.com",
    badge: "AF"
  },
  {
    name: "DSDP",
    description: "Deep Site and Docking Pose (DSDP) 是高毅勤课题组开发的 GPU 加速盲对接策略。",
    href: "https://github.com/PKUGaoGroup/DSDP",
    badge: "DS"
  },
  {
    name: "MindScience",
    description: "MindScience 是昇思 MindSpore 的科学计算生态项目入口，包含 MindSPONGE 等子项目。",
    href: "https://github.com/mindspore-ai/mindscience",
    badge: "MS"
  }
];
