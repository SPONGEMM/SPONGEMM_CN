# SPONGEMM Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize an Astro project in the repository root and ship a redesigned Chinese SPONGEMM homepage that preserves the original homepage content in a modern landing-page structure.

**Architecture:** Build a small Astro site with a shared layout, global design tokens, section-level components, and a single manually curated homepage data module derived from the exported wiki.js homepage. Copy only the assets needed for the homepage into the Astro project so the new site is self-contained and ready for later page-by-page migration.

**Tech Stack:** Astro, TypeScript, CSS, npm, Astro dev/build checks

---

## File Structure

### Planned files

- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `public/favicon.svg`
- Create: `public/assets/home/` (copied homepage images)
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`
- Create: `src/data/homepage.ts`
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/components/home/HeroSection.astro`
- Create: `src/components/home/OverviewSection.astro`
- Create: `src/components/home/ComponentsSection.astro`
- Create: `src/components/home/HighlightsSection.astro`
- Create: `src/components/home/QuickLinksSection.astro`
- Create: `src/components/home/UpdatesSection.astro`
- Create: `src/components/shared/SectionHeading.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/docs.astro`
- Create: `src/pages/tutorials.astro`
- Create: `src/pages/download.astro`
- Create: `src/pages/contact.astro`

### Responsibilities

- `src/data/homepage.ts` owns all homepage copy, links, highlights, and update entries for the first pass.
- `src/styles/global.css` owns theme tokens, layout utilities, and shared visual language.
- `src/layouts/BaseLayout.astro` owns fonts, metadata, and page shell wiring.
- `src/components/home/*` own each homepage section independently.
- route stubs in `src/pages/*.astro` prevent broken navigation while keeping implementation scope small.

## Task 1: Bootstrap Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `src/pages/index.astro`

- [ ] **Step 1: Write the failing bootstrap check**

Create a shell smoke test condition by verifying the root project does not build yet:

```bash
npm run build
```

Expected: command fails because `package.json` does not exist yet.

- [ ] **Step 2: Run the failing bootstrap check**

Run:

```bash
npm run build
```

Expected: shell exits non-zero with an npm error about missing `package.json` or missing script.

- [ ] **Step 3: Write minimal Astro project scaffolding**

Create `package.json`:

```json
{
  "name": "spongemm-web-astro",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "devDependencies": {
    "astro": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

Create `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://spongemm.cn"
});
```

Create `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Create `.gitignore`:

```gitignore
node_modules
dist
.astro
.DS_Store
```

Create a temporary `src/pages/index.astro`:

```astro
---
---

<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SPONGEMM</title>
  </head>
  <body>
    <main>SPONGEMM Astro bootstrap</main>
  </body>
</html>
```

- [ ] **Step 4: Install dependencies**

Run:

```bash
npm install
```

Expected: npm installs Astro and TypeScript successfully and writes `package-lock.json`.

- [ ] **Step 5: Run build to verify bootstrap passes**

Run:

```bash
npm run build
```

Expected: Astro build completes successfully and emits `dist/index.html`.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore src/pages/index.astro
git commit -m "chore: bootstrap astro site"
```

## Task 2: Add Global Layout And Theme Foundation

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro`
- Create: `public/favicon.svg`

- [ ] **Step 1: Write the failing layout test**

Define the first real page-shell expectation by checking that a layout file does not exist yet:

```bash
test -f src/layouts/BaseLayout.astro
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing layout test**

Run:

```bash
test -f src/layouts/BaseLayout.astro
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Write the base layout and global styles**

Create `src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";

interface Props {
  title: string;
  description?: string;
}

const {
  title,
  description = "SPONGE 分子动力学模拟软件"
} = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Create `src/styles/global.css`:

```css
:root {
  --bg: #f5f8f8;
  --surface: rgba(255, 255, 255, 0.78);
  --surface-strong: #ffffff;
  --text: #12313d;
  --muted: #4d6770;
  --line: rgba(0, 75, 99, 0.12);
  --primary: #004b63;
  --primary-strong: #00384a;
  --accent: #26a69a;
  --accent-soft: rgba(38, 166, 154, 0.14);
  --shadow: 0 20px 60px rgba(0, 45, 58, 0.08);
  --radius: 24px;
  --container: 1200px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(38, 166, 154, 0.12), transparent 28%),
    radial-gradient(circle at right top, rgba(0, 75, 99, 0.10), transparent 24%),
    var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(calc(100% - 32px), var(--container));
  margin: 0 auto;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.section {
  padding: 88px 0;
}
```

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="#004B63"/>
  <circle cx="32" cy="32" r="18" fill="#26A69A"/>
  <circle cx="32" cy="32" r="8" fill="#F5F8F8"/>
</svg>
```

