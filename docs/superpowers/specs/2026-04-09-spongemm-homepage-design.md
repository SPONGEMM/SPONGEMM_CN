# SPONGEMM Astro Homepage Design

## Context

The current site content has already been exported from wiki.js into `/Users/yuhao/SPONGE_web_astro/spongemm_cn_gitee`. The first migration target is the Chinese homepage. The redesign should preserve the original homepage's core content while rebuilding the presentation in Astro as a modern landing page.

The user explicitly chose:

- Preserve the current homepage introduction as the primary hero copy
- Keep the original homepage content as the source of truth
- Use a modern landing-page structure rather than a document-style homepage
- Reference the visual language of the provided `stitch` mockup

This spec covers only the first Astro deliverable: a redesigned Chinese homepage. It does not yet include full page-by-page migration of documentation, tutorials, download detail pages, or English localization.

## Goals

- Initialize a clean Astro project in the repository root
- Build a new Chinese SPONGEMM homepage in Astro
- Preserve the current homepage's core information and research tone
- Reorganize the content into a modern landing-page information hierarchy
- Establish a reusable visual system that can support later migration of the rest of the site

## Non-Goals

- Full migration of all wiki.js pages in this phase
- Rewriting the scientific content substantially
- Building a CMS or automated markdown ingestion pipeline in this phase
- Finalizing bilingual routing in the first pass
- Designing every downstream page linked from the homepage

## Source Content

The homepage content will be derived primarily from:

- `/Users/yuhao/SPONGE_web_astro/spongemm_cn_gitee/home.md`
- assets under `/Users/yuhao/SPONGE_web_astro/spongemm_cn_gitee/首页`

The homepage should preserve these content groups:

- SPONGE introduction
- Basic scientific/software context
- Three major components: CudaSPONGE, MindSPONGE, Xponge
- Selected publications and application cases
- Site update history

## Design Direction

### Positioning

The homepage should feel like a modern scientific software landing page rather than a wiki index. It should communicate three things quickly:

- What SPONGE is
- What the three main parts are
- Why the project is credible and actively used

### Visual Style

The page should borrow the high-level direction of the provided `stitch` reference:

- light color mode
- deep teal / blue-green primary palette
- strong, modern display typography
- clean surfaces, cards, and spacing
- restrained gradients and subtle glass-like panels

The implementation should not copy the mockup literally. It should adapt that style to a research software homepage and use the existing SPONGE identity and scientific imagery.

### Typography

- Headlines: `Space Grotesk`
- Body text: `Inter`
- Chinese fallback fonts should be included in the font stack for legibility

### Tone

- credible
- academic
- modern
- structured
- not sales-heavy

## Information Architecture

The homepage should be organized into these sections, in order.

### 1. Header

Navigation should be minimal and clear:

- 首页
- 文档
- 教程
- 下载
- 联系

The header should remain lightweight and sticky on scroll.

### 2. Hero

Purpose:

- Define SPONGE immediately
- Preserve the existing introduction
- Give users clear next actions

Content:

- Main heading based on the current homepage introduction
- Short supporting paragraph adapted from the existing intro without changing meaning
- Two primary actions:
  - 查看文档
  - 下载 SPONGE
- Optional secondary metadata chip for version or project status if a stable current value is available locally; otherwise omit

Layout:

- left text / right visual
- the right side uses an existing homepage scientific image or logo-based composition
- the hero background may include subtle radial gradients or blurred teal shapes

### 3. Overview / Basic Introduction

Purpose:

- Preserve the original homepage's "基本介绍" content
- Reduce the reading wall by turning dense text into readable blocks

Content:

- One concise introduction block adapted from the current long-form explanation
- Supporting highlight points extracted from the original text, such as:
  - GPU acceleration
  - enhanced sampling methods
  - modularity and extensibility

Presentation:

- two-column layout on desktop
- summary text on one side
- compact feature/highlight cards on the other

### 4. Three Components

Purpose:

- Explain the internal structure of SPONGE clearly

Content:

- CudaSPONGE
- MindSPONGE
- Xponge

Each card should include:

- component name
- one-sentence description based on the original homepage
- a compact visual/icon treatment
- an action link to an implemented internal route, or a non-broken disabled state until that route exists

Presentation:

- three-card grid
- reusable card component

### 5. Selected Research Highlights

Purpose:

- Preserve the publication/application credibility from the original homepage
- Make the research output visually scannable

