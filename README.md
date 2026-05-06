# SPONGEMM Web Astro

SPONGEMM 官网的 Astro 重构版本。

仓库目标是基于 Astro 重新搭建 SPONGEMM 官网，原 wiki.js 内容已不再保留在仓库内。

## 当前状态

- 首页、联络、洞见（中英双语）已上线
- 文档页为 placeholder，安装页已补充基础内容
- RSS、sitemap、JSON-LD、hreflang 等 SEO 基础已就绪
- GitHub Actions 部署工作流已可用

## 本地开发

```bash
npm install
npm run dev      # 开发
npm run build    # 构建
npm run preview  # 本地预览构建结果
```

## 目录说明

- `src/pages/`：Astro 页面入口（中文为根路由，英文位于 `/en/`）
- `src/components/`：页面与布局组件
- `src/content/`：洞见的 MDX 内容（`insights/` 中文、`insights-en/` 英文）
- `src/data/`：导航与首页数据
- `src/lib/`：站点辅助
- `public/`：静态资源

## 后续工作

1. 补齐文档内容，并确认安装页中的 SPONGE 2.0 发布方式与遗留资源文件迁移
2. 视觉风格细节统一
3. 站内搜索