Update `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="SPONGEMM">
  <main class="container section">
    <div class="panel" style="padding: 2rem; border-radius: 24px;">
      SPONGEMM homepage shell
    </div>
  </main>
</BaseLayout>
```

- [ ] **Step 4: Run build to verify layout foundation**

Run:

```bash
npm run build
```

Expected: Astro build passes with the shared layout and styles in place.

- [ ] **Step 5: Commit**

```bash
git add public/favicon.svg src/layouts/BaseLayout.astro src/styles/global.css src/pages/index.astro
git commit -m "feat: add global astro layout and theme foundation"
```

## Task 3: Curate Homepage Data And Copy Assets

**Files:**
- Create: `src/data/homepage.ts`
- Create: `public/assets/home/*`

- [ ] **Step 1: Write the failing data test**

Check that the data module does not exist yet:

```bash
test -f src/data/homepage.ts
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing data test**

Run:

```bash
test -f src/data/homepage.ts
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Create the homepage data module**

Create `src/data/homepage.ts`:

```ts
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
```

- [ ] **Step 4: Copy homepage assets**

Run:

```bash
mkdir -p public/assets/home
cp spongemm_cn_gitee/首页/logo_banner.5a4c6e8f.png public/assets/home/logo-banner.png
cp spongemm_cn_gitee/首页/2025-1.jpeg public/assets/home/2025-1.jpeg
cp spongemm_cn_gitee/首页/2025-2.jpeg public/assets/home/2025-2.jpeg
cp spongemm_cn_gitee/首页/2024-1.jpeg public/assets/home/2024-1.jpeg
cp spongemm_cn_gitee/首页/2023-4.png public/assets/home/2023-4.png
cp spongemm_cn_gitee/首页/2023-3.gif public/assets/home/2023-3.gif
cp spongemm_cn_gitee/首页/2023-2.jpg public/assets/home/2023-2.jpg
```

Expected: all referenced homepage assets exist under `public/assets/home/`.

- [ ] **Step 5: Run build to verify data and assets do not break the site**

Run:

```bash
npm run build
```

Expected: Astro build still passes.

- [ ] **Step 6: Commit**

```bash
git add src/data/homepage.ts public/assets/home
git commit -m "feat: add curated homepage content and assets"
```

## Task 4: Build Shared Site Chrome And Section Heading

**Files:**
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/components/shared/SectionHeading.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Write the failing component test**

Check that the shared site header does not exist yet:

```bash
test -f src/components/site/Header.astro
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing component test**

Run:

```bash
test -f src/components/site/Header.astro
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Implement the shared chrome**

Create `src/components/shared/SectionHeading.astro`:

```astro
---
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const { eyebrow, title, description } = Astro.props;
---

<div class="section-heading">
  {eyebrow && <p class="section-eyebrow">{eyebrow}</p>}
  <h2>{title}</h2>
  {description && <p class="section-description">{description}</p>}
</div>
```

Create `src/components/site/Header.astro`:

```astro
---
import { siteNav } from "../../data/homepage";
---

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/">
      <span class="brand-mark"></span>
      <span>SPONGEMM</span>
    </a>
    <nav class="nav">
      {siteNav.map((item) => (
        <a href={item.href}>{item.label}</a>
      ))}
    </nav>
  </div>
</header>
```

Create `src/components/site/Footer.astro`:

```astro
---
import { siteNav } from "../../data/homepage";
---

<footer class="site-footer">
  <div class="container footer-inner">
    <div>
      <p class="footer-title">SPONGEMM</p>
      <p class="footer-copy">面向下一代分子模拟的软件与研究平台。</p>
    </div>
    <div class="footer-links">
      {siteNav.map((item) => (
        <a href={item.href}>{item.label}</a>
      ))}
    </div>
  </div>
</footer>
```

