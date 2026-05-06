import { highlights } from "./homepage";

export const siteNavEn = [
  { label: "Home", href: "/en/home" },
  { label: "Docs", href: "/en/docs" },
  { label: "Install", href: "/en/install" },
  { label: "Insights", href: "/en/insights" },
  { label: "Contact", href: "/en/contact" },
  { label: "GitHub", href: "https://github.com/SPONGEMM/SPONGE", icon: "github" }
];

export const heroEn = {
  intro:
    "Developed by the Yi Qin Gao group at Peking University, SPONGE continues to advance high-performance molecular dynamics, enhanced sampling, free energy calculation, and AI-enhanced molecular simulation."
};

export const announcementsEn = [
  {
    type: "Beta Testing",
    title: "SPONGE 2.0 is currently in beta testing",
    description:
      "SPONGE 2.0 is improving core functionality and documentation for next-generation molecular simulation workflows. Stay tuned for progress updates.",
    href: "/en/docs",
    action: "View Docs"
  }
];

export const componentsEn = [
  {
    name: "SPONGE",
    description:
      "SPONGE is the core high-performance molecular simulation program, supporting molecular dynamics, enhanced sampling, free energy calculation, and acceleration across multiple hardware platforms.",
    citation:
      "SPONGE: A GPU-Accelerated Molecular Dynamics Package with Enhanced Sampling and AI-Driven Algorithms",
    doi: "https://doi.org/10.1002/cjoc.202100456"
  },
  {
    name: "MindSPONGE",
    description:
      "MindSPONGE is an AI-enhanced SPONGE branch developed with the MindSpore neural network framework.",
    citation: "Artificial Intelligence Enhanced Molecular Simulations",
    doi: "https://doi.org/10.1021/acs.jctc.3c00214"
  },
  {
    name: "Xponge",
    description: "Xponge is a Python package for pre- and post-processing molecular simulations.",
    citation: "Xponge: A Python package to perform pre- and post-processing of molecular simulations",
    doi: "https://doi.org/10.21105/joss.04467"
  }
];

export const highlightsEn = highlights;

export const updatesEn = [
  { date: "2026", title: "SPONGE 2.0 enters beta testing for next-generation molecular simulation workflows" },
  { date: "2024", title: "SPONGE 1.4 is released with expanded simulation features and documentation" },
  { date: "2023", title: "SPONGE 1.3 is released, advancing enhanced sampling, free energy calculation, and examples" },
  { date: "2021", title: "The SPONGE software paper introduces GPU-accelerated MD, enhanced sampling, and AI-driven algorithms" }
];

export const friendLinksEn = [
  {
    name: "AsterFire Go",
    description:
      "AsterFire Go is a smart scientific computing platform developed by Beijing Sidereus Intelligent Computing Technology Co., Ltd., supporting natural-language scientific task execution.",
    href: "https://sidereus-ai.com",
    badge: "AF"
  },
  {
    name: "DSDP",
    description:
      "Deep Site and Docking Pose (DSDP) is a GPU-accelerated blind docking strategy developed by the Yi Qin Gao group.",
    href: "https://github.com/PKUGaoGroup/DSDP",
    badge: "DS"
  },
  {
    name: "MindScience",
    description:
      "MindScience is the scientific computing ecosystem of MindSpore and includes projects such as MindSPONGE.",
    href: "https://github.com/mindspore-ai/mindscience",
    badge: "MS"
  }
];