Content strategy:

- Select 4 to 6 representative items from 2025, 2024, and 2023
- Keep year, title, image, and DOI link
- Prefer entries that already have strong accompanying visuals in `/首页`

Presentation:

- responsive card grid
- mixture of image sizes is acceptable if handled intentionally
- titles can be truncated visually, but full citation context should remain readable enough

### 6. Quick Entry Grid

Purpose:

- Turn the homepage into an effective site gateway

Entries:

- 下载
- 文档
- 教程
- 联系

Each entry should include:

- concise label
- short descriptive text
- directional affordance

### 7. Site Updates

Purpose:

- Preserve the original update log without overwhelming the page

Content strategy:

- show recent items from the original "网站更新" section
- first pass should display a compact subset rather than the full historical list
- provide a way to expand or link to future dedicated updates content if needed later

Presentation:

- timeline-inspired list or compact stacked cards
- visually quieter than the hero, components, and research sections

### 8. Footer

Include:

- project name
- key navigation links
- optional brief attribution to the Gao group if approved by source content usage

## Component Boundaries

The first Astro implementation should favor small reusable sections rather than a single large page file.

Expected building blocks:

- shared layout
- header
- hero section
- section heading block
- component feature card
- publication highlight card
- quick link card
- updates list
- footer

This decomposition matters because the rest of the wiki.js migration will likely reuse the same shell, spacing system, card language, and navigation.

## Content Handling Strategy

This first phase should prioritize a pragmatic manual migration over overengineering.

Recommended approach:

- manually curate homepage content into local data structures or section props
- copy only the specific homepage assets needed into Astro's public/assets area
- avoid building a generic importer before the structure of downstream pages is validated

Reasoning:

- the immediate task is one polished homepage, not a site-wide content pipeline
- manual curation allows cleaner hierarchy and better control over visual presentation
- this keeps the implementation focused and reviewable

## Asset Strategy

Use existing assets from `/首页` where they strengthen the homepage:

- logo assets for brand treatment
- publication images and GIFs for research highlights

Assets should be copied into the Astro project's static/public asset path rather than loaded from the old wiki export path directly. This keeps the new site self-contained.

## Responsiveness

The homepage must work well on both desktop and mobile.

Key requirements:

- hero stacks vertically on small screens
- card grids collapse cleanly
- publication cards remain readable on smaller widths
- header navigation degrades gracefully for mobile, with a simple menu pattern if needed

## Accessibility

Minimum expectations:

- sufficient color contrast in text and buttons
- meaningful `alt` text for scientific images
- visible focus states for navigation and actions
- semantic heading order
- avoid using motion as the only information cue

## Routing Assumptions For Phase 1

The first homepage should avoid broken links. If a destination page is not implemented yet, either create a minimal route stub or render the entry in a visually consistent but non-navigating disabled state. The homepage itself should live at the root Chinese entry point for the Astro site.

For this phase, the homepage should be treated as the primary landing page. English routing and bilingual switching can be deferred.

## Testing Expectations

For the first Astro implementation, testing should at minimum cover:

- project installs and runs locally
- Astro build succeeds
- homepage renders without missing assets
- layout remains usable on desktop and mobile widths

## Implementation Recommendation

Recommended implementation path:

1. Initialize Astro in the repository root
2. Set up global styles, fonts, tokens, and a base layout
3. Copy and organize homepage assets
4. Build the homepage sections in order: header, hero, overview, components, research highlights, quick links, updates, footer
5. Add route stubs only if required by homepage navigation
6. Verify local dev and production build

## Risks And Mitigations

### Risk: homepage becomes too text-heavy again

Mitigation:

- preserve the source content but split it into clear visual sections
- summarize long explanatory text where necessary without changing meaning

### Risk: overfitting to the stitch mockup

Mitigation:

- reuse its palette and page rhythm, not its exact product framing
- keep SPONGE-specific scientific content and imagery central

### Risk: implementation scope expands into full-site migration

Mitigation:

- explicitly keep this phase limited to homepage setup and reusable shell primitives

## Open Decisions Already Resolved

The following were confirmed during brainstorming:

- homepage should still reflect the original content
- the homepage structure should be a modern landing page
- the hero should preserve the current introduction to explain what SPONGE is
- the redesign should reference the `stitch` visual direction

## Immediate Next Step

After user approval of this spec, the next step is to write an implementation plan and then initialize the Astro project plus the homepage skeleton.