Update `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/site/Header.astro";
import Footer from "../components/site/Footer.astro";
---

<BaseLayout title="SPONGEMM | 分子模拟主页">
  <Header />
  <main class="container section">
    <div class="panel" style="padding: 2rem; border-radius: 24px;">
      Homepage sections will render here.
    </div>
  </main>
  <Footer />
</BaseLayout>
```

Add the minimal matching CSS rules to `src/styles/global.css`:

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(245, 248, 248, 0.82);
  border-bottom: 1px solid rgba(0, 75, 99, 0.08);
}

.header-inner,
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: "Space Grotesk", "Inter", sans-serif;
  font-weight: 700;
}

.brand-mark {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 0 8px rgba(38, 166, 154, 0.12);
}

.nav,
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

- [ ] **Step 4: Run build to verify site chrome integration**

Run:

```bash
npm run build
```

Expected: build passes and the homepage renders header/footer without missing imports.

- [ ] **Step 5: Commit**

```bash
git add src/components/site/Header.astro src/components/site/Footer.astro src/components/shared/SectionHeading.astro src/styles/global.css src/pages/index.astro
git commit -m "feat: add shared site chrome and section heading"
```

## Task 5: Implement Hero, Overview, And Components Sections

**Files:**
- Create: `src/components/home/HeroSection.astro`
- Create: `src/components/home/OverviewSection.astro`
- Create: `src/components/home/ComponentsSection.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write the failing section test**

Check that the hero component does not exist yet:

```bash
test -f src/components/home/HeroSection.astro
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing section test**

Run:

```bash
test -f src/components/home/HeroSection.astro
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Implement the first homepage sections**

Create `src/components/home/HeroSection.astro`:

```astro
---
import { hero } from "../../data/homepage";
---

<section class="hero section">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="hero-eyebrow">{hero.eyebrow}</p>
      <h1>{hero.title}</h1>
      <p class="hero-intro">{hero.intro}</p>
      <p class="hero-supporting">{hero.supporting}</p>
      <div class="hero-actions">
        <a class="button button-primary" href={hero.primaryAction.href}>{hero.primaryAction.label}</a>
        <a class="button button-secondary" href={hero.secondaryAction.href}>{hero.secondaryAction.label}</a>
      </div>
    </div>
    <div class="hero-visual panel">
      <img src={hero.image.src} alt={hero.image.alt} />
    </div>
  </div>
</section>
```

Create `src/components/home/OverviewSection.astro`:

```astro
---
import SectionHeading from "../shared/SectionHeading.astro";
import { overview } from "../../data/homepage";
---

