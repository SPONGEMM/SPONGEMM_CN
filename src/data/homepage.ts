export const siteNav = [
  { label: "首页", href: "/" },
  { label: "文档", href: "/docs" },
  { label: "教程", href: "/tutorials" },
  { label: "下载", href: "/download" },
  { label: "联系", href: "/contact" }
];

export const hero = {
  eyebrow: "SPONGE Molecular Modeling",
  title: "面向下一代分子模拟的 SPONGE",
  intro:
    "SPONGE（Simulation Package tOward Next Generation molecular modelling）是由北京大学高毅勤课题组开发的分子动力学模拟程序。",
  supporting:
    "它聚焦复杂化学与生物体系的高效分子模拟，结合 GPU 加速、增强采样方法与模块化扩展能力，服务从基础研究到方法开发的多类场景。",
  primaryAction: { label: "查看文档", href: "/docs" },
  secondaryAction: { label: "下载 SPONGE", href: "/download" },
  image: {
    src: "/assets/home/logo-banner.png",
    alt: "SPONGE 首页品牌图形"
  }
};

export const overview = {
  body:
    "分子动力学模拟是化学、物理、生物和材料科学中的关键工具。随着体系规模与算法复杂度不断上升，软件需要同时具备更高的算力利用率和更强的可扩展性。SPONGE 以 GPU 计算为基础，同时结合多种增强采样方法与模块化设计，用于缩短模拟与实验之间的距离。",
  highlights: [
    { title: "GPU 加速", description: "面向高性能硬件设计，提高复杂体系模拟效率。" },
    { title: "增强采样", description: "支持多类先进采样方法，扩展热力学与动力学研究能力。" },
    { title: "模块化扩展", description: "便于整合新算法、深度学习势能和前后处理工具。" }
  ]
};

export const components = [
  {
    name: "CudaSPONGE",
    description: "使用 CUDA C/C++ 编写的分子动力学模拟程序。",
    href: "/docs"
  },
  {
    name: "MindSPONGE",
    description: "使用 MindSpore 神经网络框架编写的分子动力学模拟程序。",
    href: "/docs"
  },
  {
    name: "Xponge",
    description: "使用 Python 编写的分子动力学模拟前后处理工具。",
    href: "/docs"
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
