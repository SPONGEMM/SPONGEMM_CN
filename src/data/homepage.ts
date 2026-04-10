export const siteNav = [
  { label: "首页", href: "/" },
  { label: "文档", href: "/docs" },
  { label: "教程", href: "/tutorials" },
  { label: "下载", href: "/download" },
  { label: "GitHub", href: "https://github.com/SPONGEMM/SPONGE", icon: "github" }
];

export const hero = {
  title: "Simulation Package tOward Next Generation molecular modelling",
  intro:
    "SPONGE是由北京大学高毅勤课题组开发的分子动力学模拟程序。",
  primaryAction: { label: "查看文档", href: "/docs" },
  secondaryAction: { label: "下载 SPONGE", href: "/download" }
};

export const overview = {
  body: `分子动力学（Molecular Dynamics, MD）模拟是化学、物理学、生物学、材料科学和许多其他领域的有用工具。在过去 40 年中，人们开发了各种高效的计算算法和MD程序，用于研究日益复杂和大型系统的动力学，如RNA 聚合酶、细胞膜中的膜蛋白、SARS-CoV-2病毒等。然而，随着应用范围和规模的扩大，分子模拟软件需要更高的计算能力。缩小模拟与实验之间差距的最直接策略是利用更强大的计算硬件。例如，Shaw研究所专门设计了安东（Anton），可以对系统大小为几百万个原子的单结构域蛋白质进行毫秒级模拟。相比之下，使用图形处理单元（GPU）可能是大多数研究小组最经济实惠和最有前途的方法。从另一个方面看，许多先进的计算算法也已开发出来并得到广泛应用，从而延长了模拟时间尺度。特别是在过去几十年中，人们开发了许多增强型采样方法，以实现快速热力学和/或动力学计算。这些方法包括但不限于广泛使用的伞状采样、元动力学、加速MD、复制交换分子动力学（REMD）、并行回火、模拟回火、多正则模拟（特别是通过Wang-Landau算法实现）以及许多其他方法。

在过去的 15 年中，我们致力于开发面向复杂化学和生物系统的高效分子模拟方法，设计了一系列增强型采样方法，实现了构象和轨迹空间的快速采样，并实现了复杂系统热力学和动力学特性的快速计算。 最近，我们开发了一个名为 SPONGE的国产MD模拟软件包，它不仅实现了GPU加速的传统MD模拟，还实现了我们课题组提出的高效增强采样方法。 该软件包具有高度模块化的特点，可以轻松集成其他功能或算法，尤其是最新的深度学习潜力和算法。`
};

export const components = [
  {
    name: "CudaSPONGE",
    description: "使用 CUDA C/C++ 编写的分子动力学模拟程序。",
    citation:
      "SPONGE: A GPU-Accelerated Molecular Dynamics Package with Enhanced Sampling and AI-Driven Algorithms",
    doi: "https://doi.org/10.1002/cjoc.202100456"
  },
  {
    name: "MindSPONGE",
    description: "使用 MindSpore 神经网络框架编写的分子动力学模拟程序。",
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
    image: "/assets/home/2025-1.jpeg",
    alt: "Ice crystallization research visualization",
    doi: "https://doi.org/10.1021/acs.jctc.4c01588"
  },
  {
    year: "2025",
    title: "A Sinking Approach to Explore Arbitrary Areas in Free Energy Landscapes",
    image: "/assets/home/2025-2.jpeg",
    alt: "Free energy landscape research visualization",
    doi: "https://doi.org/10.1021/jacsau.5c00460"
  },
  {
    year: "2024",
    title: "Integrating Epigenetics, Proteomics, and Metabolomics to Reveal the Involvement of Wnt/β-Catenin Signaling Pathway in Oridonin-Induced Reproductive Toxicity",
    image: null,
    alt: "",
    doi: "https://doi.org/10.3390/toxics12050339"
  },
  {
    year: "2024",
    title: "PMC-IZ: Electrostatics Calculation in Slab Geometric Molecular Dynamics Simulations",
    image: "/assets/home/2024-1.jpeg",
    alt: "Electrostatics simulation visualization",
    doi: "https://doi.org/10.1021/acs.jctc.3c01124"
  },
  {
    year: "2023",
    title: "Nanoscale one-dimensional close packing of interfacial alkali ions",
    image: "/assets/home/2023-4.png",
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
    image: "/assets/home/2023-2.jpg",
    alt: "Li metal anode research visualization",
    doi: "https://doi.org/10.1002/inf2.12411"
  },
  {
    year: "2023",
    title: "Effect of stereoregularity on excitation-dependent fluorescence and room-temperature phosphorescence of poly(2-vinylpyridine)",
    image: "/assets/home/2023-1.png",
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

export const heroHighlights = [
  {
    year: "2025",
    title: "Effective Nucleation Size for Ice Crystallization",
    image: "/assets/home/2025-1.jpeg",
    alt: "Ice crystallization research visualization",
    doi: "https://doi.org/10.1021/acs.jctc.4c01588"
  },
  {
    year: "2025",
    title: "A Sinking Approach to Explore Arbitrary Areas in Free Energy Landscapes",
    image: "/assets/home/2025-2.jpeg",
    alt: "Free energy landscape research visualization",
    doi: "https://doi.org/10.1021/jacsau.5c00460"
  },
  {
    year: "2024",
    title: "PMC-IZ: Electrostatics Calculation in Slab Geometric Molecular Dynamics Simulations",
    image: "/assets/home/2024-1.jpeg",
    alt: "Electrostatics simulation visualization",
    doi: "https://doi.org/10.1021/acs.jctc.3c01124"
  },
  {
    year: "2023",
    title: "Nanoscale one-dimensional close packing of interfacial alkali ions",
    image: "/assets/home/2023-4.png",
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
    image: "/assets/home/2023-2.jpg",
    alt: "Li metal anode research visualization",
    doi: "https://doi.org/10.1002/inf2.12411"
  }
];

export const quickLinks = [
  { title: "下载", description: "获取程序包、模块包与工具包入口。", href: "/download" },
  { title: "文档", description: "查看 CudaSPONGE、Xponge 等文档资料。", href: "/docs" },
  { title: "教程", description: "阅读安装指南与建模、增强采样示例。", href: "/tutorials" },
  { title: "联系", description: "获取项目联系信息与交流入口。", href: "/contact" }
];

export const updates = [
  { date: "2024/01/01", title: "推出 SPONGE 的 1.4 正式版本" },
  { date: "2023/12/29", title: "更新网站框架，使用 wiki.js" },
  { date: "2023/11/25", title: "更新 SPONGE 1.4b0 版本，并更新文档" },
  { date: "2023/03/12", title: "更新 SPONGE 1.3 版本" }
];

export const friendLinks = [
  {
    name: "GaliLeo",
    description:
      "GaliLeo 是北京星使智算科技有限公司（Sidereus AI）开发的科学智算平台，支持用自然语言描述科研问题并自动执行计算任务。",
    href: "https://sidereus-ai.com",
    image: "/assets/home/logo-banner.png",
    badge: "GL"
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