<section class="section">
  <div class="container overview-grid">
    <div>
      <SectionHeading eyebrow="基本介绍" title="面向复杂体系的高效分子模拟" />
      <p class="overview-body">{overview.body}</p>
    </div>
    <div class="overview-cards">
      {overview.highlights.map((item) => (
        <article class="overview-card panel">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

Create `src/components/home/ComponentsSection.astro`:

```astro
---
import SectionHeading from "../shared/SectionHeading.astro";
import { components } from "../../data/homepage";
---

<section class="section">
  <div class="container">
    <SectionHeading
      eyebrow="组成部分"
      title="由三个核心模块构成"
      description="保留原主页结构，但用更清晰的卡片布局解释 SPONGE 的内部组成。"
    />
    <div class="component-grid">
      {components.map((item) => (
        <article class="component-card panel">
          <p class="component-kicker">Core Module</p>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a href={item.href}>查看详情</a>
        </article>
      ))}
    </div>
  </div>
</section>
```

Update `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/site/Header.astro";
import Footer from "../components/site/Footer.astro";
import HeroSection from "../components/home/HeroSection.astro";
import OverviewSection from "../components/home/OverviewSection.astro";
import ComponentsSection from "../components/home/ComponentsSection.astro";
---

<BaseLayout title="SPONGEMM | 分子模拟主页">
  <Header />
  <main>
    <HeroSection />
    <OverviewSection />
    <ComponentsSection />
  </main>
  <Footer />
</BaseLayout>
```

Add the matching styles to `src/styles/global.css`:

```css
.hero-grid,
.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  align-items: center;
}

.hero h1,
.section-heading h2 {
  margin: 0;
  font-family: "Space Grotesk", "Inter", sans-serif;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero h1 {
  font-size: clamp(3rem, 7vw, 5.5rem);
  max-width: 10ch;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 600;
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
}

.button-secondary {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.75);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
```

- [ ] **Step 4: Run build to verify the first homepage sections**

Run:

```bash
npm run build
```

Expected: build passes and the homepage includes hero, overview, and component sections.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HeroSection.astro src/components/home/OverviewSection.astro src/components/home/ComponentsSection.astro src/pages/index.astro src/styles/global.css
git commit -m "feat: implement homepage hero overview and components"
```

## Task 6: Implement Research Highlights, Quick Links, And Updates

**Files:**
- Create: `src/components/home/HighlightsSection.astro`
- Create: `src/components/home/QuickLinksSection.astro`
- Create: `src/components/home/UpdatesSection.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write the failing highlights test**

Check that the highlights component does not exist yet:

```bash
test -f src/components/home/HighlightsSection.astro
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing highlights test**

Run:

```bash
test -f src/components/home/HighlightsSection.astro
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Implement the remaining homepage sections**

Create `src/components/home/HighlightsSection.astro`:

```astro
---
import SectionHeading from "../shared/SectionHeading.astro";
import { highlights } from "../../data/homepage";
---

<section class="section">
  <div class="container">
    <SectionHeading
      eyebrow="研究成果"
      title="代表性应用与论文精选"
      description="保留原首页中的成果脉络，并把重点条目重构为可视化卡片。"
    />
    <div class="highlight-grid">
      {highlights.map((item) => (
        <article class="highlight-card panel">
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div class="highlight-body">
            <p class="highlight-year">{item.year}</p>
            <h3>{item.title}</h3>
            <a href={item.doi} target="_blank" rel="noreferrer">查看 DOI</a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

Create `src/components/home/QuickLinksSection.astro`:

```astro
---
import SectionHeading from "../shared/SectionHeading.astro";
import { quickLinks } from "../../data/homepage";
---

<section class="section">
  <div class="container">
    <SectionHeading
      eyebrow="快速入口"
      title="从这里进入站点主要内容"
      description="下载、文档、教程和联系入口在首页集中呈现。"
    />
    <div class="quick-grid">
      {quickLinks.map((item) => (
        <a class="quick-card panel" href={item.href}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>进入页面</span>
        </a>
      ))}
    </div>
  </div>
</section>
```

Create `src/components/home/UpdatesSection.astro`:

```astro
---
import SectionHeading from "../shared/SectionHeading.astro";
import { updates } from "../../data/homepage";
---

<section class="section">
  <div class="container">
    <SectionHeading
      eyebrow="网站更新"
      title="近期更新记录"
      description="首页只展示近期条目，保留站点持续维护的信号。"
    />
    <div class="updates-list">
      {updates.map((item) => (
        <article class="update-row">
          <p class="update-date">{item.date}</p>
          <h3>{item.title}</h3>
        </article>
      ))}
    </div>
  </div>
</section>
```

Update `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/site/Header.astro";
import Footer from "../components/site/Footer.astro";
import HeroSection from "../components/home/HeroSection.astro";
import OverviewSection from "../components/home/OverviewSection.astro";
import ComponentsSection from "../components/home/ComponentsSection.astro";
import HighlightsSection from "../components/home/HighlightsSection.astro";
import QuickLinksSection from "../components/home/QuickLinksSection.astro";
import UpdatesSection from "../components/home/UpdatesSection.astro";
---

<BaseLayout title="SPONGEMM | 分子模拟主页">
  <Header />
  <main>
    <HeroSection />
    <OverviewSection />
    <ComponentsSection />
    <HighlightsSection />
    <QuickLinksSection />
    <UpdatesSection />
  </main>
  <Footer />
</BaseLayout>
```

Add the matching styles to `src/styles/global.css`:

```css
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.highlight-card,
.quick-card,
.update-row,
.overview-card,
.component-card {
  border-radius: var(--radius);
  overflow: hidden;
}

.highlight-body,
.quick-card,
.update-row,
.overview-card,
.component-card {
  padding: 24px;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.updates-list {
  display: grid;
  gap: 16px;
}

.update-row {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
}
```

- [ ] **Step 4: Run build to verify the full homepage composition**

Run:

```bash
npm run build
```

Expected: build passes with all homepage sections wired into the page.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HighlightsSection.astro src/components/home/QuickLinksSection.astro src/components/home/UpdatesSection.astro src/pages/index.astro src/styles/global.css
git commit -m "feat: implement homepage highlights links and updates"
```

## Task 7: Add Route Stubs And Responsive Finishing

**Files:**
- Create: `src/pages/docs.astro`
- Create: `src/pages/tutorials.astro`
- Create: `src/pages/download.astro`
- Create: `src/pages/contact.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write the failing route test**

Check that the docs route stub does not exist yet:

```bash
test -f src/pages/docs.astro
```

Expected: shell exits non-zero.

- [ ] **Step 2: Run the failing route test**

Run:

```bash
test -f src/pages/docs.astro
```

Expected: non-zero exit status because the file is absent.

- [ ] **Step 3: Implement route stubs and responsive rules**

Create `src/pages/docs.astro`, `src/pages/tutorials.astro`, `src/pages/download.astro`, and `src/pages/contact.astro` with the same minimal pattern:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Header from "../components/site/Header.astro";
import Footer from "../components/site/Footer.astro";

interface Props {
  title?: string;
}
---

<BaseLayout title="SPONGEMM">
  <Header />
  <main class="container section">
    <div class="panel" style="padding: 2rem; border-radius: 24px;">
      页面建设中，后续将逐步从 wiki.js 内容迁移到 Astro。
    </div>
  </main>
  <Footer />
</BaseLayout>
```

Append responsive rules to `src/styles/global.css`:

```css
@media (max-width: 960px) {
  .hero-grid,
  .overview-grid,
  .component-grid,
  .highlight-grid,
  .quick-grid {
    grid-template-columns: 1fr;
  }

  .header-inner,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
  }

  .hero h1 {
    max-width: none;
  }
}
```

- [ ] **Step 4: Run build to verify internal navigation targets**

Run:

```bash
npm run build
```

Expected: build passes and all homepage internal links resolve to actual routes.

- [ ] **Step 5: Commit**

```bash
git add src/pages/docs.astro src/pages/tutorials.astro src/pages/download.astro src/pages/contact.astro src/styles/global.css
git commit -m "feat: add route stubs and responsive rules"
```

## Task 8: Verify Dev And Production Output

**Files:**
- Modify: any files required by final fit-and-finish fixes found during verification

- [ ] **Step 1: Write the failing verification check**

Start the dev server and verify the project has never been run in dev mode yet:

```bash
npm run dev -- --host 0.0.0.0
```

Expected: before fixes, any runtime or missing-asset issue should be surfaced if present.

- [ ] **Step 2: Run the verification commands**

Run:

```bash
npm run build
```

Expected: successful Astro production build.

Run:

```bash
npm run dev -- --host 0.0.0.0
```

Expected: local dev server starts successfully and serves the homepage.

- [ ] **Step 3: Make only the minimal fixes required by verification**

If build or dev finds issues, patch the smallest possible set of files. Typical valid fixes include:

```css
/* Example: add a missing mobile rule or class selector typo fix */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
```

or:

```astro
<!-- Example: fix a wrong import path -->
import HeroSection from "../components/home/HeroSection.astro";
```

- [ ] **Step 4: Re-run verification until green**

Run:

```bash
npm run build
```

Expected: successful build with no missing imports or asset references.

Run:

```bash
npm run dev -- --host 0.0.0.0
```

Expected: dev server starts and the homepage is visually inspectable.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "fix: polish homepage verification issues"
```

## Self-Review

### Spec coverage

- Astro initialization: covered by Task 1
- visual system and layout shell: covered by Task 2 and Task 4
- curated homepage content from the old wiki export: covered by Task 3
- modern landing-page structure: covered by Task 5 and Task 6
- no broken homepage navigation: covered by Task 7
- build and run verification: covered by Task 8

### Placeholder scan

- No `TBD` or `TODO` placeholders remain in the execution steps.
- Route handling is explicit: either real stub pages or homepage links to those stubs.
- Verification includes both build and dev commands.

### Type consistency

- homepage data exports are referenced consistently as `siteNav`, `hero`, `overview`, `components`, `highlights`, `quickLinks`, and `updates`
- shared layout and site chrome imports use the same file paths across tasks

